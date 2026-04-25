import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentations",
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
          collapsed: false,
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
});
