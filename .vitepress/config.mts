import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuuki's Docs",
  description: "various documentations for what I am working on",
  lang: "en-US",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/docs/" },
      { text: "CDU-UET", link: "/cdu-uet/" },
    ],
    logo: "/image.png",
    sidebar: {
      "/docs/": [
        {
          text: "Introduction",
          link: "/docs/",
          collapsed: false,
          items: [
            {
              text: "Example Module",
              link: "/docs/examples.md",
              items: [],
            },
          ],
        },
      ],
      "/cdu-uet/": [
        {
          text: "CDU-UET",
          link: "/cdu-uet/",
        },
        {
          text: "Basic knowledge",
          link: "/cdu-uet/basic/",
          collapsed: true,
          items: [],
        },
        {
          text: "Cisco",
          link: "/cdu-uet/cisco/",
          collapsed: true,
          items: [],
        },
        {
          text: "Ruckus",
          link: "/cdu-uet/ruckus/",
          collapsed: true,
          items: [],
        },
      ],
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/june8th.dan" },
      { icon: "discord", link: "https://discord.gg/Yz9Q9etfez" },
      { icon: "github", link: "https://github.com/im-yuuki/meomeo-docs" },
    ],
    footer: {
      message: "Released under The Unlicense license.",
      copyright: "Copyright © 2026-present Yuuki"
    },
  },
  lastUpdated: true,
});
