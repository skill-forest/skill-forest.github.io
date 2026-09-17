// Set these URLs when the code and preprint are publicly available.
const projectLinks = {
  code: "",
  arxiv: "",
};

for (const [name, url] of Object.entries(projectLinks)) {
  const link = document.getElementById(`${name}-link`);
  if (!url) continue;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  link.removeAttribute("aria-disabled");
  link.removeAttribute("role");
  link.removeAttribute("tabindex");
  link.querySelector(".button-tag").remove();
}

const copyButton = document.getElementById("copy-citation");
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.textContent = "Copied!";
    status.textContent = "BibTeX copied to clipboard.";
    setTimeout(() => { copyButton.textContent = "Copy BibTeX"; }, 2000);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Select & copy";
    status.textContent = "Citation selected. Press Control+C or Command+C to copy.";
  }
});
