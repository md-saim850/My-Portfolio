# Md. Saim — Developer Portfolio

A responsive Next.js App Router portfolio built with React, Tailwind CSS, and Lucide icons.

## Requirements

- Node.js 20+
- A Next.js project with the App Router and Tailwind CSS configured

## Install

```bash
npm install
npm install lucide-react
npm run dev
```

Open http://localhost:3000.

## Files

- `app/`: App Router page, layout, and global styles
- `components/`: reusable page sections and interactive components
- `data/portfolio.js`: profile, skills, and project content

## Customize

Edit `data/portfolio.js` to update your email, profile, skills, project descriptions, and repository links. Add your own portrait to `public/profile.jpg` and set `profile.image` to `"/profile.jpg"`.

The contact form opens the visitor's default email app using a `mailto:` link. It does not send email directly. For real form submissions, connect an email service or create a backend API route.

Some portfolio project descriptions are based on project context and should be edited to match the exact features you have completed. Only claim features you have actually implemented.
