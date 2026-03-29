# 🕳️ My Personal Website

A small, dark corner of the internet where I experiment with HTML, CSS, and a bit of JavaScript — and try to make it feel like **me**.

Live version: served via **GitHub Pages** from the `master` branch.

---

## ✨ What this site is

This site is my personal hub: a place to introduce myself, show the projects I’m proud of, and occasionally write about what I’m learning and what I love.

It’s deliberately lightweight and framework‑free so I can stay close to the web fundamentals and iterate quickly as my skills grow.

The landing page includes:

- **About me** – who I am and what I’m doing.
- **Work** – technical projects with links to code.
- **Blog** – short write‑ups and posts.
- Persistent footer with links to my email and social profiles.

---

## 🎨 Features

- **Single-page landing layout** with clear sections for “About”, “Work”, and “Blog”.
- **Typewriter-style animations** that reveal headings and paragraphs in sequence.
- **Playful visual touches** like a moving white stripe and color‑shifting title text.
- **Project deep links** out to individual project pages and their GitHub repositories.
- **Always-visible footer** with quick access to email, LinkedIn, Instagram, GitHub, and WhatsApp.

---

## 🗂 Repository structure

```text
.
├── index.html                      # Main landing page
├── blog/                           # Blog posts and related pages
├── work/                           # Project and portfolio pages
├── scripts/                        # JavaScript for animations/effects
└── README.md                       # This file
```

The structure is intentionally simple and may evolve as I add more content.

---

## 🛠 Local development

There is no build step or tooling pipeline — it’s a pure static site.

You can view it by:

- Opening `index.html` directly in your browser, or
- Running a tiny local HTTP server, for example with Python:

```bash
# Python 3
python -m http.server 8080
# visit http://localhost:8080
```

---

## 🚀 Deployment

Deployment is handled by **GitHub Pages**:

1. Commit and push changes to the `master` branch.
2. GitHub Pages rebuilds and serves the new version.
3. I open the live URL and sanity‑check that everything looks and feels right.

No CI, no build pipeline — just static files and git.

---

## 📈 Future plans

Things I’d like to improve and expand:

- Write more detailed, narrative‑style project pages under `/work`.
- Publish more posts under `/blog`, especially about systems, tooling, and what I’m learning.
- Refine the visual design (typography, motion, micro‑interactions) as my frontend eye improves.

---

## ⚖️ License

I haven’t added a formal license yet.  
For now, **all rights are reserved** unless explicitly stated otherwise.