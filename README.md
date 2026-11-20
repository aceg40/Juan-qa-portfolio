# Juan Sebastián Giraldo — QA Automation Portfolio

A bilingual (English/Spanish) portfolio for QA Automation Engineer roles, built with React, TypeScript, and Vite.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
```

## Deploy to Cloudflare Pages

1. Push this project to a new GitHub repository.
2. In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git, select the repository.
3. Build command: `npm run build`.
4. Build output directory: `dist`.
5. Add a custom domain later if desired.

## Before publishing

- Add your real email and LinkedIn profile when available.
- Add your own resume PDF and link it from the site.
- Replace sample visual code in the hero with actual tested examples if you want code snippets to reflect your repository precisely.
- The site distinguishes 7 locally passing tests from the independent GitHub Actions CI smoke test.
