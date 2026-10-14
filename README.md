# The Top 1% Learning OS

A self-serve learning platform for consulting, strategy, venture capital, AI and case competitions, built for ambitious learners in India. One link, instant Google sign-in, and a complete practice stack: curated tracks, drills against the clock, a decision journal, streaks and ranks, and distilled operator reading.

**Live:** https://tinyurl.com/2cnp2yjp

## What is inside

### Learn
- **219 quiz-gated modules** across Foundations, Corporate Finance (Damodaran NYU Stern spine), Consulting, Strategy, Marketing and Growth, Venture Capital, Sector Specialization, Capstone and Defence, AI, Thinking Patterns and Executive Communication.
- 90%-watch video gate before quizzes unlock; track completion certificates with verification IDs and LinkedIn share.

### Library
- 265 hand-picked papers, essays and videos, including a deduped AI shelf of 47 Ivy-taught courses and industry-standard resources.

### Case Comp
- Frameworks, calculators and deck layouts for case competitions.

### Practice stack
- **Timed drills** - 8 guesstimates and 6 case drills against a countdown timer, with model answers and honest self-ratings.
- **Decision journal** - log a decision with your reasoning and confidence (50-100%), then review the outcome on the due date. A calibration chart shows predicted vs actual accuracy by confidence bucket, with a plain-English verdict on over/underconfidence.
- **Streaks and ranks** - XP for every rep (drill 10, journal entry 10, review 15, active-day bonus 5), current and longest streaks, a 15-week activity grid, and a consulting-style rank ladder from Analyst (0 XP) to Top 1% (4000 XP).
- **Book distillations** - ten essential operator books (Pyramid Principle, Good Strategy Bad Strategy, The McKinsey Way, Zero to One, Thinking Fast and Slow, Principles, Deep Work, The Lean Startup, The Goal, So Good They Can't Ignore You), each with why-to-read, 8 ideas that matter, 3 actions for the week and an anchor quote.

### AI Credits
- A curated directory of free AI credits, grants and programmes students can claim.

### Platform
- Google sign-in with manual learner approval (admin-gated).
- Progress, drills and journal sync to a Supabase backend (publishable anon key only; row-level security enforced, no cross-user reads).
- Daily digest: a sheet-fed curated read on the home page.
- Light theme only, static UI, fast first paint (~2s HTML delivery), mobile-first responsive.

## Architecture

The whole client application lives in a single `index.html` (markup, styles and JavaScript inlined, no build step, no external JS dependencies beyond the Supabase client CDN). `Code.gs` is a 6-line `doGet` that serves it. State persists to `localStorage` and queues to Supabase.

```
.
├── appsscript.json   # Apps Script manifest (V8, Asia/Kolkata, web app config)
├── Code.gs           # doGet entrypoint - serves index.html
├── index.html        # the entire client application
└── README.md
```

## Setup

1. Create a new project at https://script.google.com.
2. Add two files: `Code.gs` and `index.html` from this repo (keep the names exact).
3. Set the project manifest (`appsscript.json`) to match this repo, or enable "Show appsscript.json" in Project Settings and paste it.
4. For sync, create a Supabase project with a `progress` table (RLS on, per-email policies) and set `SUPABASE_URL` and `SUPABASE_ANON_KEY` constants in `index.html`. The approval mirror sheet and digest sheet are optional; the app runs read-only without them.

## Deploy

1. In the Apps Script editor: **Deploy > New deployment > Web app**.
2. Execute as: **Me**. Who has access: **Anyone**.
3. Every change ships as a new version under **Manage deployments**; the `/exec` URL never changes.
4. Verify a deploy by fetching the `/exec` URL and grepping for a unique string from the new code (deployment dialogs can report success on stale snapshots - always confirm on the served bytes).

### Deploy hygiene learned the hard way
- Always open `index.html` in the editor before saving; saves can silently no-op otherwise.
- Wait 60+ seconds after saving before creating a version, or the version can snapshot pre-save content.
- The serving layer caches aggressively; re-check with a fresh query param before concluding content is missing.

## Admin

- Admin console and learner approval: `shivamchand56@gmail.com` only.

## Licence

Proprietary. All rights reserved.
