// Adane App Tube - Frontend Application Logic

// API Configuration
const API_BASE = '/api';

// Fallback Mock Database for Offline/Browser-Only Mode
const fallbackArticles = [
  {
    id: "gpt5-cognitive-agents",
    title: "GPT-5's Multimodal Fusion: Redefining Cognitive Agents",
    category: "AI & Machine Learning",
    summary: "OpenAI's latest model introduces real-time multimodal reasoning, shifting the paradigm from static chat prompts to fully autonomous cognitive agents.",
    content: [
      "In a major leap forward for artificial intelligence, OpenAI has officially unveiled GPT-5, built upon a novel architecture known as 'Multimodal Fusion'. Unlike its predecessors, which processed text, images, and audio through separate modules before stitching them together, GPT-5 processes these streams simultaneously within a single core neural network.",
      "This architecture enables the model to perceive and respond to the physical world in real-time. During a live demonstration, the AI was shown analyzing a live video feed of a robotics workshop, diagnosing an assembly error in a circuit board, and verbally guiding a human technician to solder a replacement chip, adapting instantly when the technician dropped a tool.",
      "The true power of GPT-5, however, lies in its agency. Rather than waiting for step-by-step instructions, users can define high-level objectives. The model can then construct its own plan, execute web searches, write and debug code in isolated environments, and check its own work. Industry leaders predict this will accelerate the deployment of autonomous systems in software engineering, legal review, and data science by years."
    ],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200",
    author: "Dr. Sarah Mitchell, Chief AI Architect",
    date: "May 22, 2026",
    readTime: "5 min read",
    views: 1420,
    claps: 342,
    featured: true,
    comments: [
      { id: "c1", username: "CodeNinja", text: "The multimodal fusion is wild. Real-time debugging assistance is going to change how we onboard junior developers.", date: "May 22, 2026" },
      { id: "c2", username: "TechEthicist", text: "This level of agency is impressive but raises huge concerns regarding security and agent alignment. Who controls the sandboxed execution environment?", date: "May 22, 2026" }
    ]
  },
  {
    id: "superconductor-breakthrough-trials",
    title: "The Superconductor Race: Room-Temperature Breakthroughs in Lab Trials",
    category: "Gadgets & Hardware",
    summary: "Researchers achieve zero-resistance power transmission at 15°C using a carbon-sulfur-hydrogen matrix, promising a new era of ultra-efficient gadgets and grids.",
    content: [
      "The Holy Grail of condensed matter physics—a room-temperature superconductor operating at ambient pressure—may finally be within reach. A global research consortium led by the Tokyo Institute of Technology has published findings detailing zero electrical resistance in a newly synthesized carbon-sulfur-hydrogen (CSH) matrix at temperatures up to 15°C (59°F).",
      "While previous superconductor breakthroughs required pressures comparable to the Earth's core, the team's new chemical doping process stabilizes the superconducting state at just 1.2 atmospheres. This brings the technology out of exotic high-pressure physics labs and directly into practical engineering environments.",
      "The implications for global technology are staggering. Zero-resistance transmission could eliminate the 5-10% energy loss currently experienced in power grids. For consumer electronics, it translates to smartphones that never run hot, electric vehicles with near-instantaneous battery charging, and hyper-powerful, silent laptop cooling systems utilizing electromagnetic levitation."
    ],
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    author: "Marcus Vance, Senior Hardware Analyst",
    date: "May 21, 2026",
    readTime: "6 min read",
    views: 980,
    claps: 215,
    featured: true,
    comments: [
      { id: "c3", username: "VoltMaster", text: "If this can be mass-produced, we are looking at a literal industrial revolution for energy grids. No transmission loss!", date: "May 21, 2026" }
    ]
  },
  {
    id: "quantum-encryption-financial-nodes",
    title: "Quantum Encryption Enters the Wild: Shielding Financial Nodes",
    category: "Cybersecurity",
    summary: "As quantum computing advances threat models, major European banks deploy Quantum Key Distribution (QKD) networks to secure high-value transactions.",
    content: [
      "The theoretical threat of quantum computers cracking RSA encryption has turned into an active defense race. A consortium of European financial institutions has successfully deployed the first multi-node Quantum Key Distribution (QKD) fiber network spanning Paris, Frankfurt, and Zurich.",
      "QKD relies on the fundamental principles of quantum mechanics rather than mathematical complexity. Keys are encoded onto single photons. Because of the quantum observer effect, any attempt by an eavesdropper to intercept or measure the photons alters their quantum state, immediately alert-logging the breach and destroying the key.",
      "Security officers highlight that this system shields transactions against 'harvest now, decrypt later' attacks, where hackers store encrypted government and bank communications hoping to decrypt them once quantum computers mature. This production rollout proves that quantum cryptography is no longer theoretical, but a necessary shield for the global economy."
    ],
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    author: "Elena Rostova, Cybersecurity Lead",
    date: "May 20, 2026",
    readTime: "4 min read",
    views: 840,
    claps: 189,
    featured: true,
    comments: [
      { id: "c4", username: "Alice_K", text: "Harvest now, decrypt later is a terrifying concept. Glad to see banks taking proactive steps.", date: "May 20, 2026" }
    ]
  },
  {
    id: "webgpu-console-grade-browsers",
    title: "The Rise of WebGPU: Console-Grade Gaming Directly in the Browser",
    category: "Software Engineering",
    summary: "WebGPU is replacing WebGL, bypassing browser abstraction layers to give developers direct access to GPU pipelines for high-fidelity web games and apps.",
    content: [
      "For years, web browsers were viewed as second-class environments for heavy graphic workloads. WebGPU, the successor to WebGL, has officially changed the playing field. By offering modern graphics API compatibility (similar to Vulkan, Metal, and DirectX 12), WebGPU bypasses heavy translation layers and gives developers low-level access to graphics hardware.",
      "The result is a quantum leap in browser rendering capabilities. Tech demo portals are now showcasing real-time ray-traced scenes, complex fluid dynamics, and massive multiplayer worlds running at 120 FPS inside a simple Chrome or Firefox tab, without requiring any downloads or plugins.",
      "Software developers are also leveraging WebGPU for client-side machine learning. Large language models and diffusion networks can now run directly on the user's local GPU through the browser, opening up private, low-latency AI apps that don't cost developers a fortune in cloud hosting bills."
    ],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    author: "Devon Reynolds, Graphics Architect",
    date: "May 19, 2026",
    readTime: "7 min read",
    views: 1120,
    claps: 290,
    featured: true,
    comments: [
      { id: "c5", username: "JSGamer", text: "I played a fully rendered Unreal Engine 5 demo in Safari last night. No lag, no installation. The web is evolving.", date: "May 19, 2026" }
    ]
  },
  {
    id: "starship-orbitals-mars-logistics",
    title: "Starship Orbitals: The Logistics of a Self-Sustaining Mars Base",
    category: "Space Exploration",
    summary: "As weekly heavy launches become routine, SpaceX reveals its master flight plan for establishing automated fuel refineries on the Martian surface.",
    content: [
      "SpaceX's orbital architecture is shifting focus from merely landing on Mars to establishing permanent logistics lanes. In a newly released whitepaper, the aerospace giant outlined plans for a fleet of automated 'Fuel Refiner' Starships slated for launch during the next Earth-Mars orbital alignment.",
      "These specialized vessels will land autonomously, deploy solar arrays, and use the Sabatier process to combine carbon dioxide from the Martian atmosphere with water ice mined from sub-surface deposits. This creates liquid methane and liquid oxygen, refueling the Starships for their return journey.",
      "By establishing a self-sustaining fuel supply on Mars, SpaceX hopes to reduce the cost of return flights to near zero. Scientists emphasize that local propellant production is the single most critical factor for colonizing the Red Planet, turning Mars into a stepping stone for the outer solar system."
    ],
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    author: "Dr. Arthur Pendelton, Aerospace Historian",
    date: "May 18, 2026",
    readTime: "8 min read",
    views: 1530,
    claps: 405,
    featured: false,
    comments: [
      { id: "c6", username: "SpaceGeek", text: "The Sabatier fuel plant is key. Sending fuel for a return trip from Earth is economically impossible.", date: "May 18, 2026" }
    ]
  },
  {
    id: "defi3-autonomous-liquidity",
    title: "DeFi 3.0: Autonomous Liquidity Protocols Powered by Neural Nets",
    category: "FinTech",
    summary: "Next-gen decentralized finance contracts utilize on-chain machine learning models to prevent impermanent loss and optimize yields in real-time.",
    content: [
      "Decentralized Finance (DeFi) is undergoing a major evolution. DeFi 1.0 introduced automated market makers, and DeFi 2.0 optimized protocol-owned liquidity. Now, DeFi 3.0 leverages lightweight machine learning models executed directly on-chain through zero-knowledge virtual machines.",
      "These smart contracts dynamically adjust swap fees, liquidity bands, and interest rates based on real-time volatility tracking. In traditional liquidity pools, sudden market crashes result in heavy 'impermanent loss' for liquidity providers. The neural-net powered pools automatically contract or widen spread parameters to protect assets.",
      "Financial regulators are watching closely. While the efficiency gains are undeniable, the introduction of black-box algorithms managing billions in capital introduces new systemic risks. If a model encounters out-of-distribution market data, the autonomous adjustments could trigger massive cascading liquidations."
    ],
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
    author: "Linus Vance, Decentralized Finance Specialist",
    date: "May 17, 2026",
    readTime: "5 min read",
    views: 720,
    claps: 120,
    featured: false,
    comments: []
  },
  {
    id: "apple-vision-pro-2-sleek",
    title: "Apple Vision Pro 2: Sleeker Glass, Wider FOV, and Micro-OLED Upgrades",
    category: "Gadgets & Hardware",
    summary: "Apple's second-generation spatial computer slims down weight by 30%, increases visual field-of-view, and integrates dual-lens eye tracking.",
    content: [
      "Apple's inaugural entry into spatial computing was praised for its technology but critiqued for its bulk and weight. Addressing these concerns, Apple has launched the Vision Pro 2, featuring a redesigned carbon-fiber chassis that cuts overall weight by a substantial 30%.",
      "The outer glass shield has been replaced with a premium, impact-resistant light-bending composite, and the internal displays have been upgraded to 4K Micro-OLED screens running at 100Hz. Field of view has been expanded by 15 degrees, reducing the 'goggle effect' that plagued the first iteration.",
      "Battery life has also seen improvements, with a new dynamic refresh rate engine that clocks down display pixels when focused on static text. Together with a more flexible fabric headband, Apple is positioning the Vision Pro 2 not just as a legitimate replacement for physical workstation monitors."
    ],
    coverImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200",
    author: "Chloe Bennett, Spatial UX Analyst",
    date: "May 16, 2026",
    readTime: "5 min read",
    views: 1210,
    claps: 233,
    featured: false,
    comments: [
      { id: "c7", username: "Visionary", text: "The 30% weight reduction is the real winner here. The original was just too heavy for long work sessions.", date: "May 16, 2026" }
    ]
  },
  {
    id: "rust-dominates-linux-kernel",
    title: "Rust Dominates Linux Kernel Development: The Core Modernization Wave",
    category: "Software Engineering",
    summary: "As kernel version 6.15 approaches, Rust drivers are officially promoted to production status, bringing compiler-enforced memory safety to core systems.",
    content: [
      "The debate over introducing a second language to the Linux kernel is officially over. Linus Torvalds and core maintainers have announced that key device drivers and network stacks written in Rust are now officially designated as production-stable in the upcoming 6.15 kernel release.",
      "C has been the undisputed king of systems programming for decades, but its lack of memory safety guarantees has led to recurring vulnerabilities. Rust solves this by enforcing strict borrowing and ownership rules at compile time, eliminating null pointer dereferences, buffer overflows, and data races.",
      "The transition has not been without friction. Old-school kernel engineers raised concerns about compiler compile times and the complexity of Rust's syntax. However, the drastic reduction in kernel panics and memory leaks in Rust-based experimental builds has convinced even the most ardent skeptics."
    ],
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200",
    author: "Aris Thorne, Kernel Maintainer",
    date: "May 15, 2026",
    readTime: "6 min read",
    views: 1350,
    claps: 312,
    featured: false,
    comments: [
      { id: "c8", username: "C_purist", text: "Rust is nice, but I'll miss the simplicity of C. Though I can't argue with compiler-enforced safety.", date: "May 15, 2026" }
    ]
  },
  {
    id: "biometric-voice-cloning-threats",
    title: "Biometric Hacking: The Threat of Generative Voice Cloning on Mobile Security",
    category: "Cybersecurity",
    summary: "Hackers use 3-second audio clips to bypass phone-banking and device-unlock verification systems, forcing a shift towards multi-layered behavioral metrics.",
    content: [
      "Your voice may no longer be your password. A surge in sophisticated social engineering attacks has targeted voice-biometric authentication systems, using advanced generative audio models capable of cloning a victim's vocal blueprint from a mere three seconds of background audio.",
      "Attackers harvest these short audio snippets from public social media profiles or spam calls. The cloned voices are then fed into telephone banking portals or smart-device unlock algorithms. Because the models capture micro-intonations and speech cadences, traditional voice-biometrics fail to identify the spoof.",
      "In response, cybersecurity networks are urging financial services to deprecate voice-only passwords. Companies are racing to implement multi-layered biometric suites, which combine voice frequency verification with real-time face mesh analysis and behavioral metrics like keystroke dynamics."
    ],
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    author: "Elena Rostova, Cybersecurity Lead",
    date: "May 14, 2026",
    readTime: "5 min read",
    views: 690,
    claps: 145,
    featured: false,
    comments: []
  },
  {
    id: "wasm-cloud-microservices",
    title: "WebAssembly (Wasm) in the Cloud: Replacing Microservices Containers?",
    category: "Software Engineering",
    summary: "Cloud architects turn to lightweight WebAssembly runtimes for serverless execution, boasting 100x faster startup times than Docker containers.",
    content: [
      "While WebAssembly (Wasm) initially gained fame for running native applications inside web browsers, it is quickly conquering backend cloud infrastructure. Developers are leveraging runtimes like Wasmtime and WasmEdge to deploy microservices that bypass the overhead of traditional Linux containers.",
      "Traditional Docker containers package entire operating systems, leading to image sizes in hundreds of megabytes and startup latencies of several seconds. In contrast, Wasm binaries are sandboxed, platform-agnostic, and average under 5MB in size. They can spin up in less than a millisecond.",
      "This rapid initialization allows cloud providers to scale serverless functions to zero and spin them up instantly on demand. Wasm's secure-by-default capability-based security model also ensures that a compromised microservice cannot access unauthorized file paths or network ports."
    ],
    coverImage: "https://images.unsplash.com/photo-1484417894907-623942c8ea29?q=80&w=1200",
    author: "Devon Reynolds, Cloud Architect",
    date: "May 13, 2026",
    readTime: "6 min read",
    views: 890,
    claps: 204,
    featured: false,
    comments: [
      { id: "c9", username: "DockerFan", text: "Interesting, but Wasm lacks the rich ecosystem of debug tools that Docker has accumulated. Still, the startup time is incredible.", date: "May 13, 2026" }
    ]
  }
];

// Application State
const state = {
  isBackendOffline: false,
  articles: [],
  bookmarks: JSON.parse(localStorage.getItem('adane_bookmarks')) || [],
  currentCategory: 'All',
  searchQuery: '',
  currentSlide: 0,
  featuredArticles: [],
  sliderInterval: null
};

// DOM Elements (populated on DOMContentLoaded to avoid null refs)
let elements = {};

// Category styling map for tags
const categoryStyleMap = {
  "AI & Machine Learning": "tag-ai",
  "Gadgets & Hardware": "tag-gadgets",
  "Cybersecurity": "tag-cyber",
  "Software Engineering": "tag-software",
  "Space Exploration": "tag-space",
  "FinTech": "tag-fintech"
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Populate DOM element references now that the document is ready
  elements = {
    logo: document.getElementById('logoBranding'),
    searchInput: document.getElementById('searchNewsInput'),
    bookmarksToggle: document.getElementById('bookmarksToggleBtn'),
    bookmarkCountBadge: document.getElementById('bookmarkCountBadge'),
    openPublishModal: document.getElementById('openPublishModalBtn'),
    sliderTrack: document.getElementById('sliderTrack'),
    prevSlide: document.getElementById('prevSlideBtn'),
    nextSlide: document.getElementById('nextSlideBtn'),
    sliderDots: document.getElementById('sliderDots'),
    categoryFilters: document.getElementById('categoryFilterNav'),
    resultsCount: document.getElementById('resultsCountText'),
    newsGrid: document.getElementById('newsGridContainer'),
    bookmarksDrawer: document.getElementById('bookmarksDrawer'),
    bookmarksDrawerBody: document.getElementById('bookmarksDrawerBody'),
    closeBookmarksDrawer: document.getElementById('closeBookmarksDrawerBtn'),
    articleReaderModal: document.getElementById('articleReaderModal'),
    articleModalContent: document.getElementById('articleModalContent'),
    closeArticleModal: document.getElementById('closeArticleModalBtn'),
    publishNewsModal: document.getElementById('publishNewsModal'),
    closePublishModal: document.getElementById('closePublishModalBtn'),
    publishNewsForm: document.getElementById('publishNewsForm')
  };

  setupEventListeners();
  loadBookmarksBadge();
  initClientDatabase(); // Pre-load LocalStorage with fallback if empty
  
  // Probe API backend connectivity
  probeBackendConnection().then(() => {
    fetchNewsGrid();
    fetchFeaturedNews();
  });
});

// Setup fallback database in LocalStorage if not present
function initClientDatabase() {
  if (!localStorage.getItem('adane_local_articles')) {
    localStorage.setItem('adane_local_articles', JSON.stringify(fallbackArticles));
  }
}

// Function to probe if express backend is online
async function probeBackendConnection() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200); // 1.2s timeout
    const res = await fetch(`${API_BASE}/news`, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (res.ok) {
      state.isBackendOffline = false;
      console.log("Adane App Tube: Backend server detected. Full-stack mode active.");
    } else {
      throw new Error();
    }
  } catch (err) {
    state.isBackendOffline = true;
    console.warn("Adane App Tube: Backend offline/unreachable. Switched to browser-only simulated database mode.");
  }
}

// Read from client database (simulating API search & categories)
function readClientDB() {
  return JSON.parse(localStorage.getItem('adane_local_articles')) || fallbackArticles;
}

// Save back to client database
function writeClientDB(articles) {
  localStorage.setItem('adane_local_articles', JSON.stringify(articles));
}

// Event Listeners
function setupEventListeners() {
  // Search
  let searchTimeout;
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      fetchNewsGrid();
    }, 300);
  });

  // Logo home navigation
  elements.logo.addEventListener('click', (e) => {
    e.preventDefault();
    elements.searchInput.value = '';
    state.searchQuery = '';
    state.currentCategory = 'All';
    
    // Reset filter active states
    document.querySelectorAll('.filter-pill').forEach(pill => {
      if (pill.dataset.category === 'All') {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    fetchNewsGrid();
  });

  // Category Filtering
  elements.categoryFilters.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    state.currentCategory = pill.dataset.category;
    fetchNewsGrid();
  });

  // Slider Controls
  elements.prevSlide.addEventListener('click', () => navigateSlider(-1));
  elements.nextSlide.addEventListener('click', () => navigateSlider(1));

  // Bookmarks Tray Toggle
  elements.bookmarksToggle.addEventListener('click', toggleBookmarksDrawer);
  elements.closeBookmarksDrawer.addEventListener('click', toggleBookmarksDrawer);

  // Article Reader Modal Close
  elements.closeArticleModal.addEventListener('click', () => {
    elements.articleReaderModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Publish Modal Toggle
  elements.openPublishModal.addEventListener('click', () => {
    elements.publishNewsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  elements.closePublishModal.addEventListener('click', () => {
    elements.publishNewsModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Publish Form Submission
  elements.publishNewsForm.addEventListener('submit', handlePublishSubmit);

  // Close modals on clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === elements.articleReaderModal) {
      elements.articleReaderModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (e.target === elements.publishNewsModal) {
      elements.publishNewsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ==========================================
// API Operations (with offline simulation)
// ==========================================

async function fetchFeaturedNews() {
  if (state.isBackendOffline) {
    const localArts = readClientDB();
    state.featuredArticles = localArts.filter(a => a.featured).slice(0, 4);
    if (state.featuredArticles.length === 0) {
      state.featuredArticles = localArts.slice(0, 4);
    }
    renderFeaturedSlider();
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/news`);
    const data = await response.json();
    state.featuredArticles = data.filter(a => a.featured).slice(0, 4);
    if (state.featuredArticles.length === 0) {
      state.featuredArticles = data.slice(0, 4);
    }
    renderFeaturedSlider();
  } catch (error) {
    console.error("Error fetching featured articles:", error);
  }
}

async function fetchNewsGrid() {
  elements.newsGrid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 60px;">
      <i class="fa-solid fa-spinner fa-spin" style="font-size: 32px; color: var(--color-primary);"></i>
      <p style="margin-top: 16px; color: var(--text-secondary);">Querying database node...</p>
    </div>
  `;

  if (state.isBackendOffline) {
    // Client-side local DB simulation
    setTimeout(() => {
      let articles = readClientDB();
      
      // Filter by category
      if (state.currentCategory && state.currentCategory !== 'All') {
        articles = articles.filter(art => 
          art.category.toLowerCase() === state.currentCategory.toLowerCase()
        );
      }
      
      // Filter by search query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        articles = articles.filter(art => 
          art.title.toLowerCase().includes(query) || 
          art.summary.toLowerCase().includes(query) ||
          art.category.toLowerCase().includes(query)
        );
      }
      
      state.articles = articles;
      renderNewsGrid();
    }, 250); // micro-delay to feel organic
    return;
  }

  try {
    let url = `${API_BASE}/news?`;
    if (state.currentCategory && state.currentCategory !== 'All') {
      url += `category=${encodeURIComponent(state.currentCategory)}&`;
    }
    if (state.searchQuery) {
      url += `search=${encodeURIComponent(state.searchQuery)}&`;
    }

    const response = await fetch(url);
    const data = await response.json();
    state.articles = data;
    renderNewsGrid();
  } catch (error) {
    console.error("Connection failed. Activating backend offline simulation...", error);
    state.isBackendOffline = true;
    fetchNewsGrid();
  }
}

async function loadArticleDetail(articleId) {
  if (state.isBackendOffline) {
    const articles = readClientDB();
    const articleIdx = articles.findIndex(a => a.id === articleId);
    if (articleIdx !== -1) {
      // Increment local views
      articles[articleIdx].views = (articles[articleIdx].views || 0) + 1;
      writeClientDB(articles);
      
      // Sync list state
      const locArt = state.articles.find(a => a.id === articleId);
      if (locArt) locArt.views = articles[articleIdx].views;
      
      renderArticleReader(articles[articleIdx]);
    }
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/news/${articleId}`);
    const article = await response.json();
    
    // Sync UI views count
    const locArt = state.articles.find(a => a.id === articleId);
    if (locArt) locArt.views = article.views;
    
    renderArticleReader(article);
  } catch (error) {
    console.error("Error loading article details:", error);
  }
}

async function handleClap(articleId, clapButtonElement, clapCountElement) {
  if (state.isBackendOffline) {
    const articles = readClientDB();
    const articleIdx = articles.findIndex(a => a.id === articleId);
    if (articleIdx !== -1) {
      articles[articleIdx].claps = (articles[articleIdx].claps || 0) + 1;
      writeClientDB(articles);
      
      if (clapCountElement) clapCountElement.innerText = articles[articleIdx].claps;
      
      // Update local state
      const locArt = state.articles.find(a => a.id === articleId);
      if (locArt) locArt.claps = articles[articleIdx].claps;
      
      createClapParticles(clapButtonElement);
    }
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/news/${articleId}/clap`, {
      method: 'POST'
    });
    const result = await response.json();
    
    if (clapCountElement) clapCountElement.innerText = result.claps;
    
    const locArt = state.articles.find(a => a.id === articleId);
    if (locArt) locArt.claps = result.claps;
    
    createClapParticles(clapButtonElement);
  } catch (error) {
    console.error("Error sending clap:", error);
  }
}

async function handleAddComment(articleId, username, text, commentsListContainer, emptyCommentsElement) {
  if (state.isBackendOffline) {
    const articles = readClientDB();
    const articleIdx = articles.findIndex(a => a.id === articleId);
    if (articleIdx !== -1) {
      const newComment = {
        id: Math.random().toString(36).substr(2, 9),
        username: username.trim(),
        text: text.trim(),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      };
      
      if (!articles[articleIdx].comments) {
        articles[articleIdx].comments = [];
      }
      
      articles[articleIdx].comments.push(newComment);
      writeClientDB(articles);
      
      // Update local state
      const locArt = state.articles.find(a => a.id === articleId);
      if (locArt) {
        if (!locArt.comments) locArt.comments = [];
        locArt.comments.push(newComment);
      }
      
      if (emptyCommentsElement) emptyCommentsElement.remove();
      const commentHtml = createCommentCardHTML(newComment);
      commentsListContainer.insertAdjacentHTML('afterbegin', commentHtml);
      
      const commentsHeader = document.getElementById('commentsHeaderTitle');
      if (commentsHeader) {
        const currentCount = parseInt(commentsHeader.dataset.count || 0) + 1;
        commentsHeader.dataset.count = currentCount;
        commentsHeader.innerHTML = `<i class="fa-solid fa-comments"></i> Discussions (${currentCount})`;
      }
    }
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/news/${articleId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, text })
    });
    
    const newComment = await response.json();
    
    const locArt = state.articles.find(a => a.id === articleId);
    if (locArt) {
      if (!locArt.comments) locArt.comments = [];
      locArt.comments.push(newComment);
    }
    
    if (emptyCommentsElement) emptyCommentsElement.remove();
    const commentHtml = createCommentCardHTML(newComment);
    commentsListContainer.insertAdjacentHTML('afterbegin', commentHtml);
    
    const commentsHeader = document.getElementById('commentsHeaderTitle');
    if (commentsHeader) {
      const currentCount = parseInt(commentsHeader.dataset.count || 0) + 1;
      commentsHeader.dataset.count = currentCount;
      commentsHeader.innerHTML = `<i class="fa-solid fa-comments"></i> Discussions (${currentCount})`;
    }
  } catch (error) {
    console.error("Error writing comment:", error);
  }
}

async function handlePublishSubmit(e) {
  e.preventDefault();
  
  const title = document.getElementById('newsTitleInput').value.trim();
  const category = document.getElementById('newsCategorySelect').value;
  const summary = document.getElementById('newsSummaryInput').value.trim();
  const author = document.getElementById('newsAuthorInput').value.trim();
  const coverImage = document.getElementById('newsImageInput').value.trim();
  const content = document.getElementById('newsContentInput').value.trim();
  
  const submitBtn = document.getElementById('submitNewsBtn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Publishing...</span>`;

  if (state.isBackendOffline) {
    setTimeout(() => {
      const articles = readClientDB();
      const generatedId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      const newArticle = {
        id: `${generatedId}-${Date.now().toString().slice(-4)}`,
        title,
        category,
        summary,
        content: content.split('\n').filter(p => p.trim() !== ''),
        coverImage: coverImage || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
        author: author || "Guest Contributor",
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        readTime: `${Math.max(2, Math.ceil(content.split(' ').length / 200))} min read`,
        views: 0,
        claps: 0,
        featured: false,
        comments: []
      };
      
      articles.unshift(newArticle);
      writeClientDB(articles);
      
      // Reset Form & Close
      elements.publishNewsForm.reset();
      elements.publishNewsModal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Reload UI
      fetchNewsGrid();
      fetchFeaturedNews();
    }, 500);
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/news`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, summary, content, coverImage, author })
    });
    
    if (!response.ok) throw new Error("Publishing failed");
    
    elements.publishNewsForm.reset();
    elements.publishNewsModal.classList.remove('active');
    document.body.style.overflow = '';
    
    fetchNewsGrid();
    fetchFeaturedNews();
  } catch (error) {
    alert("Error publishing the article. Please check input requirements.");
    console.error("Error publishing article:", error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>Publish Article</span>`;
  }
}

// ==========================================
// Rendering Elements
// ==========================================

function renderFeaturedSlider() {
  if (state.featuredArticles.length === 0) {
    elements.sliderTrack.innerHTML = '<div class="slide"><div style="padding: 40px; text-align: center;">No featured news synced.</div></div>';
    return;
  }

  elements.sliderTrack.innerHTML = '';
  elements.sliderDots.innerHTML = '';
  
  state.featuredArticles.forEach((article, idx) => {
    const tagClass = categoryStyleMap[article.category] || "tag-ai";
    const slideHtml = `
      <div class="slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img class="slide-image" src="${article.coverImage}" alt="${article.title}">
        <div class="slide-content-overlay">
          <div class="slide-info-card">
            <span class="category-tag ${tagClass}">${article.category}</span>
            <h2 class="slide-title">${article.title}</h2>
            <p class="slide-summary">${article.summary}</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-end;">
            <div class="slide-meta">
              <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
              <span><i class="fa-regular fa-eye"></i> ${article.views || 0}</span>
            </div>
            <button class="btn-glass btn-primary read-slider-btn" data-id="${article.id}">
              <span>Read Breakthrough</span>
              <i class="fa-solid fa-arrow-trend-up"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    elements.sliderTrack.insertAdjacentHTML('beforeend', slideHtml);
    
    const dot = document.createElement('button');
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => setSlide(idx));
    elements.sliderDots.appendChild(dot);
  });

  state.currentSlide = 0;
  startSliderAutoplay();

  document.querySelectorAll('.read-slider-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const artId = e.currentTarget.dataset.id;
      loadArticleDetail(artId);
    });
  });
}

function startSliderAutoplay() {
  clearInterval(state.sliderInterval);
  state.sliderInterval = setInterval(() => {
    navigateSlider(1);
  }, 7000);
}

function navigateSlider(direction) {
  let nextIdx = state.currentSlide + direction;
  const slideCount = state.featuredArticles.length;
  
  if (nextIdx >= slideCount) nextIdx = 0;
  if (nextIdx < 0) nextIdx = slideCount - 1;
  
  setSlide(nextIdx);
}

function setSlide(index) {
  state.currentSlide = index;
  elements.sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  
  const dots = elements.sliderDots.querySelectorAll('.slider-dot');
  dots.forEach((dot, idx) => {
    if (idx === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });

  const slides = elements.sliderTrack.querySelectorAll('.slide');
  slides.forEach((slide, idx) => {
    if (idx === index) slide.classList.add('active');
    else slide.classList.remove('active');
  });
  
  startSliderAutoplay();
}

function renderNewsGrid() {
  elements.newsGrid.innerHTML = '';
  
  if (state.articles.length === 0) {
    elements.newsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 80px;" class="card-glass">
        <i class="fa-solid fa-satellite-dish fa-bounce" style="font-size: 36px; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 8px;">No news signals matched</h3>
        <p style="color: var(--text-muted);">Try modifying your filters or search keywords.</p>
      </div>
    `;
    elements.resultsCount.innerText = "No articles found";
    return;
  }

  elements.resultsCount.innerText = `Showing ${state.articles.length} article${state.articles.length === 1 ? '' : 's'}`;

  state.articles.forEach(article => {
    const isBookmarked = state.bookmarks.includes(article.id);
    const tagClass = categoryStyleMap[article.category] || "tag-ai";
    
    const cardHtml = `
      <article class="card-glass" data-id="${article.id}">
        <div class="card-image-box">
          <span class="card-category-overlay category-tag ${tagClass}">${article.category}</span>
          <button class="card-bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${article.id}" aria-label="Bookmark article">
            <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>
          <img class="card-image" src="${article.coverImage}" alt="${article.title}">
        </div>
        <div class="card-body">
          <div class="card-date">${article.date}</div>
          <h3 class="card-title">${article.title}</h3>
          <p class="card-summary">${article.summary}</p>
          <div class="card-footer">
            <span class="card-author">${article.author}</span>
            <div class="card-stats">
              <span class="card-stat-item"><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
              <span class="card-stat-item"><i class="fa-regular fa-eye"></i> ${article.views || 0}</span>
              <span class="card-stat-item"><i class="fa-solid fa-hands-clapping"></i> ${article.claps || 0}</span>
            </div>
          </div>
        </div>
      </article>
    `;
    elements.newsGrid.insertAdjacentHTML('beforeend', cardHtml);
  });

  document.querySelectorAll('.card-glass').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-bookmark-btn')) return;
      const articleId = card.dataset.id;
      loadArticleDetail(articleId);
    });
  });

  document.querySelectorAll('.card-bookmark-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const articleId = btn.dataset.id;
      toggleBookmark(articleId);
    });
  });
}

function renderArticleReader(article) {
  const isBookmarked = state.bookmarks.includes(article.id);
  const tagClass = categoryStyleMap[article.category] || "tag-ai";
  
  const paragraphsHtml = article.content.map(p => `<p>${p}</p>`).join('');
  
  let commentsHtml = '';
  if (article.comments && article.comments.length > 0) {
    commentsHtml = article.comments.slice().reverse().map(comment => createCommentCardHTML(comment)).join('');
  } else {
    commentsHtml = `
      <div class="empty-state" id="emptyCommentsPlaceholder" style="height: 120px;">
        <i class="fa-regular fa-comments empty-state-icon" style="font-size: 24px;"></i>
        <p style="font-size: 13px;">No discussions yet. Be the first to share your thoughts!</p>
      </div>
    `;
  }

  const modalHtml = `
    <div class="article-modal-image-box">
      <img class="article-modal-image" src="${article.coverImage}" alt="${article.title}">
    </div>
    
    <div class="article-modal-body">
      <div class="article-modal-header">
        <span class="category-tag ${tagClass}">${article.category}</span>
        <h1 class="article-modal-title">${article.title}</h1>
      </div>
      
      <div class="article-author-card">
        <div class="author-details">
          <div class="author-avatar">${article.author.charAt(0)}</div>
          <div>
            <div class="author-name">${article.author}</div>
            <div class="article-pub-date">Published on ${article.date}</div>
          </div>
        </div>
        
        <div class="article-interactions">
          <button class="btn-glass btn-icon ${isBookmarked ? 'active' : ''}" id="modalBookmarkBtn" data-id="${article.id}" title="Save article">
            <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>
          
          <div style="font-size: 12px; color: var(--text-muted); text-align: right;">
            <div><i class="fa-regular fa-eye"></i> ${article.views || 0} views</div>
            <div><i class="fa-regular fa-clock"></i> ${article.readTime}</div>
          </div>
        </div>
      </div>
      
      <div class="article-content">
        ${paragraphsHtml}
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; padding: 20px 0; border-top: 1px dashed rgba(255,255,255,0.08); border-bottom: 1px dashed rgba(255,255,255,0.08);">
        <div class="clap-button-wrapper">
          <button class="btn-clap" id="modalClapBtn" data-id="${article.id}" aria-label="Clap for this article">
            <i class="fa-solid fa-hands-clapping"></i>
          </button>
          <div>
            <div style="font-weight: 700; color: var(--color-primary);" id="modalClapsCountText">${article.claps || 0}</div>
            <div style="font-size: 11px; color: var(--text-muted);">Claps from readers</div>
          </div>
        </div>
        
        <button class="btn-glass" id="shareArticleBtn" data-title="${article.title}">
          <i class="fa-solid fa-share-nodes"></i>
          <span>Share</span>
        </button>
      </div>

      <section class="comments-section">
        <h3 class="comments-header" id="commentsHeaderTitle" data-count="${article.comments ? article.comments.length : 0}">
          <i class="fa-solid fa-comments"></i> Discussions (${article.comments ? article.comments.length : 0})
        </h3>
        
        <form class="comments-form" id="commentSubmitForm" data-id="${article.id}" onsubmit="event.preventDefault();">
          <div class="comment-input-row">
            <input type="text" class="comment-field" id="commentUserInput" required placeholder="Your alias/handle">
            <textarea class="comment-field" id="commentTextInput" required placeholder="Add to the conversation..."></textarea>
          </div>
          <button type="submit" class="btn-glass btn-primary" style="align-self: flex-end;">
            <i class="fa-solid fa-comment-dots"></i>
            <span>Submit Comment</span>
          </button>
        </form>
        
        <div class="comments-list" id="modalCommentsList">
          ${commentsHtml}
        </div>
      </section>
    </div>
  `;

  elements.articleModalContent.innerHTML = modalHtml;
  elements.articleReaderModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const clapBtn = document.getElementById('modalClapBtn');
  const clapCount = document.getElementById('modalClapsCountText');
  clapBtn.addEventListener('click', () => {
    handleClap(article.id, clapBtn, clapCount);
  });

  const modalBookmark = document.getElementById('modalBookmarkBtn');
  modalBookmark.addEventListener('click', () => {
    toggleBookmark(article.id);
    const isNowBookmarked = state.bookmarks.includes(article.id);
    modalBookmark.classList.toggle('active', isNowBookmarked);
    modalBookmark.querySelector('i').className = `fa-${isNowBookmarked ? 'solid' : 'regular'} fa-bookmark`;
  });

  const shareBtn = document.getElementById('shareArticleBtn');
  shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  });

  const commentForm = document.getElementById('commentSubmitForm');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userVal = document.getElementById('commentUserInput').value.trim();
    const textVal = document.getElementById('commentTextInput').value.trim();
    const list = document.getElementById('modalCommentsList');
    const emptyPlaceholder = document.getElementById('emptyCommentsPlaceholder');
    
    if (userVal && textVal) {
      handleAddComment(article.id, userVal, textVal, list, emptyPlaceholder);
      document.getElementById('commentTextInput').value = '';
    }
  });
}

function createCommentCardHTML(comment) {
  return `
    <div class="comment-card">
      <div class="comment-meta">
        <span class="comment-user">@${comment.username}</span>
        <span class="comment-date">${comment.date}</span>
      </div>
      <p class="comment-text">${comment.text}</p>
    </div>
  `;
}

// ==========================================
// Interactive Behaviors
// ==========================================

function toggleBookmarksDrawer() {
  const isActive = elements.bookmarksDrawer.classList.contains('active');
  if (isActive) {
    elements.bookmarksDrawer.classList.remove('active');
  } else {
    renderBookmarksDrawer();
    elements.bookmarksDrawer.classList.add('active');
  }
}

function renderBookmarksDrawer() {
  elements.bookmarksDrawerBody.innerHTML = '';
  
  if (state.bookmarks.length === 0) {
    elements.bookmarksDrawerBody.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-bookmark empty-state-icon"></i>
        <p>No saved articles. Bookmark news to read them here offline.</p>
      </div>
    `;
    return;
  }

  // Iterate state bookmarks
  state.bookmarks.forEach(articleId => {
    const article = state.articles.find(a => a.id === articleId) || 
                    state.featuredArticles.find(a => a.id === articleId) ||
                    readClientDB().find(a => a.id === articleId);
                    
    if (!article) return;
    
    const itemHtml = `
      <div class="bookmark-item" data-id="${article.id}">
        <img class="bookmark-img" src="${article.coverImage}" alt="${article.title}">
        <div class="bookmark-info">
          <h4 class="bookmark-title">${article.title}</h4>
          <div class="bookmark-meta">
            <span>${article.category}</span>
            <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
          </div>
        </div>
        <button class="btn-remove-bookmark" data-id="${article.id}" title="Remove Bookmark">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    elements.bookmarksDrawerBody.insertAdjacentHTML('beforeend', itemHtml);
  });

  document.querySelectorAll('.bookmark-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.btn-remove-bookmark')) return;
      const artId = item.dataset.id;
      loadArticleDetail(artId);
      toggleBookmarksDrawer();
    });
  });

  document.querySelectorAll('.btn-remove-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const articleId = btn.dataset.id;
      toggleBookmark(articleId);
      renderBookmarksDrawer();
    });
  });
}

function toggleBookmark(articleId) {
  const index = state.bookmarks.indexOf(articleId);
  
  if (index === -1) {
    state.bookmarks.push(articleId);
  } else {
    state.bookmarks.splice(index, 1);
  }
  
  localStorage.setItem('adane_bookmarks', JSON.stringify(state.bookmarks));
  loadBookmarksBadge();
  
  const cards = document.querySelectorAll(`.card-glass[data-id="${articleId}"]`);
  cards.forEach(card => {
    const btn = card.querySelector('.card-bookmark-btn');
    const isBookmarked = state.bookmarks.includes(articleId);
    if (btn) {
      btn.classList.toggle('active', isBookmarked);
      btn.querySelector('i').className = `fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`;
    }
  });
}

function loadBookmarksBadge() {
  const count = state.bookmarks.length;
  if (count > 0) {
    elements.bookmarkCountBadge.innerText = count;
    elements.bookmarkCountBadge.style.display = 'inline-block';
  } else {
    elements.bookmarkCountBadge.style.display = 'none';
  }
}

function createClapParticles(button) {
  const rect = button.getBoundingClientRect();
  const particleCount = 10;
  
  const container = document.createElement('div');
  container.className = 'clap-particles';
  button.appendChild(container);
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'clap-particle';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 40;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);
    
    const colorType = Math.random();
    if (colorType > 0.6) {
      particle.style.background = 'var(--color-secondary)';
    } else if (colorType > 0.3) {
      particle.style.background = 'var(--color-accent)';
    } else {
      particle.style.background = 'var(--color-primary)';
    }

    container.appendChild(particle);
  }
  
  setTimeout(() => {
    container.remove();
  }, 1000);
}
