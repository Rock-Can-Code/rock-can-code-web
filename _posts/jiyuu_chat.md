---
title: "Jiyuu Chat is Live – A Local-First AI Chat Experience"
excerpt: "Meet Jiyuu Chat, a fully local AI chat powered by WebLLM. No servers, no data mining—just you and your browser. Dive into the open source project that puts control back in your hands."
coverImage: "/assets/blog/jiyuu-chat/cover.png"
date: "2025-04-13T10:00:00.000Z"
author:
  name: Crisa Ortega
  picture: "/images/profile/crisamer.png"
ogImage:
  url: "/assets/blog/jiyuu-chat/cover-og.png"
---

We're excited to finally release **[Jiyuu Chat](https://jiyuu.chat/)**—a project that embodies everything we believe in when it comes to technology and freedom. It’s an AI chat that runs **entirely in your browser**, powered by [WebLLM](https://webllm.mlc.ai/), which means **all your data stays with you**. No cloud, no tracking, no account needed.

## Why Jiyuu?

“Jiyuu” means *freedom* in Japanese, and that’s exactly what we’re aiming for. AI is moving fast, but most of the tools out there ask you to trade your privacy for convenience. With Jiyuu Chat, we wanted to flip that: give you a fast, capable AI chat experience without asking for *anything* in return.

Thanks to WebLLM, everything runs client-side—your browser does the heavy lifting. This means you get all the benefits of a smart assistant, without ever sending your input to a server. Your conversations are yours and yours alone.

## Built for Devs and the Curious

We built Jiyuu Chat using **Next.js**, with performance and simplicity in mind. It’s an open source project, and we’d love for you to check it out, play with it, and contribute if you’re into that:

👉 [GitHub – Rock-Can-Code/jiyuu-chat](https://github.com/Rock-Can-Code/jiyuu-chat)

Getting started is easy:

```bash
npm install
npm run dev
# or yarn / pnpm / bun
```

Then open http://localhost:3000 and you're good to go. The main logic lives in app/page.tsx, and we use next/font to load the lovely Geist font by default.

The Philosophy
This project is more than just a tech demo—it’s a statement. We believe users should own their data, period. Jiyuu Chat is a tiny but clear example of how we can build powerful tools without surveillance, ads, or lock-in.

We're proud of what we've built, and we're even more excited to see where it can go with your input.

Come try it out at jiyuu.chat and let us know what you think. Contributions, bug reports, and love letters all welcome ❤️