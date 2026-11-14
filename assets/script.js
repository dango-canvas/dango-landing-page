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
        linkFirefox: "On Firefox",
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
        "NoVgNMwAxgRAVPQPBuEN9wR2qAVtQ3K6H9zRswBaAFgGZSiAOANjAEY6B2MY20gXQjrkAlTQcOdAGPKAJRQKFSAJgCcROq3pRxLWnU7BFsQBaKgOlTAG26BZk0A68qLqTphOpRgNFcqKoqxAXmaBfgMBJxoAknUeNLEijbnQKSmB2EL6wwAAe7AAEgAemgHAqgPdegH3RgIXRotQg3ITiFvTilMGhoHDwgA6mgHbGgExpgERygIya8JnZRJIBdDa0JbSwgMrygDFZwqLE4ormvoGd9KrMsIDD+oCCtumiINRFpFZBtqpFsIAyuoCmioCEVoDw+sNykhNbXarSsIDSRoCZioBzGYA8FqIb3MQB1yGqgXBADTmgAZ1IZEYimGQgK5TFRcbiwLQHQDOyoB8V0ACEZeSTMXIjegdYr-dQAQmA7AAFAALAAu1IADgBnABcAHoWQBDABu7Op7IATgyAHQAcwAltTKQBXABGkoZAFM+QBjAD2ADtqfKNYLVQBbFmSlnURjGySUDYASmMqzAjE29r+XAcNPpzLZABN2WrhSrBaK1QBrYzUaR0cAdcCkcAlWRwTC4GKAE3JAPB-MQA8tKGaL3aKvWAYgA5FXU0XqmIAMhigAN5QAhboAtZUARdqAQH+VnI6NRuKR8nJiOxVKpoPQQo7B10R5thyUrpPVOGYPP-mBFNwY2AKCvFwwh91bTOILQigv92BpAvVPOh7BYH2gA",
        "NoJgNMwAxgRIcAaAk5Q0O4AIBU6BCBTAdgMYAWAtgIYBOA1prGALQAcAzAyIwGxgCMH3YAFnACAuhH6xAboqANbUAU6oDAXQIyudesw6t63ZuG7dh4AKxjQcQBwWgYf1Ad26BwC0BY-4GPIwM2KgMLlAA3KJAd6mAMjJUC9DAwEwEG4YITAoY1ZYQG+5QEKlQGBgwHh9W0B8V0AEIwB6QBIlQGolTMBeo0A15UzAT+1AFetfEAB2YKCQATDwSIgg2EAHU0A7Y0AQ83TbQFNzQAS7QEAGQDAlQGA9YetAC5tACljAecTfZlZQ8BADfQjjAzhJQHBja0As7UBJORUDRgYtHX9wowguWEA+n0A7DxPbTEAbRSTMwGO5QEAPTCAPO1AA3OKlCGkCwSgmxawFqsEAL26AIcj7IApxNs7UAPAqAeENAM4qgAF3dxgqC1BrBUKCZrGC4dHp9IZjSYzBZg9g8aHBDaUrYQACcu0Ay36AHPNAJ5G2ToIX4mm0PBuhmMFNggC-1QD9fhVbIAF40A4sqALE1AIg6dG4LACQV4F3CsN0cG1gHe5TG2QAsNoBYOQdht5MDJ3EhFoV4Fgh0A5AajQAJ5rYnYAja0AcXLtQDq2obqlxVjxGDCFdEADqwQCdpoBVm1QAEFULJUAAjfDEcjUVBYVCAKDkioB0-WcB1QAGFADD-WMAXHKoAAimdQYON9BAIH5ai44VExmA3CC9AEBg01XqvLWzAuJlY0-EO00Agu9BXwTXwQ39zAtUYIgViYMXCP9VHZ83FKtehvxmMMBg3BvQA&v=2",
        "NoJgNMwAxgRASgWQMoDkD2AnAtrMBaAFkIIDZwBGCkw8KAXQgrkFgVQB8898QBmAdjACszClHC0w3RqDiBC6MDp3p0IDB3MCLFipq2MnwA+RPvj6MOTrxhVlFIWHEMIJWAEEAZq4CWAOwCmi67z86nZ0UsqwgC9+gGV6gF96gIRWeBSkylwAnGqiIYJSpHAAFABGAIYALgDGABZgAAQAzj4AjgD6ADY+XjU+2AUAJh7YAJR4IFD83MwgIMz2UvywcYDq6oCySoBwKtGAsHKAG8rDo2AAHHtqAukzEIewgHtegIMqgFj-ADJFAJ4+mKa4BCDkH+lJyuIgUnSsEAAd6ANGVABJOgBpzQAw-4BAd0Apq6AWjlAMP6oM4IF44HwFD2qhxJ1CTBgsEwPh6AFcyj5qoAKdWqXV6-WqeWwPiKXiGYBGQUIuUm00JwCocEAnaaAcXVAJwWgCV9QAAcmiPgJKFBDhRuDBTkLwLB5IB5xMAiDqAFDlABKmgBzzLbo5IfJRqXg0QWquCADHlAP1K6O4WIoUwyGjUUmocEAfdEyQD5yoBMJTwpHS2MIQUy4lIfvCIsAd7qAFesxYAeBUAL2aAR31ALMqgFrowDDfoBmL0AWdqAcgNEiQuJMudxVDMpELcvhUjAG2pUhMoLlpI36H6eSlCOkQHtlCABPxgMpcrHB0xDmksZ9J3WRn2fpRJH6o62QP9SCQbH3-TZB82Jr6IJYb9AuffJ-eYCqpJY8X6SDAAe+1L76CAA&v=3"
    ],
    en: [
        "NoVgNMwAxgRAVPQPBuEN9gIgQwHYHMD2isYAtACwDM5JAHAGxgCMDMp95AuhA3AKIBmfAJYBjQQFMswgJ4ACAGKCATgGcALkWLkATAE4SDVoxDUwhhp2Ba4ASSxrsqmQHEJYxRlWC8WDQZPEGagB2RmoTQygLKlgAZQBbDEVHABkMKTwAV3USLXJSEiDuBhAWekiIfNhgAA92GQA5PBkAIQxhAGsJABMNWhBuYi1AxlIrCItwBExVDBkYjD4xVSl4Xv6SHSLKUzKLelgeaoAHN3FJMXklNQ1SEHBBqwZaejMLENg5ABs8AHcZNDEykEOB8JBAQSs5BCDG24wgJgOcQARmIujIALJ4LpiG6kfJ0EbcOHAPSwAAS2C6xC67h+WDmy0+OJI5CYpiogRCxOYcGSeGEGE+l1U1xIpB0egCIHyDFyO0YFjZsAA0mIpEi8Ik0WhFIIAG4SDS6EKDUaMQry8rAWVwACEwHYAAoABaqVRHZQALgA9N6MHqPIllAA6HCCVTOjJIjLKNzCbyqCSqYPxuLejLe2hBLM6ajkKAASl6VB0jygMGYMCtMLgrvdXt9XWw+GDgiw7Q0YTAUKM3HI4GrlUwuCagBNyQDwfzIAPJIoFdQTYMANPCebwyABkMnSGUUMiR3xwto0IC09GK4H7+UMpHYFgs0EYYCrFhgZSfL8YVffFU-T+-oF-Z8uDAR5-z7R9q0YIp-3oEIgOAegTHg+g9GfD9uBgWBYFvIA",
        "NoVgNMwAxgRAVPQPBuEN9gIgQwHYHMD2isYAtACwDM5JAHAGxgCMDMp95AuhA3AKIBmfAJYBjQQFMswgJ4ACAGKCATgGcALkWLkATAE4SDVoxDUwhhp2Ba4ASSxrsqmQHEJYxRlWC8WDQZPEGagB2RmoTQygLKlgAZQBbDEVHABkMKTwAV3USLXJSEiDuBhAWekiIfNhgAA92GQA5PBkAIQxhAGsJABMNWhBuYi1AxlIrCItwBExVDBkYjD4xVSl4Xv6SHSLKUzKLelgeaoAHN3FJMXklNQ1SEHBBqwZaejMLENg5ABs8AHcZNDEykEOB8JBAQSs5BCDG24wgJgOcQARmIujIALJ4LpiG6kfJ0EbcOHAPSwAAS2C6xC67h+WDmy0+OJI5CYpiogRCxOYcGSeGEGE+l1U1xIpB0egCIHyDFyO0YFjZsAA0mIpEi8Ik0WhFIIAG4SDS6EKDUaMQry8rAWVwACEwHYAAoABaqVRHZQALgA9N6MHqPIllAA6HCCVTOjJIjLKNzCbyqCSqYPxuLejLe2hBLM6ajkKAASl6VB0jygMGYMCtMLgrvdXt9XWw+GDgiw7Q0YTAUKM3HI4GrlUwuCagBNyQDwfzIAPJIoFdQTYMANPCebwyABkMnSGUUMiR3xwto0IC09GK4H7+UMpHYFgs0EYYCrFhgZSfL8YVffFU-T+-oF-Z8uDAR5-z7R9q0YIp-3oEIgOAegTHg+g9GfD9uBgWBYFvIA&v=2",
        "NoVgNMwAxgRAVPQPBuEN9gIgQwHYHMD2isYAtACwDM5JAHAGxgCMDMp95AuhA3AKIBmfAJYBjQQFMswgJ4ACAGKCATgGcALkWLkATAE4SDVoxDUwhhp2Ba4ASSxrsqmQHEJYxRlWC8WDQZPEGagB2RmoTQygLKlgAZQBbDEVHABkMKTwAV3USLXJSEiDuBhAWekiIfNhgAA92GQA5PBkAIQxhAGsJABMNWhBuYi1AxlIrCItwBExVDBkYjD4xVSl4Xv6SHSLKUzKLelgeaoAHN3FJMXklNQ1SEHBBqwZaejMLENg5ABs8AHcZNDEykEOB8JBAQSs5BCDG24wgJgOcQARmIujIALJ4LpiG6kfJ0EbcOHAPSwAAS2C6xC67h+WDmy0+OJI5CYpiogRCxOYcGSeGEGE+l1U1xIpB0egCIHyDFyO0YFjZsAA0mIpEi8Ik0WhFIIAG4SDS6EKDUaMQry8rAWVwACEwHYAAoABaqVRHZQALgA9N6MHqPIllAA6HCCVTOjJIjLKNzCbyqCSqYPxuLejLe2hBLM6ajkKAASl6VB0jygMGYMCtMLgrvdXt9XWw+GDgiw7Q0YTAUKM3HI4GrlUwuCagBNyQDwfzIAPJIoFdQTYMANPCebwyABkMnSGUUMiR3xwto0IC09GK4H7+UMpHYFgs0EYYCrFhgZSfL8YVffFU-T+-oF-Z8uDAR5-z7R9q0YIp-3oEIgOAegTHg+g9GfD9uBgWBYFvIA&v=3"
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
    iframe.src = `https://dango-canvas.github.io/dango/?embed=true&v=${currentCaseIndex}&lang=${currentLang}#${hash}`;

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

    updateMigrationToastText();
}

/* ==========================================================================
   [TEMPORARY / EASILY STRIPPABLE] Domain Migration Notice Logic
   ========================================================================== */
function isOldDomain() {
    const hostname = (window.location && window.location.hostname) || '';
    const norm = hostname.toLowerCase();
    return norm === 'dango.ink' || norm.endsWith('.dango.ink');
}

function updateMigrationToastText() {
    const toast = document.getElementById('migration-toast');
    if (!toast) return;

    const noticeText = currentLang === 'en'
        ? '📢 dango.ink is expiring soon. Dango Canvas is moving to GitHub Pages.'
        : '📢 dango.ink 即将到期，团子画板已迁移至 GitHub Pages。';
    const visitText = currentLang === 'en' ? 'Visit New Site' : '前往新地址';
    const guideText = currentLang === 'en' ? 'Migration Guide' : '迁移指引';
    const guideUrl = currentLang === 'en'
        ? 'https://dango-canvas.github.io/blog/migrating-to-github-pages-en.html'
        : 'https://dango-canvas.github.io/blog/migrating-to-github-pages.html';

    const textEl = toast.querySelector('.migration-toast-text');
    if (textEl) textEl.textContent = noticeText;
    const guideBtn = document.getElementById('btn-migration-guide');
    if (guideBtn) {
        guideBtn.textContent = guideText;
        guideBtn.href = guideUrl;
    }
    const visitBtn = document.getElementById('btn-migration-visit');
    if (visitBtn) visitBtn.textContent = visitText;
}

function initMigrationToast() {
    if (!isOldDomain()) return;

    let hasRead = false;
    try {
        hasRead = localStorage.getItem('dango_migration_read') === 'true';
    } catch {
        hasRead = false;
    }
    if (hasRead) return;

    const toast = document.createElement('div');
    toast.className = 'migration-toast';
    toast.id = 'migration-toast';

    toast.innerHTML = `
        <div class="migration-toast-content">
            <span class="migration-toast-text"></span>
            <button class="migration-toast-close" id="btn-migration-close" title="Dismiss">&times;</button>
        </div>
        <div class="migration-toast-actions">
            <a href="#" target="_blank" rel="noopener noreferrer" class="migration-btn migration-btn-subtle" id="btn-migration-guide"></a>
            <a href="https://dango-canvas.github.io/dango/" target="_blank" rel="noopener noreferrer" class="migration-btn migration-btn-primary" id="btn-migration-visit"></a>
        </div>
    `;

    document.body.appendChild(toast);
    updateMigrationToastText();

    const markReadAndDismiss = () => {
        try {
            localStorage.setItem('dango_migration_read', 'true');
        } catch {}
        toast.remove();
    };

    document.getElementById('btn-migration-close')?.addEventListener('click', markReadAndDismiss);
    document.getElementById('btn-migration-guide')?.addEventListener('click', markReadAndDismiss);
    document.getElementById('btn-migration-visit')?.addEventListener('click', markReadAndDismiss);
}

// Init
(function init() {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
    initMigrationToast();
})();
