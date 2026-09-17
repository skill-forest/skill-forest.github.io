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

const isChinese = document.documentElement.lang === "zh-CN";
const copyButton = document.getElementById("copy-citation");
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.textContent = isChinese ? "已复制！" : "Copied!";
    status.textContent = isChinese ? "BibTeX 已复制到剪贴板。" : "BibTeX copied to clipboard.";
    setTimeout(() => { copyButton.textContent = isChinese ? "复制 BibTeX" : "Copy BibTeX"; }, 2000);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = isChinese ? "已选中，请复制" : "Select & copy";
    status.textContent = isChinese ? "引用已选中，请按 Control+C 或 Command+C 复制。" : "Citation selected. Press Control+C or Command+C to copy.";
  }
});
