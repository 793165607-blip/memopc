import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { EmailForm } from "./EmailForm";

describe("EmailForm", () => {
  it("非法邮箱显示错误、不调用 onSubmit", async () => {
    const onSubmit = vi.fn();
    render(<EmailForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByPlaceholderText(/邮箱/), { target: { value: "not-an-email" } });
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/邮箱格式/)).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("合法邮箱触发 onSubmit 并显示成功态", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    render(<EmailForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByPlaceholderText(/邮箱/), { target: { value: "me@example.com" } });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith("me@example.com"));
    expect(await screen.findByText(/已收到/)).toBeInTheDocument();
  });
});
