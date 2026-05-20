import { describe, it, expect } from "vitest";
import { content, navLinks } from "./content";

describe("content", () => {
  it("hero 主标是产品 slogan", () => {
    expect(content.hero.title).toBe("记录情绪，遇见自己");
  });
  it("理念有三支柱", () => {
    expect(content.philosophy.pillars).toHaveLength(3);
  });
  it("记忆有六个画像球", () => {
    expect(content.meetYourself.facets).toHaveLength(6);
  });
  it("导航锚点都以 # 开头且对应版块存在", () => {
    expect(navLinks.length).toBeGreaterThanOrEqual(3);
    navLinks.forEach((l) => expect(l.href.startsWith("#")).toBe(true));
  });
});
