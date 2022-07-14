import { defineConfig } from "vitepress";

export default defineConfig({
  // description: "",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/LemoFire/ntang/edit/main/docs/index.md",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    lastUpdatedText: "Updated Date",
    sidebar: [
      {
        text: "开始",
        items: [{ text: "快速开始", link: "/quick-start" }],
      },
      {
        text: "Checker",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "简介", link: "/checker" },
          { text: "isPhone", link: "/checker#isphone" },
        ],
      },
      {
        text: "Encrypt",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "简介", link: "/encrypt" },
          { text: "md5", link: "/encrypt#md5" },
          { text: "md5_16", link: "/encrypt#md5-16" },
          { text: "hmacmd5", link: "/encrypt#hmacmd5" },
        ],
      },
      {
        text: "Identifier",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "简介", link: "/identifier" },
          { text: "getFingerprint", link: "/identifier#getfingerprint" },
        ],
      },
      {
        text: "Optimization",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "简介", link: "/optimization" },
          { text: "debounce", link: "/optimization#debounce" },
          { text: "throttle", link: "/optimization#throttle" },
        ],
      },
      {
        text: "StringFilter",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "简介", link: "/stringFilter" },
          { text: "leaveNum", link: "/stringFilter#leavenum" },
        ],
      },
      {
        text: "Time",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "简介", link: "/time" },
          { text: "sleep", link: "/time#sleep" },
        ],
      },
    ],
    // siteTitle: "NTANG工具箱",
    socialLinks: [
      { icon: "github", link: "https://github.com/LemoFire/ntang" },
    ],
  },
  title: "NTANG工具箱",
});
