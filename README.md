# Murshidul Hasan Portfolio

This project now uses [Next.js](https://nextjs.org/) to serve a modern React based portfolio. The old static
`index.html` has been converted into a React component under `pages/index.js`. All images now live in
the `public/images` directory.

## Local Development

```bash
npm install    # install dependencies (requires internet access)
npm run dev    # start development server
npm test       # currently prints a placeholder message
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.


Legacy static files (`index.html`, `styles.css`) remain for reference.

## Production Build

To create an optimized production build and start the server:

```bash
npm run build
npm start
```

The project requires Node.js 18 or newer.

## GitHub Pages Deployment

This project can be exported to static HTML and hosted on GitHub Pages. Build
and export the site, then publish the contents of the generated `out` directory.

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
npm run export
```

Replace `<repo-name>` with the GitHub repository name. The files in `out/` can
be pushed to a `gh-pages` branch or uploaded via GitHub Pages settings.
