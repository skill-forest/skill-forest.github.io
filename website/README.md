# Skill-Forest project website

A self-contained English academic project page inspired by https://skill-composer.github.io/. Uses original HTML/CSS and only local assets. No package installation or frontend build is needed.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000 --directory website
```

Open http://localhost:8000. For a quick static preview, you can also open `website/index.html` directly.

## Publish at https://skill-forest.github.io/

1. Under the **skill-forest organization**, create a public repository named **skill-forest.github.io**. Creating the organization alone does not create the Pages site.
2. Push this directory's contents (including `website/` and `.github/workflows/pages.yml`) to the repository's `main` branch.
3. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. Open **Actions → Deploy project website to GitHub Pages → Run workflow** for the first deployment. Later changes to `website/` on `main` deploy automatically.

The workflow publishes only `website/`; `paper/` and `code/` are not uploaded to the Pages artifact. During double-blind review, author names, affiliations, the PDF button, and the PDF asset are omitted. No custom domain is required. If copying only `website/` into a separate repository root, publish its root instead and adjust the workflow's upload path accordingly.

## Update content

- `index.html`: paper title, abstract, method, result table, and anonymous draft BibTeX.
- `styles.css`: layout, colors, responsive styles.
- `script.js`: set `projectLinks.code` and `projectLinks.arxiv` when available. Both are empty now; the buttons show **Coming soon** and have no destination.
- `assets/overview.png`, `assets/search-cost.png`: rasterized copies of the two original paper figures. Full-size images open when clicked.

## Refresh the figures

Run from the repository root with Poppler installed:

```sh
pdftoppm -png -singlefile -scale-to 2200 paper/figures/skill_forest_optimization_landscape_v8.pdf website/assets/overview
pdftoppm -png -singlefile -scale-to 2200 paper/figures/search_cost_livemath_alfworld.pdf website/assets/search-cost
```

Also update the HTML claims and tables to match the revised manuscript. The build does not rewrite website text automatically.

## Content boundaries

The page explicitly labels the manuscript as a draft; it makes no acceptance or publication claim. All reported scores come from `paper/sections/05_results.tex`. Overall scores are macro-averages over five benchmarks. The 71.68% construction-rollout reduction uses **summed counts**, not the savings table's macro-average, and excludes final selection, aggregation, and held-out testing. Oracle is shown as a held-out-test-selected diagnostic, not a deployable baseline. Unavailable GEPA results remain blank (displayed as em dashes). The BibTeX is provisional, with no fabricated arXiv identifier.

Do not add an author-bearing PDF or restore author information while double-blind review is ongoing. The private Overleaf checkout in `paper/` is not part of the website deployment.

## Languages

`index.html` is the default English page. `zh.html` contains the Chinese version. The EN / 中文 switch is at the top left. Both versions share styles, scripts, figures, and identical numerical results. Figure labels and canonical BibTeX metadata retain English. Update both HTML files when content changes.
