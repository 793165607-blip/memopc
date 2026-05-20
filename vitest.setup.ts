import "@testing-library/jest-dom";

// jsdom 不实现 IntersectionObserver / matchMedia；framer-motion 的
// whileInView 与 useReducedMotion（Reveal 基元）在测试环境需要它们。
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ?? (IntersectionObserverStub as unknown as typeof IntersectionObserver);

if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}
