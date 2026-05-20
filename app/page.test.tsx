import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import { content } from "@/lib/content";

describe("Page", () => {
  it("渲染 hero 主标与结尾宣言首句", () => {
    render(<Page />);
    expect(screen.getByRole("heading", { level: 1, name: content.hero.title })).toBeInTheDocument();
    expect(screen.getByText(content.closing.manifesto[0], { exact: false })).toBeInTheDocument();
  });
  it("九个版块的锚点 id 都存在", () => {
    const { container } = render(<Page />);
    ["top","philosophy","record","companion","meet","cloud","echo","privacy","closing"]
      .forEach((id) => expect(container.querySelector(`#${id}`)).not.toBeNull());
  });
});
