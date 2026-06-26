
const sysData = {
    'binary-search': {
        tag: "Binary Search", title: "Divide and Conquer Algorithms",
        companies: [
            { name: "Git", desc: "Git bisect employs a binary search algorithm to rapidly pinpoint the specific commit that introduced a bug, navigating through the project's history in logarithmic time. By testing a middle commit between a known good and bad commit, the tool eliminates half of the remaining search space with each iteration. This method isolates the problematic change out of 1,000 commits in only 10 steps, greatly accelerating the debugging process" },
        ],
        math: `The search space $N$ is halved at every step: <br>$$N \\rightarrow \\frac{N}{2} \\rightarrow \\frac{N}{4} \\dots \\rightarrow 1$$<br> Yielding logarithmic Time Complexity: $O(\\log N)$.`,
        challenge: "Write a function to find the index of a target driver distance in a sorted array.",
        io: "Input: [2, 5, 8, 12, 16], target = 12\nOutput: 3",
        renderDemo: () => `
            <div style="display:flex; gap:10px; margin-bottom: 2rem;">
                <input type="number" id="bs-target" class="viz-input" value="23" style="width:100px;">
                <button class="btn-primary" onclick="visualizeBinarySearch()">Run Binary Search</button>
            </div>
            <p id="bs-status" style="color:#60a5fa; margin-bottom:1rem; font-weight:600; height: 20px;">Ready</p>
            <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;" id="bs-array">
                ${[2, 5, 8, 12, 16, 23, 38, 56, 72].map((v, i) => `<div class="bit-box" id="bs-${i}" style="width:45px; height:45px; font-size:1rem;">${v}</div>`).join('')}
            </div>
        `
    },
    'bfs': {
        tag: "Breadth-First Search", title: "Network Expansion",
        companies: [
            { name: "LinkedIn", desc: "Discovers '2nd degree connections'. optimized Bidirectional BFS (searching from both you and the target user simultaneously to meet in the middle) guarantees you see immediate mutuals before random strangers deep in the graph." },
            { name: "BitTorrent", desc: "Torrent client utilizes a Breadth-First Search (BFS) strategy to discover peers holding required file pieces. It first queries its immediate layer of known tracker peers before expanding radially to secondary connected peers if parts are still missing." }
        ],
        math: `Processes Vertices $V$ and Edges $E$ exactly once. <br>$$O(|V| + |E|)$$<br> Utilizes a Queue (FIFO) to enforce layer-by-layer expansion.`,
        challenge: "Given an adjacency list, return all nodes at exactly 'k' degrees of separation.",
        io: "Input: graph, start=0, k=2\nOutput: [3, 4, 5]",
        renderDemo: () => `
            <button class="btn-primary" onclick="visualizeBFS()" style="margin-bottom:2rem; position:relative; z-index:20;">Trigger Network Broadcast</button>
            <div style="position:relative; width: 100%; height: 250px; display:flex; justify-content:center; align-items:center;">
                <div id="bfs-visual-container" style="position:relative; width:300px; height:300px;"></div>
            </div>
        `
    },
    'dijkstra': {
        tag: "Dijkstra's", title: "Packet & Route Navigation",
        companies: [
            { name: "Google Maps", desc: "Calculates the shortest travel time between geospatial intersections by treating traffic delays as edge weights." },
            { name: "Cisco (OSPF)", desc: "Internet routers use Dijkstra to calculate the fastest path for IP packets across global fiber optic networks." },
            { name: "Amazon Robotics", desc: "Kiva robots in fulfillment centers calculate the fastest path to shelves without colliding, treating congestion as weight." }
        ],
        math: `Edge Relaxation evaluates minimum cost: <br>$$d[v] = \\min(d[v], d[u] + w(u, v))$$<br>Using a Min-Heap yields $O((V+E)\\log V)$.`,
        challenge: "Implement Dijkstra to find the shortest path from start node to all other nodes.",
        io: "Input: graph, start=A\nOutput: {A:0, B:4, C:2, D:1}",
        renderDemo: () => `
            <div style="text-align:center;">
                <button class="btn-primary" onclick="visualizeDijkstra()">Simulate Packet Routing</button>
                <p id="dij-status" style="margin: 15px 0; color: #94a3b8; font-family:var(--font-code); height:20px;"></p>
                <canvas id="dijkstraCanvas" width="450" height="250" style="border:1px solid #334155; border-radius:8px; background:#0f172a;"></canvas>
            </div>
        `
    },
    'trie': {
        tag: "Trie (Prefix Tree)", title: "Autocomplete Systems",
        companies: [
            { name: "Google", desc: "As you type in the search bar, the system follows your letters down the tree to instantly suggest popular search phrases." },
            { name: "Spell Checkers", desc: "Apps like Microsoft Word check your typing against a word tree; if your letters wander off a valid path, it flags a typo." }
        ],
        math: `Lookups do not scale with massive database sizes $N$. They strictly depend on the length of the typed string $L$. <br>$$O(L)$$`,
        challenge: "Implement a Trie with insert() and startsWith().",
        io: "Input: insert('api'), insert('app'), startsWith('ap')\nOutput: true",
        renderDemo: () => `
            <input type="text" id="trie-input" class="viz-input" placeholder="Type 'c', 'ca', 'cat'..." oninput="visualizeTrie()" style="width:250px; text-align:center;">
            <div style="display:flex; flex-direction:column; align-items:center; gap:20px; margin-top:2rem;">
                <div style="display:flex; gap:20px;"><div class="bit-box trie-node" id="tr-root">*</div></div>
                <div style="display:flex; gap:40px;">
                    <div class="bit-box trie-node" id="tr-c">c</div>
                    <div class="bit-box trie-node" id="tr-d">d</div>
                </div>
                <div style="display:flex; gap:40px;">
                    <div class="bit-box trie-node" id="tr-ca">a</div>
                    <div class="bit-box trie-node" id="tr-do">o</div>
                </div>
                <div style="display:flex; gap:20px;">
                    <div class="bit-box trie-node" id="tr-cat">t</div>
                    <div class="bit-box trie-node" id="tr-car">r</div>
                    <div style="bit-box trie-node" id="tr-dog" style="margin-left:20px;">g</div>
                </div>
            </div>
        `
    },
    'sliding-window': {
        tag: "Sliding Window", title: "Continuous Tracking",
        companies: [
            { name: "Netflix", desc: "The app tracks your internet speed over a rolling 5-second window to instantly change your video quality if your connection drops." },
            { name: "Fitbit / Apple Watch", desc: "The device calculates your live heart rate or running pace by averaging your data over the last 60 seconds, moving the window forward each second." }
        ],
        math: `Avoids nested loop recalculation $O(N \\times K)$. Adds the new element, subtracts the expired element. <br>$$O(N)$$`,
        challenge: "Given an array of request counts per second, find if any contiguous K seconds exceed threshold T.",
        io: "Input: [10, 50, 40, 20], K=2, T=80\nOutput: true",
        renderDemo: () => `
            <div style="display:flex; justify-content:space-between; width:100%; margin-bottom:15px; padding:0 20px;">
                <span style="color:#94a3b8;">Limit: 100 req / 3 sec</span>
                <button class="btn-primary" onclick="visualizeWindow()">Simulate Traffic</button>
            </div>
            <div style="position:relative; width:90%; height:120px; background:rgba(255,255,255,0.05); border-bottom:2px solid #475569; display:flex; align-items:flex-end; gap:5px; padding:10px;" id="traffic-chart">
                <div id="window-overlay" style="position:absolute; bottom:10px; height:100px; width:105px; background:rgba(59,130,246,0.2); border:1px solid #3b82f6; border-radius:4px; transition:transform 0.4s linear; pointer-events:none;"></div>
            </div>
            <p id="sw-status" style="margin-top:20px; font-family:var(--font-code); color:#10b981;">Window Sum: 0</p>
        `
    },

    'bloom-filter': {
        tag: "Bloom Filter", title: "Massive Scale Fast-Lookup",
        companies: [
            { name: "Medium", desc: "Uses Bloom filters to instantly check if a user has already read an article before recommending it, avoiding expensive DB joins." },
            { name: "Instagram", desc: "When you sign up, it checks a fast filter to see if a username is available. If the filter says 'No', the app immediately tells you that the name is taken." }
        ],
        math: `A bit array of size $m$ and $k$ hash functions. False positives are possible, but false negatives are impossible.<br>Space is extremely optimized: ~10 bits per element.`,
        challenge: "Simulate a Bloom Filter with an array of size 10 and 2 simple modulo hash functions.",
        io: "Input: insert('apple'), contains('apple'), contains('banana')\nOutput: true, false",
        renderDemo: () => `
            <div style="display:flex; gap:10px; margin-bottom:1rem;">
                <input type="text" id="bloom-input" class="viz-input" placeholder="Enter word..." style="width:150px;">
                <button class="btn-primary" onclick="bloomAction('insert')">Insert</button>
                <button class="btn-success" onclick="bloomAction('check')">Check</button>
            </div>
            <p id="bloom-status" style="height:20px; color:#94a3b8; font-family:var(--font-code); margin-bottom:1rem;"></p>
            <div class="bloom-array" id="bloom-bits">
                ${Array.from({length: 16}).map((_, i) => `<div class="bit-box" id="bit-${i}">0</div>`).join('')}
            </div>
        `
    }
};

let currentSys = null;
let editor = null;
let bitArray = new Array(16).fill(0); // For bloom filter state

// --- 2. INITIALIZATION & UI ROUTING ---
window.onload = () => {
    const grid = document.getElementById('main-grid');
    Object.keys(sysData).forEach((key, index) => {
        const d = sysData[key];
        const delay = index * 0.1; // Staggered animation
        grid.innerHTML += `
            <div class="system-card" style="animation: fadeInUp 0.6s ${delay}s forwards;" onclick="openSystem('${key}')">
                <span class="tag">${d.tag}</span>
                <h3 style="margin: 0.8rem 0 0.5rem; color:var(--dark);">${d.title}</h3>
                <p style="font-size:0.95rem;">${d.companies[0].desc}</p>
            </div>
        `;
    });
};

// CSS Keyframe for JS injection
const style = document.createElement('style');
style.innerHTML = `@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);

function goHome() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('home-view').classList.add('active');
    window.scrollTo(0,0);
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
    window.scrollTo(0,0);

    if(window.MathJax) MathJax.typesetPromise();
    
    // Init Visualizer States
    if(key === 'sliding-window') initChart();
    if(key === 'dijkstra') drawStaticGraph();
    if(key === 'bfs') initBFSNodes();
    if(key === 'lru-cache') renderLRU();
    if(key === 'bloom-filter') bitArray.fill(0);
}

function renderCompanyTabs() {
    const tabsContainer = document.getElementById('company-tabs');
    tabsContainer.innerHTML = currentSys.companies.map((c, i) => 
        `<button class="comp-tab ${i===0?'active':''}" onclick="setCompany(${i})">${c.name}</button>`
    ).join('');
    setCompany(0);
}

function setCompany(idx) {
    document.querySelectorAll('.comp-tab').forEach((t, i) => t.className = `comp-tab ${i === idx ? 'active' : ''}`);
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
        term.innerHTML += "> Running Distributed Unit Tests...<br><span style='color:#10b981'>[PASS] Edge Case 1 (Empty)</span><br><span style='color:#10b981'>[PASS] Load Test 1M queries</span><br>> All tests cleared. O(N) constraints met. 🚀";
    }, 800);
}

// --- 3. ADVANCED VISUALIZATIONS ---

// 1. Bloom Filter
async function bloomAction(type) {
    const word = document.getElementById('bloom-input').value.trim();
    if(!word) return;
    const status = document.getElementById('bloom-status');
    document.querySelectorAll('.bit-box').forEach(b => {
        b.classList.remove('check-fail'); 
        if(b.innerText === '0') b.style.boxShadow = 'none';
    });

    // Mock Hash Functions (very simple for visualization)
    const h1 = word.length % 16;
    const h2 = word.charCodeAt(0) % 16;
    const h3 = word.charCodeAt(word.length - 1) % 16;
    const indices = [h1, h2, h3];

    if(type === 'insert') {
        status.innerText = `Hashing "${word}" -> indices [${h1}, ${h2}, ${h3}]`;
        indices.forEach(idx => {
            bitArray[idx] = 1;
            const box = document.getElementById(`bit-${idx}`);
            box.innerText = '1';
            box.classList.add('active');
        });
    } else {
        status.innerText = `Checking bits [${h1}, ${h2}, ${h3}]...`;
        await new Promise(r => setTimeout(r, 600));
        
        let exists = true;
        indices.forEach(idx => {
            const box = document.getElementById(`bit-${idx}`);
            if(bitArray[idx] === 0) {
                exists = false;
                box.classList.add('check-fail');
            } else {
                box.style.boxShadow = '0 0 15px #34d399'; // glow if found
            }
        });

        if(exists) status.innerHTML = `<span style="color:#34d399">Probably Exists (All bits = 1)</span>`;
        else status.innerHTML = `<span style="color:#ef4444">Definitely Not (Found a 0 bit)</span>`;
    }
}

// 2. Binary Search
async function visualizeBinarySearch() {
    const target = parseInt(document.getElementById('bs-target').value);
    const status = document.getElementById('bs-status');
    const boxes = document.querySelectorAll('#bs-array .bit-box');
    boxes.forEach(b => { b.style.background = '#1e293b'; b.style.opacity = '1'; });
    
    let vals = [2, 5, 8, 12, 16, 23, 38, 56, 72];
    let left = 0; let right = vals.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        status.innerText = `Checking mid index ${mid} (value: ${vals[mid]})`;
        boxes[mid].style.background = '#3b82f6';
        
        await new Promise(r => setTimeout(r, 1000));
        
        if(vals[mid] === target) {
            boxes[mid].style.background = '#10b981';
            status.innerText = "Target Found! O(log N) operations.";
            return;
        } else if(vals[mid] < target) {
            for(let i=left; i<=mid; i++) boxes[i].style.opacity = '0.2';
            left = mid + 1;
        } else {
            for(let i=mid; i<=right; i++) boxes[i].style.opacity = '0.2';
            right = mid - 1;
        }
    }
    status.innerText = "Target not found in Index.";
}

// 3. Dijkstra
const graphNodes = [
    {id:'A', x: 50, y: 125}, {id:'B', x: 150, y: 50}, 
    {id:'C', x: 150, y: 200}, {id:'D', x: 270, y: 125}, {id:'E', x: 380, y: 125}
];
const graphEdges = [
    {n1:0, n2:1, w:4}, {n1:0, n2:2, w:2}, 
    {n1:1, n2:3, w:5}, {n1:2, n2:3, w:1}, {n1:3, n2:4, w:3}
];

function drawStaticGraph() {
    const canvas = document.getElementById('dijkstraCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,450,250);
    
    ctx.lineWidth = 2;
    graphEdges.forEach(e => {
        const p1 = graphNodes[e.n1], p2 = graphNodes[e.n2];
        ctx.strokeStyle = '#334155';
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        ctx.fillStyle = '#ef4444'; ctx.font = "13px var(--font-code)";
        ctx.fillText(e.w + "ms", (p1.x+p2.x)/2 - 10, ((p1.y+p2.y)/2) - 10);
    });

    graphNodes.forEach(n => {
        ctx.fillStyle = '#1e293b'; ctx.strokeStyle = '#64748b';
        ctx.beginPath(); ctx.arc(n.x, n.y, 18, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = 'white'; ctx.font = "14px Arial"; ctx.fillText(n.id, n.x-5, n.y+5);
    });
}

async function visualizeDijkstra() {
    drawStaticGraph(); 
    const canvas = document.getElementById('dijkstraCanvas');
    const ctx = canvas.getContext('2d');
    const status = document.getElementById('dij-status');
    const pathEdges = [ {n1:0, n2:2}, {n1:2, n2:3}, {n1:3, n2:4} ];

    for(let e of pathEdges) {
        const p1 = graphNodes[e.n1], p2 = graphNodes[e.n2];
        status.innerText = `Routing packet: ${p1.id} -> ${p2.id}...`;
        
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath(); ctx.arc(p2.x, p2.y, 18, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'white'; ctx.fillText(p2.id, p2.x-5, p2.y+5);
        
        await new Promise(r => setTimeout(r, 800));
    }
    status.innerText = "Fastest Route Found (Total: 6ms)";
}

// 4. BFS (Concentric Expansion)
function initBFSNodes() {
    const container = document.getElementById('bfs-visual-container');
    if(!container) return;
    container.innerHTML = `
        <div class="bit-box" id="bfs-n0" style="position:absolute; top:130px; left:130px; border-radius:50%; width:40px; height:40px; z-index:10;">M</div>
        <div class="bit-box bfs-deg-1" style="position:absolute; top:70px; left:130px; border-radius:50%; width:30px; height:30px;">1</div>
        <div class="bit-box bfs-deg-1" style="position:absolute; top:170px; left:80px; border-radius:50%; width:30px; height:30px;">1</div>
        <div class="bit-box bfs-deg-1" style="position:absolute; top:170px; left:180px; border-radius:50%; width:30px; height:30px;">1</div>
        <div class="bit-box bfs-deg-2" style="position:absolute; top:20px; left:100px; border-radius:50%; width:25px; height:25px;">2</div>
        <div class="bit-box bfs-deg-2" style="position:absolute; top:10px; left:180px; border-radius:50%; width:25px; height:25px;">2</div>
        <div class="bit-box bfs-deg-2" style="position:absolute; top:230px; left:50px; border-radius:50%; width:25px; height:25px;">2</div>
        <div class="bit-box bfs-deg-2" style="position:absolute; top:230px; left:220px; border-radius:50%; width:25px; height:25px;">2</div>
        <div class="bit-box bfs-deg-2" style="position:absolute; top:130px; left:250px; border-radius:50%; width:25px; height:25px;">2</div>
    `;
}

async function visualizeBFS() {
    document.querySelectorAll('.bit-box').forEach(n => { n.style.background = '#1e293b'; n.style.borderColor = '#475569'; });
    
    document.getElementById('bfs-n0').style.background = '#3b82f6';
    await new Promise(r => setTimeout(r, 800));

    document.querySelectorAll('.bfs-deg-1').forEach(n => { n.style.background = '#8b5cf6'; n.style.borderColor = '#a78bfa'; });
    await new Promise(r => setTimeout(r, 800));

    document.querySelectorAll('.bfs-deg-2').forEach(n => { n.style.background = '#10b981'; n.style.borderColor = '#34d399'; });
}

// 5. Trie 
function visualizeTrie() {
    const val = document.getElementById('trie-input').value.toLowerCase();
    document.querySelectorAll('.trie-node').forEach(n => {
        n.style.background = '#1e293b'; n.style.transform = 'scale(1)';
    });
    
    if(!val) return;
    
    document.getElementById('tr-root').style.background = '#3b82f6';
    
    setTimeout(() => {
        if(val.startsWith('c')) { document.getElementById('tr-c').style.background = '#3b82f6'; document.getElementById('tr-c').style.transform = 'scale(1.1)'; }
        if(val.startsWith('d')) { document.getElementById('tr-d').style.background = '#3b82f6'; document.getElementById('tr-d').style.transform = 'scale(1.1)'; }
    }, 200);

    setTimeout(() => {
        if(val.startsWith('ca')) document.getElementById('tr-ca').style.background = '#3b82f6';
        if(val.startsWith('do')) document.getElementById('tr-do').style.background = '#3b82f6';
    }, 400);

    setTimeout(() => {
        if(val === 'cat') document.getElementById('tr-cat').style.background = '#10b981';
        if(val === 'car') document.getElementById('tr-car').style.background = '#10b981';
        if(val === 'dog') document.getElementById('tr-dog').style.background = '#10b981';
    }, 600);
}

// 6. Sliding Window
const trafficData = [20, 50, 40, 10, 80, 40, 10]; 
function initChart() {
    const chart = document.getElementById('traffic-chart');
    if(!chart) return;
    Array.from(chart.children).forEach(c => { if(!c.id) c.remove(); });
    
    trafficData.forEach(val => {
        const bar = document.createElement('div');
        bar.style.cssText = `width:30px; background:#475569; border-radius:4px 4px 0 0; height:${val}px; transition:0.3s; z-index:10;`;
        chart.appendChild(bar);
    });
}

async function visualizeWindow() {
    initChart();
    const overlay = document.getElementById('window-overlay');
    const status = document.getElementById('sw-status');
    const bars = document.querySelectorAll('#traffic-chart div:not(#window-overlay)');
    
    for(let i = 0; i <= trafficData.length - 3; i++) {
        overlay.style.transform = `translateX(${i * 35}px)`; // 30px bar + 5px gap
        
        let sum = trafficData[i] + trafficData[i+1] + trafficData[i+2];
        
        bars.forEach(b => b.style.background = '#475569');
        if(sum > 100) {
            status.innerHTML = `Window Sum: <span style="color:#ef4444">${sum} (RATE LIMIT HIT)</span>`;
            bars[i].style.background = '#ef4444';
            bars[i+1].style.background = '#ef4444';
            bars[i+2].style.background = '#ef4444';
        } else {
            status.innerHTML = `Window Sum: ${sum} requests`;
            bars[i].style.background = '#3b82f6';
            bars[i+1].style.background = '#3b82f6';
            bars[i+2].style.background = '#3b82f6';
        }
        await new Promise(r => setTimeout(r, 1200));
    }
}

// 7. LRU Cache
let cacheState = ['A', 'B', 'C']; 
function renderLRU() {
    const stack = document.getElementById('lru-stack');
    stack.innerHTML = cacheState.map(key => 
        `<div class="bit-box" id="block-${key}" style="width:100%; height:45px; border-radius:6px; font-size:1rem; justify-content:flex-start; padding-left:15px; transition:all 0.5s;">Key ${key}</div>`
    ).join('');
}

async function visualizeLRU(action, targetKey) {
    if(action === 'GET') {
        cacheState = [targetKey, ...cacheState.filter(k => k !== targetKey)];
        renderLRU();
        document.getElementById(`block-${targetKey}`).style.background = '#3b82f6';
        setTimeout(() => document.getElementById(`block-${targetKey}`).style.background = '#1e293b', 600);
    } 
    else if(action === 'PUT') {
        const evictedBlock = document.getElementById(`block-${cacheState[2]}`);
        evictedBlock.style.transform = 'translateX(50px)';
        evictedBlock.style.opacity = '0';
        
        await new Promise(r => setTimeout(r, 400)); 
        
        cacheState.pop();
        cacheState.unshift(targetKey); 
        renderLRU();
        document.getElementById(`block-${targetKey}`).style.background = '#10b981';
        setTimeout(() => document.getElementById(`block-${targetKey}`).style.background = '#1e293b', 600);
    }
}
