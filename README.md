# Schrodinger Portfolio

This is a personal portfolio and resume website built with Next.js (App Router, TypeScript) and Tailwind CSS. It is configured to output a fully static site.

## How to Edit Your Content

All of your portfolio content—including your header, education, skills, experience, projects, achievements, positions of responsibility, and sidebar resource links—is stored in a single, strongly-typed file:

`data/resume.ts`

Simply open `data/resume.ts` and modify the properties. Your changes will immediately reflect on the site.

- **To add a new project**: Add a new object to the `projects` array.
- **To update a link**: Find the specific string or URL inside the relevant object and change it. (Make sure to update the placeholder `TODO` URLs!).
- **To add new sidebar resources**: Add new objects to the `resources` array.

## Running Locally

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the static site (output will be in the `/out` directory):

```bash
npm run build
```
