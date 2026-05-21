# 念念 Memo · PC 官网（niannian-web）

念念（情绪日记 + AI 分身）的 PC 端品牌官网：**单页沉浸式长滚动**，纯品牌展示。slogan「记录情绪，遇见自己」。

> 设计原则：全程用念念自己的视觉元素（漂浮玻璃球 / 蓝绿·暖色分身球 / 涟漪 / 六情绪色 / 衬线大字）体现功能，**不放任何 App 截图或手机原型图**。

## 快速开始

```bash
npm install
npm run dev        # 开发服务器 → http://localhost:3400
npm run build      # 生产构建
npm run typecheck  # tsc --noEmit
npm test           # vitest（8 个用例：content / EmailForm / 整页烟雾）
```

## 技术栈

Next.js 14（App Router）· React 18 · TypeScript · Tailwind CSS 3 · framer-motion 11 · Vitest + Testing Library · Noto Serif SC（next/font）。

## 目录结构

```
app/
  globals.css     # 设计系统：颜色/玻璃/球/涟漪/动画 token（镜像自 App 的 theme.css）
  layout.tsx      # 字体 + SEO metadata
  page.tsx        # 拼装 9 个版块（叙事顺序的唯一来源）
components/
  primitives/     # Section/TwoCol · Reveal（滚动渐显）· Orb（玻璃/分身/暖球+涟漪）· Button
  sections/       # 9 个版块：Hero/Philosophy/Record/Companion/MeetYourself/Cloud/Echo/Privacy/Closing
  Nav.tsx Footer.tsx EmailForm.tsx
lib/content.ts    # 全站文案/数据（唯一来源，改文案只动这里）
public/           # favicon.svg · og.svg（品牌渐变，非截图）
```

## 改动指南

- **改文案** → 只动 `lib/content.ts`。
- **改观感（颜色/玻璃/球/间距）** → `app/globals.css` 的 token 与类；颜色沿用 App `代码/src/styles/theme.css`（蓝 `#60a5fa` / 暖金 `#C8AD78` / 六情绪色）。
- **加/调版块** → `components/sections/` 加组件，在 `app/page.tsx` 按叙事顺序插入。
- 视觉对照基准：`../../docs/superpowers/specs/2026-05-20-niannian-pc-website-design.md`（设计稿在父工作区 `念念Memo/`，不在本仓库内）。

## 部署

Vercel：连本仓库（`793165607-blip/MemoPC`）即可静态部署。部署前把 `app/layout.tsx` 的 `metadataBase` 占位 `https://niannian.app` 改成正式域名。

## 待定项（占位、不影响构建）

- 结尾 CTA / 上线状态：暂「预约内测」；上线后可改「下载 App」。
- 邮箱收集后端：`EmailForm` 读 `NEXT_PUBLIC_SIGNUP_ENDPOINT`（未配置则仅本地成功提示）；后端方案待定。
- 正式域名（见上 `metadataBase`）。
- 各版块最终文案精修。
