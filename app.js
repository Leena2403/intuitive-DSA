// --- 1. ARCHITECTURE REPOSITORY ---
const sysData = {
    'dijkstra': {
        tag: "Dijkstra's", title: "Network Routing & ETAs",
        companies: [
            { name: "Google Maps", desc: "Calculates the shortest travel time between geospatial intersections by treating traffic delays as edge weights." },
            { name: "Cisco (OSPF)", desc: "Internet routers use Dijkstra to calculate the fastest path for IP packets across global fiber optic networks." },
            { name: "Amazon Robotics", desc: "Kiva robots in fulfillment centers calculate the fastest path to shelves without colliding, treating congestion as weight." }
        ],
        math: `Edge Relaxation evaluates minimum cost: <br>$$d[v] = \\min(d[v], d[u] + w(u, v))$$<br>Using a Min-Heap yields $O((V+E)\\log V)$.`,
        challenge: "Implement Dijkstra to find the shortest path from start node to all other nodes.",
        io: "Input: graph, start=A\nOutput: {A:0, B:4, C:2, D:1}",
        renderDemo: () => `<div style="text-align:center;">
            <button class="btn-primary" onclick="visualizeDijkstra()">Simulate Packet Routing</button>
            <p id="dij-status" style="margin: 10px 0; color: #94a3b8; min-height: 20px;"></p>
            <canvas id="dijkstraCanvas" width="400" height="250" style="border:1px solid #334155; border-radius:8px; background:#1e293b;"></canvas>
        </div>`
    },
    'bfs': {
        tag: "Breadth-First Search", title: "Network Expansion",
        companies: [
            { name: "LinkedIn", desc: "Discovers '2nd and 3rd degree connections'. BFS guarantees you see immediate mutuals before random strangers deep in the graph." },
            { name: "Google Search", desc: "Web crawlers index the internet layer by layer. They scrape the homepage, queue all links on it, and process them before going deeper." },
            { name: "WhatsApp", desc: "P2P network discovery for local devices. Broadcasts outward in concentric rings to find the nearest relay nodes." }
        ],
        math: `Processes Vertices $V$ and Edges $E$ exactly once. <br>$$O(|V| + |E|)$$<br> Utilizes a Queue (FIFO) to enforce layer-by-layer expansion.`,
        challenge: "Given an adjacency list, return all nodes at exactly 'k' degrees of separation.",
        io: "Input: graph, start=0, k=2\nOutput: [3, 4, 5]",
        renderDemo: () => `
            <button class="btn-primary" onclick="visualizeBFS()">Trigger Network Broadcast</button>
            <div id="radar-ui" class="radar-container">
                <div class="radar-ring" id="ring-1" style="width:100px; height:100px;"></div>
                <div class="radar-ring" id="ring-2" style="width:200px; height:200px;"></div>
                <div class="radar-ring" id="ring-3" style="width:280px; height:280px;"></div>
                
                <div class="radar-node" id="n-0" style="top:135px; left:135px;">Me</div>
                
                <div class="radar-node degree-1" id="n-1" style="top:85px; left:135px;">A</div>
                <div class="radar-node degree-1" id="n-2" style="top:170px; left:100px;">B</div>
                
                <div class="radar-node degree-2" id="n-3" style="top:40px; left:180px;">C</div>
                <div class="radar-node degree-2" id="n-4" style="top:200px; left:210px;">D</div>
                <div class="radar-node degree-2" id="n-5" style="top:220px; left:60px;">E</div>
            </div>
        `
    },
    'trie': {
        tag: "Trie (Prefix Tree)", title: "Autocomplete Systems",
        companies: [
            { name: "Google", desc: "As you type queries, Google traverses a distributed Trie. The path prefix immediately yields cached top search suggestions." },
            { name: "Apple (iOS)", desc: "The autocorrect dictionary operates via Tries, physically matching your keystrokes to spatial nodes in memory." },
            { name: "AWS VPC", desc: "IP routing tables use Radix Tries to perform 'Longest Prefix Matching' to figure out where to send incoming web traffic." }
        ],
        math: `Lookups do not scale with database size $N$. They strictly depend on the length of the typed string $L$. <br>$$O(L)$$`,
        challenge: "Implement a Trie with insert() and getSuggestions().",
        io: "Input: insert('api'), insert('app'), get('ap')\nOutput: ['api', 'app']",
        renderDemo: () => `
            <input type="text" id="trie-input" placeholder="Type 'c', 'ca', 'cat'..." oninput="visualizeTrie()" style="padding:0.5rem; width:200px; background:#1e293b; color:white; border:1px solid #334155;">
            <div class="trie-tree">
                <div class="trie-level"><div class="trie-node" id="tr-root">*</div></div>
                <div class="trie-level">
                    <div class="trie-node" id="tr-c">c</div>
                    <div class="trie-node" id="tr-d">d</div>
                </div>
                <div class="trie-level">
                    <div class="trie-node" id="tr-ca">a</div>
                    <div class="trie-node" id="tr-do">o</div>
                </div>
                <div class="trie-level">
                    <div class="trie-node" id="tr-cat">t</div>
                    <div class="trie-node" id="tr-car">r</div>
                    <div class="trie-node" id="tr-dog">g</div>
                </div>
            </div>
        `
    },
    'sliding-window': {
        tag: "Sliding Window", title: "API Gateway Rate Limiting",
        companies: [
            { name: "Stripe", desc: "Stripe limits you to 100 API requests per second. A sliding window tracks moving sums without recalculating massive arrays." },
            { name: "YouTube", desc: "Video players monitor average download throughput over a sliding 5-second window to dynamically adjust video quality (1080p to 720p)." },
            { name: "Datadog", desc: "Triggers anomaly alerts by analyzing a moving average of server CPU spikes over rolling time blocks." }
        ],
        math: `Avoids nested loop recalculation $O(N \\times K)$. Adds the new element, subtracts the expired element. <br>$$O(N)$$`,
        challenge: "Given an array of request counts per second, find if any contiguous K seconds exceed threshold T.",
        io: "Input: [10, 50, 40, 20], K=2, T=80\nOutput: true (50+40 = 90)",
        renderDemo: () => `
            <div style="display:flex; justify-content:space-between; width:100%; margin-bottom:10px;">
                <span>Limit: 100 req / 3 sec</span>
                <button class="btn-primary" onclick="visualizeWindow()">Simulate Traffic</button>
            </div>
            <div class="window-chart" id="traffic-chart">
                <div class="sliding-overlay" id="window-overlay" style="width: 83px; transform: translateX(0);"></div>
            </div>
            <p id="sw-status" style="margin-top:10px; color:#94a3b8;">Window Sum: 0</p>
        `
    },
    'lru-cache': {
        tag: "LRU Cache", title: "Memory Eviction",
        companies: [
            { name: "Redis", desc: "When Redis runs out of RAM, it evicts the 'Least Recently Used' keys to make room for new, hot database queries." },
            { name: "Chrome", desc: "The browser stores images locally. When cache fills up, it deletes the oldest accessed images to save new ones." },
            { name: "Cloudflare", desc: "CDN Edge servers cache static HTML. If an article hasn't been requested recently, it is evicted from edge memory." }
        ],
        math: `Combines a Doubly Linked List + Hash Map to achieve $O(1)$ insertions, lookups, and deletions.`,
        challenge: "Implement an LRU Cache with get() and put() running in O(1) time.",
        io: "Input: put(A), put(B), get(A), put(C) (Capacity 2)\nOutput: B is evicted.",
        renderDemo: () => `
            <div style="display:flex; gap:10px; margin-bottom:1rem;">
                <button class="btn-primary" onclick="visualizeLRU('GET', 'A')">GET Key A</button>
                <button class="btn-primary" onclick="visualizeLRU('PUT', 'D')">PUT Key D</button>
            </div>
            <p style="color:#94a3b8; margin-bottom:1rem;">Max Capacity: 3</p>
            <div class="lru-container">
                <div class="lru-stack" id="lru-stack">
                    <div class="lru-block" data-key="C">Key C</div>
                    <div class="lru-block" data-key="B">Key B</div>
                    <div class="lru-block" data-key="A">Key A</div>
                </div>
                <div style="color:#ef4444; font-size:0.8rem; text-align:center;">&uarr;<br>MRU (Top)<br><br><br>LRU (Bottom)<br>&darr;</div>
            </div>
        `
    }
};

let currentSys = null;
let editor = null;

// --- 2. CORE NAVIGATION & UI ---
window.onload = () => {
    const grid = document.getElementById('main-grid');
    Object.keys(sysData).forEach(key => {
        const d = sysData[key];
        grid.innerHTML += `
            <div class="system-card" onclick="openSystem('${key}')">
                <span class="tag">${d.tag}</span>
                <h3 style="margin-top:0.5rem">${d.title}</h3>
                <p>${d.companies[0].desc}</p>
            </div>
        `;
    });
};

function goHome() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('home-view').classList.add('active');
}

function openSystem(key) {
    currentSys = sysData[key];
    
    document.getElementById('sys-tag').innerText = currentSys.tag;
    document.getElementById('sys-title').innerText = currentSys.title;
    document.getElementById('sys-math').innerHTML = currentSys.math;
    document.getElementById('sys-demo').innerHTML = currentSys.renderDemo();
    
    document.getElementById('sys-challenge-text').innerText = currentSys.challenge;
    document.getElementById('sys-io').innerText = currentSys.io;

    renderCompanyTabs();
    
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('system-view').classList.add('active');
    switchTab('learn');

    if(window.MathJax) MathJax.typesetPromise();
    
    // Init Visualizer states
    if(key === 'sliding-window') initChart();
    if(key === 'dijkstra') drawStaticGraph();
}

function renderCompanyTabs() {
    const tabsContainer = document.getElementById('company-tabs');
    tabsContainer.innerHTML = currentSys.companies.map((c, i) => 
        `<button class="comp-tab ${i===0?'active':''}" onclick="setCompany(${i})">${c.name}</button>`
    ).join('');
    setCompany(0);
}

function setCompany(idx) {
    document.querySelectorAll('.comp-tab').forEach((t, i) => {
        t.className = `comp-tab ${i === idx ? 'active' : ''}`;
    });
    document.getElementById('company-desc').innerHTML = `<strong>${currentSys.companies[idx].name}:</strong> ${currentSys.companies[idx].desc}`;
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');

    if(tab === 'practice' && !editor) {
        editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
            mode: "javascript", theme: "material-ocean", lineNumbers: true
        });
        editor.setValue(`function solve() {\n  // Code architecture here...\n}`);
    }
}

function runMockTests() {
    const term = document.getElementById('terminal-output');
    term.innerHTML = "> Compiling...<br>";
    setTimeout(() => {
        term.innerHTML += "> Running Distributed Unit Tests...<br><span style='color:#10b981'>[PASS] Test Case 1</span><br><span style='color:#10b981'>[PASS] Test Case 2</span><br>> All tests cleared. O(N) constraints met.";
    }, 600);
}

// --- 3. ADVANCED VISUALIZATIONS ---

// A. DIJKSTRA (HTML5 Canvas Routing)
const graphNodes = [
    {id:'A', x: 50, y: 125}, {id:'B', x: 150, y: 50}, 
    {id:'C', x: 150, y: 200}, {id:'D', x: 250, y: 125}, {id:'E', x: 350, y: 125}
];
const graphEdges = [
    {n1:0, n2:1, w:4}, {n1:0, n2:2, w:2}, 
    {n1:1, n2:3, w:5}, {n1:2, n2:3, w:1}, {n1:3, n2:4, w:3}
];

function drawStaticGraph() {
    const canvas = document.getElementById('dijkstraCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,400,250);
    
    // Draw edges
    ctx.lineWidth = 2;
    graphEdges.forEach(e => {
        const p1 = graphNodes[e.n1], p2 = graphNodes[e.n2];
        ctx.strokeStyle = '#334155';
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        
        // Weights
        ctx.fillStyle = '#ef4444';
        ctx.font = "12px sans-serif";
        ctx.fillText(e.w + "ms", (p1.x+p2.x)/2, ((p1.y+p2.y)/2) - 5);
    });

    // Draw nodes
    graphNodes.forEach(n => {
        ctx.fillStyle = '#1e293b'; ctx.strokeStyle = '#64748b';
        ctx.beginPath(); ctx.arc(n.x, n.y, 15, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = 'white'; ctx.fillText(n.id, n.x-4, n.y+4);
    });
}

async function visualizeDijkstra() {
    drawStaticGraph(); // Reset
    const canvas = document.getElementById('dijkstraCanvas');
    const ctx = canvas.getContext('2d');
    const status = document.getElementById('dij-status');
    
    // Highlight shortest path: A -> C -> D -> E
    const pathEdges = [ {n1:0, n2:2}, {n1:2, n2:3}, {n1:3, n2:4} ];
    let totalTime = 0;

    for(let e of pathEdges) {
        const p1 = graphNodes[e.n1], p2 = graphNodes[e.n2];
        status.innerText = `Routing packet: ${p1.id} -> ${p2.id}...`;
        
        // Animate line fill
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        
        // Draw glow node
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath(); ctx.arc(p2.x, p2.y, 15, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'white'; ctx.fillText(p2.id, p2.x-4, p2.y+4);
        
        await new Promise(r => setTimeout(r, 800));
    }
    status.innerText = "Fastest Route Found (Total: 6ms)";
}

// B. BFS (Ripple Radar)
async function visualizeBFS() {
    document.querySelectorAll('.radar-node').forEach(n => n.classList.remove('active'));
    
    // Level 0
    document.getElementById('n-0').classList.add('active');
    document.getElementById('ring-1').style.borderColor = "#3b82f6";
    await new Promise(r => setTimeout(r, 800));

    // Level 1
    document.querySelectorAll('.degree-1').forEach(n => n.classList.add('active'));
    document.getElementById('ring-2').style.borderColor = "#3b82f6";
    await new Promise(r => setTimeout(r, 800));

    // Level 2
    document.querySelectorAll('.degree-2').forEach(n => n.classList.add('active'));
    document.getElementById('ring-3').style.borderColor = "#3b82f6";
}

// C. TRIE (Visual Tree Path)
function visualizeTrie() {
    const val = document.getElementById('trie-input').value.toLowerCase();
    document.querySelectorAll('.trie-node').forEach(n => n.classList.remove('glow'));
    
    if(!val) return;
    
    // Simulate walking the tree
    document.getElementById('tr-root').classList.add('glow');
    
    setTimeout(() => {
        if(val.startsWith('c')) document.getElementById('tr-c')?.classList.add('glow');
        if(val.startsWith('d')) document.getElementById('tr-d')?.classList.add('glow');
    }, 150);

    setTimeout(() => {
        if(val.startsWith('ca')) document.getElementById('tr-ca')?.classList.add('glow');
        if(val.startsWith('do')) document.getElementById('tr-do')?.classList.add('glow');
    }, 300);

    setTimeout(() => {
        if(val === 'cat') document.getElementById('tr-cat')?.classList.add('glow');
        if(val === 'car') document.getElementById('tr-car')?.classList.add('glow');
        if(val === 'dog') document.getElementById('tr-dog')?.classList.add('glow');
    }, 450);
}

// D. SLIDING WINDOW (API Traffic)
const trafficData = [20, 50, 40, 10, 80, 40, 10]; // array lengths
function initChart() {
    const chart = document.getElementById('traffic-chart');
    if(!chart) return;
    // Clear old bars (keep overlay)
    Array.from(chart.children).forEach(c => { if(!c.id) c.remove(); });
    
    trafficData.forEach(val => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = `${val}px`;
        chart.appendChild(bar);
    });
}

async function visualizeWindow() {
    initChart();
    const overlay = document.getElementById('window-overlay');
    const status = document.getElementById('sw-status');
    const bars = document.querySelectorAll('.chart-bar');
    
    for(let i = 0; i <= trafficData.length - 3; i++) {
        // Move window (bar width 25px + 4px gap = 29px)
        overlay.style.transform = `translateX(${i * 29}px)`;
        
        let sum = trafficData[i] + trafficData[i+1] + trafficData[i+2];
        status.innerText = `Window Sum: ${sum} requests`;
        
        bars.forEach(b => b.classList.remove('limit-exceeded'));
        if(sum > 100) {
            status.innerHTML = `Window Sum: <span style="color:#ef4444">${sum} (RATE LIMIT HIT)</span>`;
            bars[i].classList.add('limit-exceeded');
            bars[i+1].classList.add('limit-exceeded');
            bars[i+2].classList.add('limit-exceeded');
        }
        
        await new Promise(r => setTimeout(r, 1000));
    }
}

// E. LRU CACHE (CSS DOM Reordering)
let cacheState = ['A', 'B', 'C']; // Top is MRU (Index 0)

function renderLRU() {
    const stack = document.getElementById('lru-stack');
    stack.innerHTML = cacheState.map(key => 
        `<div class="lru-block" id="block-${key}" data-key="${key}">Key ${key}</div>`
    ).reverse().join(''); // Reverse for visually stacking upwards
}

async function visualizeLRU(action, targetKey) {
    if(action === 'GET') {
        // Move A to MRU (front of array)
        cacheState = [targetKey, ...cacheState.filter(k => k !== targetKey)];
        renderLRU();
        const block = document.getElementById(`block-${targetKey}`);
        block.classList.add('accessed');
        setTimeout(() => block.classList.remove('accessed'), 500);
    } 
    else if(action === 'PUT') {
        const evictedKey = cacheState.pop(); // Remove LRU (last)
        const evictedBlock = document.getElementById(`block-${evictedKey}`);
        evictedBlock.classList.add('evicted');
        
        await new Promise(r => setTimeout(r, 500)); // Wait for animation
        
        cacheState.unshift(targetKey); // Add D to MRU
        renderLRU();
        const newBlock = document.getElementById(`block-${targetKey}`);
        newBlock.classList.add('accessed');
        setTimeout(() => newBlock.classList.remove('accessed'), 500);
    }
}