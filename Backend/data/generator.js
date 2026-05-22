const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

const sampleArticles = [
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
      "Battery life has also seen improvements, with a new dynamic refresh rate engine that clocks down display pixels when focused on static text. Together with a more flexible fabric headband, Apple is positioning the Vision Pro 2 not just as a developer novelty, but as a legitimate replacement for physical workstation monitors."
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

function initDatabase() {
  const dataDir = path.dirname(dbPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(dbPath)) {
    console.log("Database file does not exist. Initializing with sample tech news data...");
    fs.writeFileSync(dbPath, JSON.stringify({ articles: sampleArticles }, null, 2), 'utf8');
    console.log("Database initialized successfully at:", dbPath);
  } else {
    console.log("Database already exists. Skipping initialization.");
  }
}

module.exports = {
  initDatabase,
  dbPath
};
