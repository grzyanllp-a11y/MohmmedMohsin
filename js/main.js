const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============ Populate static text from data ============ */
function populateProfile() {
  document.querySelectorAll("[data-name]").forEach(el => el.textContent = PROFILE.name);
  document.querySelectorAll("[data-role]").forEach(el => el.textContent = PROFILE.role);
  document.querySelectorAll("[data-subrole]").forEach(el => el.textContent = PROFILE.subrole);
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = PROFILE.location);
  document.querySelectorAll("[data-email]").forEach(el => el.textContent = PROFILE.email);
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = PROFILE.phone);
  document.querySelectorAll("[data-cv-link]").forEach(el => el.setAttribute("href", PROFILE.cvFile));
  document.querySelectorAll("[data-mailto]").forEach(el => el.setAttribute("href", "mailto:" + PROFILE.email));
  document.querySelectorAll("[data-tel]").forEach(el => el.setAttribute("href", "tel:" + PROFILE.phone.replace(/\s+/g, "")));
  document.querySelectorAll("[data-monogram]").forEach(el => {
    const initials = PROFILE.name.split(" ").map(w => w[0]).join("");
    el.textContent = initials;
  });
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

function renderStats() {
  const root = document.getElementById("stats-root");
  if (!root) return;
  root.innerHTML = STATS.map((s, i) => `
    <div class="stat-item">
      <div class="num"><span class="counter" data-target="${s.value}" data-suffix="${s.suffix}">0</span></div>
      <div class="label">${s.label}</div>
    </div>
  `).join("");
}

function renderSummary() {
  const root = document.getElementById("summary-root");
  if (!root) return;
  root.innerHTML = SUMMARY_POINTS.map((p, i) => `
    <div class="summary-item reveal">
      <span class="idx mono">0${i + 1}</span>
      <p>${p}</p>
    </div>
  `).join("");

  const comp = document.getElementById("competencies-root");
  if (comp) {
    comp.innerHTML = COMPETENCIES.map(c => `<span class="competency-chip reveal">${c}</span>`).join("");
  }
}

function renderSkills() {
  const root = document.getElementById("skills-root");
  if (!root) return;
  root.innerHTML = SKILL_GROUPS.map(group => `
    <div class="skill-group reveal">
      <span class="skill-group-label">${group.label}</span>
      <div class="pill-row">
        ${group.items.map(item => `<span class="pill">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderExperience() {
  const root = document.getElementById("timeline-root");
  if (!root) return;
  root.innerHTML = `
    <div class="timeline-track"><div class="progress"></div></div>
    ${EXPERIENCE.map(job => `
      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="tl-head">
          <h3 class="tl-role">${job.role}</h3>
          <span class="tl-period mono">${job.period}</span>
        </div>
        <p class="tl-company">${job.company} · ${job.location}</p>
        <div class="tl-card">
          <div class="tl-project-row">
            <span class="tl-project-name">${job.project}</span>
            ${job.team ? `<span class="tl-team">Team of ${job.team}</span>` : ""}
          </div>
          <p class="tl-desc">${job.description}</p>
          <ul class="tl-resp">
            ${job.responsibilities.map(r => `<li>${r}</li>`).join("")}
          </ul>
          <div class="tl-tools">
            ${job.tools.map(t => `<span class="tl-tool mono">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("")}
  `;
}

function renderEducation() {
  const root = document.getElementById("education-root");
  if (!root) return;
  root.innerHTML = EDUCATION.map(e => `
    <div class="edu-card reveal">
      <span class="edu-period mono">${e.period}</span>
      <h3>${e.degree}</h3>
      <p class="edu-school">${e.school}</p>
      <span class="edu-score">Score: ${e.score}</span>
    </div>
  `).join("");
}

/* ============ Preloader ============ */
function runPreloader() {
  const pre = document.getElementById("preloader");
  if (!pre) return Promise.resolve();

  const alreadySeen = sessionStorage.getItem("mm-cv-visited");
  if (alreadySeen || reduceMotion) {
    pre.remove();
    return Promise.resolve();
  }
  sessionStorage.setItem("mm-cv-visited", "1");

  return new Promise(resolve => {
    const counter = pre.querySelector(".pl-count");
    const bar = pre.querySelector(".pl-bar span");
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 1.3,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(obj.val);
        counter.textContent = v + "%";
        bar.style.width = v + "%";
      },
      onComplete: () => {
        gsap.to(pre, {
          yPercent: -100,
          duration: 0.7,
          ease: "power3.inOut",
          delay: 0.15,
          onComplete: () => { pre.remove(); resolve(); }
        });
      }
    });
  });
}

/* ============ Custom cursor ============ */
function initCursor() {
  if (isTouch || reduceMotion) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  const moveDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
  const moveDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
  const moveRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
  const moveRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

  window.addEventListener("mousemove", e => {
    moveDot(e.clientX); moveDotY(e.clientY);
    moveRing(e.clientX); moveRingY(e.clientY);
  });

  document.querySelectorAll("a, button, .pill").forEach(el => {
    el.addEventListener("mouseenter", () => gsap.to(ring, { scale: 1.8, duration: 0.25 }));
    el.addEventListener("mouseleave", () => gsap.to(ring, { scale: 1, duration: 0.25 }));
  });
}

/* ============ Nav ============ */
function initNav() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("mobile-open");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("mobile-open")));
  }

  document.getElementById("back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}

/* ============ Hero split-text animation ============ */
function initHero() {
  const lines = document.querySelectorAll(".hero h1 .line span");
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  if (reduceMotion) {
    gsap.set([".hero-tag", ".hero h1 .line span", ".hero .lead", ".hero-actions", ".hero-scroll"], { opacity: 1, y: 0 });
    return;
  }

  gsap.set(lines, { yPercent: 120 });
  gsap.set([".hero-tag", ".hero .lead", ".hero-actions", ".hero-scroll"], { opacity: 0, y: 20 });

  tl.to(".hero-tag", { opacity: 1, y: 0, duration: 0.6 })
    .to(lines, { yPercent: 0, duration: 1, stagger: 0.12 }, "-=0.3")
    .to(".hero .lead", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
    .to(".hero-actions", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
    .to(".hero-scroll", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
}

/* ============ Counters ============ */
function initCounters() {
  document.querySelectorAll(".counter").forEach(el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    const decimals = target % 1 !== 0 ? 1 : 0;
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => { el.textContent = obj.val.toFixed(decimals) + suffix; }
        });
      }
    });
  });
}

/* ============ Generic scroll reveals ============ */
function initReveals() {
  const groups = [
    ".summary-item", ".competency-chip", ".skill-group",
    ".timeline-item", ".edu-card", ".contact-card"
  ];
  groups.forEach(sel => {
    const items = gsap.utils.toArray(sel);
    if (!items.length) return;
    if (reduceMotion) { gsap.set(items, { opacity: 1, y: 0 }); return; }
    ScrollTrigger.batch(items, {
      start: "top 88%",
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }),
      once: true
    });
  });

  gsap.utils.toArray(".section-title, .about-visual").forEach(el => {
    if (reduceMotion) { gsap.set(el, { opacity: 1, y: 0 }); return; }
    gsap.set(el, { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: el, start: "top 88%", once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
    });
  });
}

/* ============ Timeline progress + active dot ============ */
function initTimelineProgress() {
  const track = document.querySelector(".timeline-track .progress");
  const container = document.querySelector(".timeline");
  if (!track || !container) return;

  ScrollTrigger.create({
    trigger: container,
    start: "top 60%",
    end: "bottom 60%",
    scrub: 0.6,
    onUpdate: self => { track.style.height = (self.progress * 100) + "%"; }
  });

  gsap.utils.toArray(".timeline-item").forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 65%",
      end: "bottom 35%",
      onEnter: () => item.classList.add("in-view"),
      onEnterBack: () => item.classList.add("in-view")
    });
  });
}

/* ============ Contact copy ============ */
function initContactCopy() {
  document.querySelectorAll("[data-copy]").forEach(card => {
    card.addEventListener("click", async () => {
      const value = card.querySelector("[data-copy-value]")?.textContent;
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        const note = card.querySelector(".copy-note");
        if (note) {
          note.textContent = "Copied!";
          note.classList.add("show");
          setTimeout(() => note.classList.remove("show"), 1500);
        }
      } catch (e) { /* clipboard unavailable */ }
    });
  });
}

/* ============ Boot ============ */
document.addEventListener("DOMContentLoaded", async () => {
  populateProfile();
  renderStats();
  renderSummary();
  renderSkills();
  renderExperience();
  renderEducation();

  initNav();
  initCursor();

  await runPreloader();

  initHero();
  if (window.ScrollTrigger) {
    initCounters();
    initReveals();
    initTimelineProgress();
  }
  initContactCopy();

  ScrollTrigger?.refresh();
});
