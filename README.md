# The Zhao Food Science Lab — website

Source for the Zhao Food Science Lab website at San Diego State
University. Built with [Jekyll](https://jekyllrb.com/) so it can be
hosted free on GitHub Pages now, and later moved to `jzhao.sdsu.edu`
without rebuilding anything.

No coding experience is required for day-to-day updates — adding a
lab member, project, publication, or news item just means editing a
YAML file in `_data/`.

---

## What's in this repo

```
_config.yml          Site-wide settings (title, contact info, domain mode)
_data/                Edit THESE files for routine updates
  nav.yml               Navigation menu
  lab_members.yml       People (grouped by role)
  projects.yml           Current/forming/completed projects
  research_areas.yml     Research Areas page content
  publications.yml       Selected publications + books
  news.yml                News items
_includes/            Reusable page fragments (header, footer, cards) — rarely edited
_layouts/              Page templates (default, page, home) — rarely edited
assets/
  css/main.css          All styling — colors/fonts are CSS variables at the top
  js/main.js            Mobile menu toggle (~20 lines, no framework)
  images/               Add photos here (see "Adding photos" below)
*.md (about.md, etc.)  The actual pages — mostly just front matter + a little text
README.md             This file
```

---

## Editing content (no code required)

### Add or update a lab member

Open `_data/lab_members.yml`. Copy an existing block, paste it under the
right person, and edit:

```yaml
- name: "Jane Smith"
  role: "Graduate Student"
  group: grad              # pi | staff | collaborator | grad | undergrad | alumni
  project: "Project name"
  email: "jsmith@sdsu.edu"
  photo: ""                 # leave blank for an auto-generated initials avatar
```

The `group` field controls which section of the **People** page someone
appears in. To remove someone, delete their block.

### Add or update a project

Open `_data/projects.yml`:

```yaml
- name: "Project Codename"
  status: active            # active | forming | completed
  team: "Names of people on it"
  description: "Replace this with a real 1-3 sentence summary."
```

### Add a publication

Open `_data/publications.yml` and add a new entry under
`journal_articles:` (or `books:`):

```yaml
  - year: 2024
    authors: "Zhao, J., et al."
    title: "Title of the paper"
    journal: "Journal Name"
    details: "12(3), 45-50"
    doi: "10.xxxx/xxxxx"
```

Newest entries can go at the top — the page doesn't require any
particular order.

### Add a news item

Open `_data/news.yml` and add a block at the **top** of the list (newest
first):

```yaml
- date: "June 2026"
  title: "Headline here"
  summary: "One or two sentences."
```

### Edit Research Areas, Opportunities, Contact, etc.

These are mostly plain text. Open the matching `.md` file in the root
folder (e.g. `opportunities.md`, `contact.md`) and edit the text under the
`---` front matter block. Anything written in **Markdown** (like
`## Heading` or `- bullet`) will render automatically.

### The "To be updated" / "To be confirmed" badges

Several pages use a small badge to flag placeholder content, e.g.:

```liquid
{% include placeholder-badge.html text="To be updated" %}
```

Once you've filled in the real content next to a badge, just delete
that line.

---

## Adding photos

1. Save the image file inside `assets/images/people/` (for headshots),
   `assets/images/lab/` (for lab/group photos), or `assets/images/research/`.
2. In `_data/lab_members.yml`, set that person's `photo:` field to the
   path, e.g. `photo: /assets/images/people/jing-zhao.jpg`.
3. For Dr. Zhao's About page photo specifically, see the comment near
   the top of `about.md` — uncomment the `<img>` line and point it at
   her photo file.

Until a photo is added, member cards automatically show a colored
initials avatar instead — there's nothing broken to fix.

---

## Previewing changes locally (optional)

You don't need to do this to publish — GitHub builds the site for you.
But if you want to preview locally before pushing:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/jingzhaolab/` in a browser (the
`/jingzhaolab/` part matches `baseurl` in `_config.yml` — see below).

---

## Publishing on GitHub Pages (Mode 1 — current)

1. This repo already exists at `https://github.com/Rabiul-Alam-Roni/jingzhaolab` — `_config.yml` is pre-filled with the matching `url`/`baseurl`, so no placeholder swap is needed.
2. Push this folder's contents to that repository's `main` branch (see "Pushing this to your existing repo" below if you're starting from the downloaded zip).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a
   branch," choose branch `main` and folder `/(root)`, then save.
5. GitHub will build and publish automatically. Your site will appear
   at `https://Rabiul-Alam-Roni.github.io/jingzhaolab/` within a
   few minutes.

Every time you edit a file in `_data/` (or anywhere else) and push to
`main`, GitHub Pages automatically rebuilds the live site — no manual
build step.

### Pushing this to your existing repo

From the unzipped `jingzhaolab` folder:

```bash
git init
git remote add origin https://github.com/Rabiul-Alam-Roni/jingzhaolab.git

# If the repo already has any commits (e.g. an auto-created README),
# pull first so your push doesn't get rejected:
git pull origin main --allow-unrelated-histories

git add .
git commit -m "Initial Jekyll site for the Zhao Food Science Lab"
git branch -M main
git push -u origin main
```

If `git pull` reports a merge conflict (most likely on `README.md` if
GitHub auto-created one), open the file, resolve the conflict markers,
`git add README.md`, then continue with `git commit` and `git push` as
above.

---

## Connecting a custom domain later (Mode 2 — `jzhao.sdsu.edu`)

When SDSU approves the domain, switch the site over in two steps:

**Step 1 — update `_config.yml`:**

```yaml
# Comment out or delete the Mode 1 lines:
# url: "https://YOUR-GITHUB-USERNAME.github.io"
# baseurl: "/jingzhaolab"

# Uncomment the Mode 2 lines:
url: "https://jzhao.sdsu.edu"
baseurl: ""
```

**Step 2 — add a `CNAME` file:**

Create a file named exactly `CNAME` (no extension) at the root of the
repo, containing one line:

```
jzhao.sdsu.edu
```

Then, in GitHub: **Settings → Pages → Custom domain**, enter
`jzhao.sdsu.edu` and save. SDSU's IT/networking team will also need to
point the DNS for that subdomain at GitHub Pages (GitHub's docs on
["Managing a custom domain for your GitHub Pages
site"](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
cover the exact DNS records to request).

Because every internal link in this site uses Jekyll's `relative_url`
filter together with `baseurl`, nothing else needs to change — no
links will break when you switch modes.

---

## What's intentionally left as a placeholder

This first version was built only from verified sources (SDSU faculty
profile, Dr. Zhao's CV, the Spring/Summer 2026 lab roster, and the
design-reference screenshots) — nothing was invented. The following are
marked "To be updated" / "To be confirmed" and are waiting on real
content:

- Project descriptions (currently just codenames from the roster)
- Two Research Areas ("Fermentation & Brewing-Related Research" and
  "Food Innovation & Sustainability") — inferred from current projects,
  not yet confirmed by Dr. Zhao
- News items (all four are placeholders)
- Facilities page (no equipment list was available — currently
  "Coming soon"; delete `facilities.md` and its `_data/nav.yml` entry
  if you'd rather remove the page than show "coming soon")
- Publications from 2023–2026 (Google Scholar can't be auto-synced —
  add new entries to `_data/publications.yml` by hand)
- Photos for all lab members (initials avatars are shown until real
  photos are added)
