export const navLinks = [
  { label: "理念", href: "#philosophy" },
  { label: "怎么记", href: "#record" },
  { label: "遇见自己", href: "#meet" },
  { label: "回响", href: "#echo" },
] as const;

export type Facet = { label: string; value: string; size: number; left: string; top: string };

export const content = {
  nav: { brand: "念念", cta: "预约内测" },
  hero: {
    eyebrow: "念念 Memo",
    title: "记录情绪，遇见自己",
    sub: ["把心里的话放进来——一句、一段语音、一张照片都好。", "它一直在听，慢慢拼出另一个你。"],
    primary: "了解念念",
    ghost: "预约内测",
  },
  philosophy: {
    eyebrow: "关于念念",
    title: ["情绪不需要被打分，", "只需要被接住。"],
    body: "市面上的日记总想把你变成数据——打分、打卡、连续记录第几天。念念不这样。它不替你计算，只是认真听；被接住的那一刻，事情就已经轻了一点。",
    pillars: [
      { num: "01", h: "它不催你", p: "没有连续打卡，没有红点提醒。想说的时候再来，隔很久也没关系。" },
      { num: "02", h: "它不评判你", p: "不分析、不说教、不下结论。你说什么都不会被纠正，也不会被记成缺点。" },
      { num: "03", h: "它只对你一个人", p: "你写下的不公开、不推荐、不被比较。这里只有你和它。" },
    ],
  },
  record: {
    eyebrow: "怎么记",
    title: ["想怎么说，", "就怎么说。"],
    body: "打字、语音、拍张照、录段视频都行。不用写得完整，也不用每天都来。哪怕只是一句「今天好累」，它也会替你收好。",
    writingLine: "今天好累，但好像也没什么大事。",
    modes: ["文字", "语音", "照片", "视频"],
  },
  companion: {
    eyebrow: "你的分身",
    title: ["你说的每一句，", "它都接得住。"],
    body: "念念会为你养一个分身。你写下情绪，它会轻轻回一句——不评价，不急着安慰，只是让你知道：有人听见了。",
    response: ["累就先歇着，", "这一天我替你记着。"],
  },
  meetYourself: {
    eyebrow: "遇见自己",
    title: ["记着记着，", "你会慢慢认出自己。"],
    body: "每一次记录都在替你显影：性格、喜好、在意的人、说不出口的情绪……它们像一颗颗轻轻浮起的光，慢慢拼出你的轮廓。",
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
    title: ["你的分身，", "替你去遇见另一个 ta。"],
    body: "它会带着你的心事，在念念的世界里走一走，遇见另一个有相似故事的人。然后你发现——原来那种安静，并不是孤独。",
    encounter: { who: "夜里也常醒着的人", sub: "另一个 ta", theme: "深夜独处的松弛", quote: "「那种安静，不是孤独」" },
  },
  echo: {
    eyebrow: "回响",
    title: ["每隔一阵，", "它会写一封信给你。"],
    body: "念念把你这段时间留下的话，轻轻收成一封回响——不是报告，也不是建议，更像一个老朋友在月底对你说：这段日子，辛苦了。",
    letterMeta: "回响 · 三月",
    letterExcerpt: ["这个月你说得最多的是「累」，", "但也有三次，你说还好撑过来了。"],
  },
  privacy: {
    eyebrow: "只属于你",
    title: ["这里没有别人，", "只有你和它。"],
    body: "你写下的一切都只为你保存——不公开、不推荐、不拿去比较。隐私是念念的底线，不是一个功能点。",
  },
  closing: {
    manifesto: ["它不替你下结论，也不急着把你变好。", "它只是一直在这儿，", "等你愿意开口的那一刻。"],
    cta: "预约内测",
    note: "内测就快开始了，留个邮箱，第一时间叫你。",
  },
  footer: { brand: "念念 Memo · 2026", tags: ["隐私优先", "不打分", "只为你写"] },
} as const;
