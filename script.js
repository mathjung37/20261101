document.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-account");
  if (!button) return;

  const account = button.dataset.account;
  const originalText = button.textContent;

  try {
    await navigator.clipboard.writeText(account);
    button.textContent = "복사됨";
    button.setAttribute("aria-label", "계좌번호 복사 완료");
    window.setTimeout(() => {
      button.textContent = originalText;
      button.setAttribute("aria-label", "계좌번호 복사");
    }, 1400);
  } catch {
    button.textContent = "실패";
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1400);
  }
});

