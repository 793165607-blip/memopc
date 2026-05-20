export const navLinks = [
  { label: "理念", href: "#philosophy" },
  { label: "它怎么陪你", href: "#record" },
  { label: "遇见自己", href: "#meet" },
  { label: "回响", href: "#echo" },
] as const;

export type Facet = { label: string; value: string; size: number; left: string; top: string };

export const content = {
  nav: { brand: "念念", cta: "预约内测" },
  hero: {
    eyebrow: "念念 Memo · 情绪日记",
    title: "记录情绪，遇见自己",
    sub: ["把每天的情绪放进来，念念替你听着、记着，", "慢慢拼出另一个你。"],
    primary: "了解念念",
    ghost: "预约内测",
  },
  philosophy: {
    eyebrow: "理念",
    title: ["不是工具，", "是一个愿意听你说话的地方。"],
    body: "我们见过太多日记 App 把人变成数据——心情打分、习惯打卡、连续记录 N 天。念念不这么做。生活本就不该被量化；心事被认真接住，才是被治愈的开始。",
    pillars: [
      { num: "01", h: "它不催你写", p: "没有连续记录、没有打卡、没有提醒焦虑。一周来一次，也可以。" },
      { num: "02", h: "它不评判你", p: "不是教练，也不是医生。不贴标签、不打分、不下绝对化结论。" },
      { num: "03", h: "它只为你写", p: "你的内容只属于你。回响是一封私人的信，不分享、不展示、不比较。" },
    ],
  },
  record: {
    eyebrow: "它怎么陪你",
    title: ["把今天放进来，", "一句话也算。"],
    body: "文字、语音、图片、视频——你想怎么记，就怎么记。不需要规整的句子，不需要每天都来。哪怕只是一句「今天有点累」，它都会好好放着。",
    writingLine: "今天有点累。",
    modes: ["✍️ 文字", "🎙️ 语音", "🖼️ 图片", "🎞️ 视频"],
  },
  companion: {
    eyebrow: "分身在听",
    title: ["你说的每一句，", "它都在听。"],
    body: "念念会给你一个只属于你的分身。你写下的情绪，它会用一句轻轻的话回应你——不分析、不说教，只是让你知道：有人接住了。",
    response: ["没关系，累的时候，", "不用解释为什么。我在。"],
  },
  meetYourself: {
    eyebrow: "遇见自己",
    title: ["记着记着，", "你慢慢看清了自己。"],
    body: "每一次记录，都让你的轮廓更清晰一点。性格、喜好、在意的人、藏起来的情绪……它们像一颗颗轻轻浮起的玻璃球。",
    facets: [
      { label: "性格", value: "温和", size: 130, left: "4%", top: "96px" },
      { label: "心理画像", value: "INFJ", size: 158, left: "28%", top: "8px" },
      { label: "人际关系", value: "亲密朋友 5 人", size: 120, left: "55%", top: "128px" },
      { label: "职业身份", value: "产品设计师", size: 142, left: "74%", top: "24px" },
      { label: "喜好", value: "阅读", size: 108, left: "40%", top: "212px" },
      { label: "生活节奏", value: "周末独处", size: 96, left: "66%", top: "236px" },
    ] as Facet[],
  },
  cloud: {
    eyebrow: "云游",
    title: ["不只遇见自己，", "也遇见另一个 ta。"],
    body: "你的分身会在念念的世界里轻轻游走，遇见和你有相似心事的另一个人。那一刻你会发现——「那种安静，不是孤独。」",
    encounter: { who: "夜里整理自己的人", sub: "另一个 ta", theme: "深夜独处的松弛", quote: "“那种安静不是孤独”" },
  },
  echo: {
    eyebrow: "回响",
    title: ["每隔一段，", "它写给你一封回响。"],
    body: "念念会把你这阵子留下的话，轻轻整理成一封信——像一个朋友在月末对你说的那句「这段日子，辛苦了」。不是报告，是回响。",
    letterMeta: "月度回响 · 2026 / 03",
    letterExcerpt: ["「这个月，你慢慢松开了", "一些原本攥得很紧的事。」"],
  },
  privacy: {
    eyebrow: "隐私优先",
    title: ["你的情绪，", "只属于你。"],
    body: "念念把你的私密放在第一位。这里没有点赞、没有围观、没有比较——只有你和那个慢慢懂你的分身。",
  },
  closing: {
    manifesto: ["念念不评判你，也不替你下结论。", "它只是一直在那儿，", "等你愿意说的那一刻。"],
    cta: "预约内测",
    note: "内测即将开启，留下邮箱第一时间通知你。",
  },
  footer: { brand: "念念 Memo · 2026", tags: ["隐私优先", "本地优先", "仅为你而写"] },
} as const;
