export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({ top: 0, behavior });
}

export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
