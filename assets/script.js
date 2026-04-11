const content = {
    zh: {
        title: "🍡 团子画板",
        subtitle: "高效绘制框图的轻量级思维整理工具",
        linkOnline: "立即开始使用",
        linkFirefox: "Firefox 拓展",
        linkBlog: "官方博客",
        secIntro: "01. 核心理念 / PHILOSOPHY",
        introH3: "组织灵感，一目了然",
        introP1: "团子画板是一个为<b>高效绘制框图</b>而生的轻量、原子化的思维整理工具。",
        introP2: "它<b>不试图</b>成为复杂的绘图软件或笔记应用，它可以在灵感迸发瞬间，快速组织散乱的想法，并迅速理清关系。",
        secUsage: "02. 操作说明 / INSTRUCTIONS",
        usageH3: "在左侧随意玩玩！",
        usageList: `
            <li><b>双击空白处</b>：创建一个节点，支持 Markdown 语法。</li>
            <li><b>双击节点</b>：编辑节点内容。</li>
            <li><b>Ctrl + 拖拽</b>：复制节点。</li>
            <li><b>Ctrl + L</b>：把节点连起来。</li>
            <li><b>Alt + . (句号)</b>：体验一键智能排版。</li>
        `,
        secSpecs: "03. 技术规范 / SPECIFICATIONS",
        specEfficiencyH3: "效率优先",
        specEfficiencyP: "全键盘操作逻辑，通过主面板批量键入想法。智能排版算法可一键理清复杂的思维脉络。",
        specLocalH3: "本地优先",
        specLocalP: "无后端设计，数据留存在浏览器本地。通过包含压缩数据的 URL 链接实现极简分享。",
        specExperienceH3: "体验优先",
        specExperienceP: "提供手写风格字体。精心打磨使用体验。支持 Notion/Obsidian 无缝嵌入。",
        btnPrev: "上一个案例",
        btnNext: "下一个案例",
        btnPause: "点击 暂停/播放"
    },
    en: {
        title: "🍡 Dango Canvas",
        subtitle: "Atomic Thinking Tool for Efficient Diagramming",
        linkOnline: "Start Drawing Now",
        linkFirefox: "Firefox Extension",
        linkBlog: "Blog",
        secIntro: "01. PHILOSOPHY",
        introH3: "Organize Inspiration at a Glance",
        introP1: "Dango is a lightweight, atomic thinking tool designed for <b>efficient diagramming</b>.",
        introP2: "It captures scattered ideas instantly and clarifies relationships without friction.",
        secUsage: "02. INSTRUCTIONS",
        usageH3: "Play around on the left!",
        usageList: `
            <li><b>Double-click</b>: Create a node (supports Markdown).</li>
            <li><b>Double-click</b>: Edit content.</li>
            <li><b>Ctrl + Drag</b>: Copy node.</li>
            <li><b>Ctrl + L</b>: Connect nodes.</li>
            <li><b>Alt + . (Period)</b>: One-click smart layout.</li>
        `,
        secSpecs: "03. SPECIFICATIONS",
        specEfficiencyH3: "Efficiency First",
        specEfficiencyP: "Keyboard-driven logic. Bulk input ideas via the main panel. One-click smart layout for complex webs.",
        specLocalH3: "Local First",
        specLocalP: "No-backend design. Data stays in your browser. Share via compressed data URLs.",
        specExperienceH3: "Experience First",
        specExperienceP: "Hand-drawn styles. Well-polished user experience. Seamless Notion/Obsidian embedding.",
        btnPrev: "Previous Case",
        btnNext: "Next Case",
        btnPause: "Click to Play/Pause"
    }
};

// Cases for the switcher
const cases = {
    zh: [
        "NoJgNMwAxgRAVPQPBuEN9wR2qAVtQ3K6H9zRswBaAFgGZSiAOANjAEY6B2MY8UgXQjrkAlTQcOdAGPKAJRQKFSIAJxE6xWnSjhW9TqDiALRUB0qYA23QLMmgHXlRdCVMJ1KMBovBQVFWIC8zQL8BgJONAEk6iQpYkUbd5VsBsIb1hgAA92AAJAA9NAOBVAe69APujAQujRagBWbkIQM3oQShZrFXS4eEAHU0A7Y0AmNMAiOUBGTXg0zKIJPzoAoOBaWEBleUAYrOFRVnBTb39C5QhmWEBh-UBBWxTRdOoC0gsFCc6C2EAZXUBTRUBCK0B4fSHZMAkxjaVOqVhAaSNATMVAOYzAHgtRNe5iPyuirhhYQA05oAGdUGRGIxmk6UuAToKgYcA0e0AzsqAfFdAAhGHgkzGySksmzh4FgAEJgOwABQACwALlSAA4AZwAXAB6ZkAQwAbmyqWyAE70gB0AHMAJZUikAVwARhL6QBTXkAYwA9gA7Kly9UClUAW2ZEuZ1EYRoklDWAEpDNQKNb6FB1jBOnQ7NS6UzWQATNmqoXKgUi1UAaytUhyeRK4kCcJCmFwkUAJuSAeD-IgB5KX0kUekXesCRAByyqpIrVkQAZJFAAbygBC3QBayoAi7UAgP9LM50ajcUi5JTEdgqFTQehRiAwWiddaD4CXccleTj7jgWFcMAUBfANqTLpgZidWgFbfnKMqR3KdhAA",
        "NoJgNMwAxgRIcAaAk5Q0O4AIBU6BCBTAdgMYAWAtgIYBOA1prGALQAcAzAyIwGxgCMH3YAFnACAuhH6xAboqANbUAU6oDAXQIyudesw6t63ZuG7dh4AKxjQcQBwWgYf1Ad26BwC0BY-4GPIwM2KgMLlAA3KJAd6mAMjJUC9DAwEwEG4YITAoY1ZYQG+5QEKlQGBgwHh9W0B8V0AEIwB6QBIlQGolTMBeo0A15UzAT+1AFetfEAB2YKCQATDwSIgg2EAHU0A7Y0AQ83TbQFNzQAS7QEAGQDAlQGA9YetAC5tACljAecTfZlZQ8BADfQjjAzhJQHBja0As7UBJORUDRgYtHX9wowguWEA+n0A7DxPbTEAbRSTMwGO5QEAPTCAPO1AA3OKlCGkCwSgmxawFqsEAL26AIcj7IApxNs7UAPAqAeENAM4qgAF3dxgqC1BrBUKCZrGC4dHp9IZjSYzBZg9g8aHBDaUrYQACcu0Ay36AHPNAJ5G2ToIX4mm0PBuhmMFNggC-1QD9fhVbIAF40A4sqALE1AIg6dG4LACQV4F3CsN0cG1gHe5TG2QAsNoBYOQdht5MDJ3EhFoV4Fgh0A5AajQAJ5rYnYAja0AcXLtQDq2obqlxVjxGDCFdEADqwQCdpoBVm1QAEFULJUAAjfDEcjUVBYVCAKDkioB0-WcB1QAGFADD-WMAXHKoAAimdQYON9BAIH5ai44VExmA3CC9AEBg01XqvLWzAuJlY0-EO00Agu9BXwTXwQ39zAtUYIgViYMXCP9VHZ83FKtehvxmMMBg3BvQA&v=2",
        "NoJgNMwAxgRAVPQPBuEN9wR2qAVtQ3K6H9zRswBaAFgGZSiAOANjAEY6B2MY8UgXQjrkAlTQcOdAGPKAJRQKFSIAJxE6xWnSjhW9TqDiALRUB0qYA23QLMmgHXlRdCVMJ1KMBovBQVFWIC8zQL8BgJONAEk6iQpYkUbd5VsBsIb1hgAA92AAJAA9NAOBVAe69APujAQujRagBWbkIQM3oQShZrFXS4eEAHU0A7Y0AmNMAiOUBGTXg0zKIJPzoAoOBaWEBleUAYrOFRVnBTb39C5QhmWEBh-UBBWxTRdOoC0gsFCc6C2EAZXUBTRUBCK0B4fSHZMAkxjaVOqVhAaSNATMVAOYzAHgtRNe5iPyuirhhYQA05oAGdUGRGIxmk6UuAToKgYcA0e0AzsqAfFdAAhGHgkzGySksmzh4FgAEJgOwABQACwALlSAA4AZwAXAB6ZkAQwAbmyqWyAE70gB0AHMAJZUikAVwARhL6QBTXkAYwA9gA7Kly9UClUAW2ZEuZ1EYRoklDWAEpDNQKNb6FB1jBOnQ7NS6UzWQATNmqoXKgUi1UAaytUhyeRK4kCcJCmFwkUAJuSAeD-IgB5KX0kUekXesCRAByyqpIrVkQAZJFAAbygBC3QBayoAi7UAgP9LM50ajcUi5JTEdgqFTQehRiAwWiddaD4CXccleTj7jgWFcMAUBfANqTLpgZidWgFbfnKMqR3KdhAA&v=3"
    ],
    en: [
        "NoJgNMwAxgRAVPQPBuEN9gIgQwHYHMD2isYAtACwDM5JAHAGxgCMU9p45AuhA3AKIBmfAJYBjQQFMswgJ4ACAGKCATgGcALkWLkQAThINS9BrRitGnUHACSWNdlUyA4hLGKMqwXiwb91PdQDsjP7cplDmVLAAygC2GIr2ADIYUngAruokIOSkJMGMpCHgYRA5sMAAHuwyAHJ4MgBCGMIA1hIAJhq0AKzcxCAMvvpUoeZdcPCYqhgykRh8YqpS8J09JNrcDDpgIxD0sDzlAA4u4pJi8kpqGqRdY33gRuCmDOaBsHIANngA7jJoYspBDgvCQuv42IFNiwiuZfPtogAjMRtGQAWTwbTE11IOTojHIJhhEF0sAAEtg2sQ2q5vlgZosPliSOQGCEqEYxjtgEw4Ak8MIMB8LqoriRSNpdMQGF0cptCmYuNxYABpMRSBF4OIotCKQQANwkGh0gT6z2M2yJ3PAsAAhMB2AAKAAWqlUh2UAC4APRejB6txxZQAOhwglUTtSCNSyhcwk8qgkqiDceiXtSXto-kz2moBIAlN4QOBtDAmKWoDBityIi63Z6fW1sPgg4IsM1vORObLKGAtGAq-o4JhcHVACbkgHg-mQAeQRgLagmwYBqeHcnhkADIZClUooZAivjgbRouiBDLdewxAqZSOxzOZoIx++YYPQq+WnyVGJXRl+P9ywA85jcOyQGMBs5j0IEVb0L40FgLoYTPo+iFAA",
        "NoJgNMwAxgRAVPQPBuEN9gIgQwHYHMD2isYAtACwDM5JAHAGxgCMU9p45AuhA3AKIBmfAJYBjQQFMswgJ4ACAGKCATgGcALkWLkQAThINS9BrRitGnUHACSWNdlUyA4hLGKMqwXiwb91PdQDsjP7cplDmVLAAygC2GIr2ADIYUngAruokIOSkJMGMpCHgYRA5sMAAHuwyAHJ4MgBCGMIA1hIAJhq0AKzcxCAMvvpUoeZdcPCYqhgykRh8YqpS8J09JNrcDDpgIxD0sDzlAA4u4pJi8kpqGqRdY33gRuCmDOaBsHIANngA7jJoYspBDgvCQuv42IFNiwiuZfPtogAjMRtGQAWTwbTE11IOTojHIJhhEF0sAAEtg2sQ2q5vlgZosPliSOQGCEqEYxjtgEw4Ak8MIMB8LqoriRSNpdMQGF0cptCmYuNxYABpMRSBF4OIotCKQQANwkGh0gT6z2M2yJ3PAsAAhMB2AAKAAWqlUh2UAC4APRejB6txxZQAOhwglUTtSCNSyhcwk8qgkqiDceiXtSXto-kz2moBIAlN4QOBtDAmKWoDBityIi63Z6fW1sPgg4IsM1vORObLKGAtGAq-o4JhcHVACbkgHg-mQAeQRgLagmwYBqeHcnhkADIZClUooZAivjgbRouiBDLdewxAqZSOxzOZoIx++YYPQq+WnyVGJXRl+P9ywA85jcOyQGMBs5j0IEVb0L40FgLoYTPo+iFAA&v=2",
        "NoJgNMwAxgRAVPQPBuEN9gIgQwHYHMD2isYAtACwDM5JAHAGxgCMU9p45AuhA3AKIBmfAJYBjQQFMswgJ4ACAGKCATgGcALkWLkQAThINS9BrRitGnUHACSWNdlUyA4hLGKMqwXiwb91PdQDsjP7cplDmVLAAygC2GIr2ADIYUngAruokIOSkJMGMpCHgYRA5sMAAHuwyAHJ4MgBCGMIA1hIAJhq0AKzcxCAMvvpUoeZdcPCYqhgykRh8YqpS8J09JNrcDDpgIxD0sDzlAA4u4pJi8kpqGqRdY33gRuCmDOaBsHIANngA7jJoYspBDgvCQuv42IFNiwiuZfPtogAjMRtGQAWTwbTE11IOTojHIJhhEF0sAAEtg2sQ2q5vlgZosPliSOQGCEqEYxjtgEw4Ak8MIMB8LqoriRSNpdMQGF0cptCmYuNxYABpMRSBF4OIotCKQQANwkGh0gT6z2M2yJ3PAsAAhMB2AAKAAWqlUh2UAC4APRejB6txxZQAOhwglUTtSCNSyhcwk8qgkqiDceiXtSXto-kz2moBIAlN4QOBtDAmKWoDBityIi63Z6fW1sPgg4IsM1vORObLKGAtGAq-o4JhcHVACbkgHg-mQAeQRgLagmwYBqeHcnhkADIZClUooZAivjgbRouiBDLdewxAqZSOxzOZoIx++YYPQq+WnyVGJXRl+P9ywA85jcOyQGMBs5j0IEVb0L40FgLoYTPo+iFAA&v=3"
    ]
};

let currentLang = 'zh';
let currentCaseIndex = 0;
let autoPlayTimer = null;
let progressInterval = null;
let isPaused = false;
let progressStartTime = 0;
let progressElapsedBeforePause = 0;
const PLAY_DURATION = 30000; // 10 seconds per case
const UPDATE_INTERVAL = 100; // Update progress every 100ms

function updateCase(isAuto = false) {
    const currentCases = cases[currentLang];
    const iframe = document.getElementById('hero-iframe');
    
    // Update Counter UI with / or ||
    document.getElementById('case-current').innerText = String(currentCaseIndex + 1).padStart(2, '0');
    document.getElementById('case-sep').innerText = isPaused ? "||" : "/";
    document.getElementById('case-total').innerText = String(currentCases.length).padStart(2, '0');
    
    // Update Iframe Source - Force reload by putting version before hash
    const hash = currentCases[currentCaseIndex];
    iframe.src = `https://dango-app.pages.dev/?embed=true&v=${currentCaseIndex}&lang=${currentLang}#${hash}`;

    // Reset and start progress bar
    progressElapsedBeforePause = 0;
    if (!isPaused) {
        resetAutoPlay();
    } else {
        clearInterval(progressInterval);
        clearTimeout(autoPlayTimer);
        document.getElementById('case-progress').style.width = '0%';
    }
}

function togglePlayPause() {
    isPaused = !isPaused;
    
    // Re-render the counter text to show || or /
    document.getElementById('case-sep').innerText = isPaused ? "||" : "/";
    
    if (isPaused) {
        // Save current progress and stop
        progressElapsedBeforePause += (Date.now() - progressStartTime);
        clearInterval(progressInterval);
        clearTimeout(autoPlayTimer);
    } else {
        // Resume from where we were
        resumeAutoPlay();
    }
}

function resumeAutoPlay() {
    clearInterval(progressInterval);
    clearTimeout(autoPlayTimer);
    
    const progressBar = document.getElementById('case-progress');
    progressStartTime = Date.now();
    
    const remaining = PLAY_DURATION - progressElapsedBeforePause;
    
    progressInterval = setInterval(() => {
        let currentSessionElapsed = Date.now() - progressStartTime;
        let totalElapsed = progressElapsedBeforePause + currentSessionElapsed;
        let progress = Math.min((totalElapsed / PLAY_DURATION) * 100, 100);
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, UPDATE_INTERVAL);

    autoPlayTimer = setTimeout(() => {
        progressElapsedBeforePause = 0;
        nextCase(true);
    }, remaining);
}

function resetAutoPlay() {
    progressElapsedBeforePause = 0;
    resumeAutoPlay();
}

function nextCase(isAuto = false) {
    const currentCases = cases[currentLang];
    currentCaseIndex = (currentCaseIndex + 1) % currentCases.length;
    updateCase(isAuto);
}

function prevCase() {
    const currentCases = cases[currentLang];
    currentCaseIndex = (currentCaseIndex - 1 + currentCases.length) % currentCases.length;
    updateCase();
}

function setLanguage(lang) {
    currentLang = lang;
    currentCaseIndex = 0; 
    const data = content[lang];
    
    document.getElementById('title').innerText = data.title;
    document.getElementById('subtitle').innerText = data.subtitle;
    document.getElementById('link-online').innerText = data.linkOnline;
    document.getElementById('link-firefox').innerText = data.linkFirefox;
    document.getElementById('link-blog').innerText = data.linkBlog;
    
    document.getElementById('sec-intro').innerText = data.secIntro;
    document.getElementById('intro-h3').innerText = data.introH3;
    document.getElementById('intro-p1').innerHTML = data.introP1;
    document.getElementById('intro-p2').innerHTML = data.introP2;
    
    document.getElementById('sec-usage').innerText = data.secUsage;
    document.getElementById('usage-h3').innerText = data.usageH3;
    document.getElementById('usage-list').innerHTML = data.usageList;
    
    document.getElementById('sec-specs').innerText = data.secSpecs;
    document.getElementById('spec-efficiency-h3').innerText = data.specEfficiencyH3;
    document.getElementById('spec-efficiency-p').innerText = data.specEfficiencyP;
    document.getElementById('spec-local-h3').innerText = data.specLocalH3;
    document.getElementById('spec-local-p').innerText = data.specLocalP;
    document.getElementById('spec-experience-h3').innerText = data.specExperienceH3;
    document.getElementById('spec-experience-p').innerText = data.specExperienceP;

    // Update switcher tooltips
    document.getElementById('btn-prev').title = data.btnPrev;
    document.getElementById('btn-next').title = data.btnNext;
    document.getElementById('btn-pause').title = data.btnPause;

    updateCase();

    // Toggle active state
    document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// Init
(function init() {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
})();
