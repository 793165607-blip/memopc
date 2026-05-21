"use client";
import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 默认 onSubmit：POST 到 env 配置的端点；未配置则仅本地成功（落地前再接后端，见 spec 开放项②） */
async function defaultSubmit(email: string) {
  const url = process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT;
  if (!url) return;
  await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
}

export function EmailForm({ onSubmit = defaultSubmit }: { onSubmit?: (email: string) => Promise<void> | void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handle() {
    if (!EMAIL_RE.test(email)) { setError("邮箱格式好像不太对"); return; }
    setError(""); setBusy(true);
    try { await onSubmit(email); setDone(true); }
    catch { setError("提交失败了，待会儿再试试"); }
    finally { setBusy(false); }
  }

  if (done) return <p className="text-[15px] text-ink">已收到，上线第一时间通知你 🤍</p>;

  return (
    <div className="flex w-full max-w-[420px] flex-col items-center gap-2">
      <div className="flex w-full gap-2">
        <input
          type="email" placeholder="留下邮箱" aria-label="邮箱" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass-thin flex-1 rounded-full px-5 py-3 text-[14px] text-fg outline-none"
        />
        <button onClick={handle} disabled={busy} className="btn-primary disabled:opacity-60">
          {busy ? "提交中…" : "预约内测"}
        </button>
      </div>
      {error && <p className="text-[12.5px] text-[#c0392b]">{error}</p>}
    </div>
  );
}
