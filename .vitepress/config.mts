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
          collapsed: false,
          items: [
            {
              text: "VLAN",
              link: "/cdu-uet/basic/vlan.md",
            },
            {
              text: "iperf3",
              link: "/cdu-uet/basic/iperf3.md",
            },
            {
              text: "nmap",
              link: "/cdu-uet/basic/nmap.md",
            },
          ],
        },
        {
          text: "Cisco",
          link: "/cdu-uet/cisco/",
          collapsed: false,
          items: [
            {
              text: "Catalyst 9300",
              link: "/cdu-uet/cisco/catalyst-9300.md",
            },
          ],
        },
        {
          text: "Ruckus",
          link: "/cdu-uet/ruckus/",
          collapsed: false,
          items: [
            {
              text: "AP R720",
              link: "/cdu-uet/ruckus/r720.md",
            },
            {
              text: "ZoneDirector ZD1200",
              link: "/cdu-uet/ruckus/zd1200.md",
            },
          ],
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
