# Portfolio — [YOUR_NAME]

A modern, performant portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone [YOUR_REPO_URL]
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  layout.tsx          ← Root layout (fonts, metadata, ThemeProvider)
  page.tsx            ← Composes all sections
  globals.css         ← Tailwind + custom theme tokens

/components
  /sections           ← Page sections (Hero, About, Projects, etc.)
  /ui                 ← Reusable UI primitives (Button, Card, Badge)
  ThemeProvider.tsx    ← Dark/light mode provider

/data                 ← Content data files (projects, experience, etc.)
/lib                  ← Utility functions
/public/images        ← Static assets
```

## ✏️ Customization

All placeholder content is marked with `[YOUR_NAME]`, `[YOUR_ROLE]`, etc. Find and replace:

| Placeholder             | Replace with            |
| ----------------------- | ----------------------- |
| `[YOUR_NAME]`           | Your full name          |
| `[YOUR_ROLE]`           | e.g., "Full-Stack Dev"  |
| `[YOUR_EMAIL@example.com]` | Your email            |
| `[YOUR_GITHUB]`         | Your GitHub username    |
| `[YOUR_LINKEDIN]`       | Your LinkedIn slug      |
| `[YOUR_TWITTER]`        | Your Twitter/X handle   |
| `[YOUR_PHOTO]`          | Add your photo to `/public/images/` |
| `[PROJECT_TITLE_N]`     | Your project names      |
| `[COMPANY_NAME_N]`      | Companies you worked at |
| `[YOUR_ROLE_N]`         | Your job titles         |

Content data files are located in `/data/`:
- `projects.ts` — Your projects
- `experience.ts` — Work history
- `techStack.ts` — Technologies
- `testimonials.ts` — Quotes from colleagues

## 🎨 Design System

| Token          | Value      | Description          |
| -------------- | ---------- | -------------------- |
| Accent Color   | `#8b5cf6`  | Violet-500           |
| Background     | `#09090b`  | Zinc-950 (dark mode) |
| Display Font   | Outfit     | Headings             |
| Body Font      | Inter      | Body text            |
| Mono Font      | JetBrains Mono | Code / handles   |

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📜 License

MIT © [YOUR_NAME]
