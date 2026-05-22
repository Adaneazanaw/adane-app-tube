const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { initDatabase, dbPath } = require('./data/generator');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Database if not exists
initDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static Frontend files
app.use(express.static(path.join(__dirname, '../Frontend')));
// Serve static styles files
app.use('/styles', express.static(path.join(__dirname, '../styles')));

// Helper to read database
function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database:", error);
    return { articles: [] };
  }
}

// Helper to write database
function writeDB(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("Error writing database:", error);
  }
}

// Get all articles (supports filtering and search)
app.get('/api/news', (req, res) => {
  const db = readDB();
  let articles = db.articles || [];
  
  const { category, search } = req.query;

  // Filter by category
  if (category && category !== 'All') {
    articles = articles.filter(art => 
      art.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search query
  if (search) {
    const query = search.toLowerCase();
    articles = articles.filter(art => 
      art.title.toLowerCase().includes(query) || 
      art.summary.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query)
    );
  }

  res.json(articles);
});

// Get single article by ID (increments views)
app.get('/api/news/:id', (req, res) => {
  const db = readDB();
  const articles = db.articles || [];
  const articleIndex = articles.findIndex(art => art.id === req.params.id);

  if (articleIndex === -1) {
    return res.status(404).json({ error: "Article not found" });
  }

  // Increment views
  articles[articleIndex].views = (articles[articleIndex].views || 0) + 1;
  writeDB(db);

  res.json(articles[articleIndex]);
});

// Post a clap for an article
app.post('/api/news/:id/clap', (req, res) => {
  const db = readDB();
  const articles = db.articles || [];
  const articleIndex = articles.findIndex(art => art.id === req.params.id);

  if (articleIndex === -1) {
    return res.status(404).json({ error: "Article not found" });
  }

  articles[articleIndex].claps = (articles[articleIndex].claps || 0) + 1;
  writeDB(db);

  res.json({ claps: articles[articleIndex].claps });
});

// Add a comment to an article
app.post('/api/news/:id/comments', (req, res) => {
  const { username, text } = req.body;
  if (!username || !text) {
    return res.status(400).json({ error: "Username and text are required" });
  }

  const db = readDB();
  const articles = db.articles || [];
  const articleIndex = articles.findIndex(art => art.id === req.params.id);

  if (articleIndex === -1) {
    return res.status(404).json({ error: "Article not found" });
  }

  const newComment = {
    id: Math.random().toString(36).substr(2, 9),
    username: username.trim(),
    text: text.trim(),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  };

  if (!articles[articleIndex].comments) {
    articles[articleIndex].comments = [];
  }
  
  articles[articleIndex].comments.push(newComment);
  writeDB(db);

  res.status(201).json(newComment);
});

// Publish a new article (Admin/Creator mode)
app.post('/api/news', (req, res) => {
  const { title, category, summary, content, coverImage, author } = req.body;

  if (!title || !category || !summary || !content) {
    return res.status(400).json({ error: "Title, category, summary, and content are required" });
  }

  const db = readDB();
  const articles = db.articles || [];

  // Generate unique ID from title
  let generatedId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Ensure ID uniqueness
  let finalId = generatedId;
  let counter = 1;
  while (articles.some(art => art.id === finalId)) {
    finalId = `${generatedId}-${counter}`;
    counter++;
  }

  const textParagraphs = Array.isArray(content) 
    ? content 
    : content.split('\n').filter(p => p.trim() !== '');

  const newArticle = {
    id: finalId,
    title: title.trim(),
    category: category.trim(),
    summary: summary.trim(),
    content: textParagraphs,
    coverImage: coverImage ? coverImage.trim() : "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    author: author ? author.trim() : "Guest Tech Contributor",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    readTime: `${Math.max(2, Math.ceil((textParagraphs.join(' ').split(' ').length) / 200))} min read`,
    views: 0,
    claps: 0,
    featured: false,
    comments: []
  };

  articles.unshift(newArticle); // Prepend to the news list
  writeDB(db);

  res.status(201).json(newArticle);
});

// Start Server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`   ADANE APP TUBE SERVER IS RUNNING      `);
  console.log(`   Access portal: http://localhost:${PORT} `);
  console.log(`=========================================`);
});
