export const openInNewTab = (url: string) => {
  if (window) {
    window.open(url, "_black")!.focus();
  }
};
