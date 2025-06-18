import { defineConfig } from "vitepress";

export default defineConfig({
  // description: "",
  base: "/ntang/",
  lang: "zh-CN",
  lastUpdated: true,
  head: [
    [
      "script",
      {
        defer: "",
        src: "https://stat.ito.fun/script.js",
        "data-website-id": "9c5ecfc8-d73e-4740-80e2-e7ec01a55391",
      },
    ],
  ],
  themeConfig: {
    editLink: {
      pattern: "https://github.com/UzkiS/ntang/edit/main/docs/index.md",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present UzkiS",
    },
    lastUpdatedText: "Updated Date",
    sidebar: [
      {
        text: "开始",
        items: [{ text: "快速开始", link: "/quick-start" }],
      },
      {
        text: "Browser",
        collapsed: true,
        items: [
          { text: "简介", link: "/browser" },
          {
            text: "getParameter",
            link: "/browser#getparameter",
          },
        ],
      },
      {
        text: "Checker",
        collapsed: true,
        items: [
          { text: "简介", link: "/checker" },
          { text: "isPhoneNumber", link: "/checker#isphonenumber" },
        ],
      },
      {
        text: "Device",
        collapsed: true,
        items: [
          { text: "简介", link: "/device" },
          { text: "isAndroid", link: "/device#isandroid" },
          { text: "isWindows", link: "/device#iswindows" },
          { text: "isMacOS", link: "/device#ismacos" },
          { text: "isLinux", link: "/device#islinux" },
          { text: "isPC", link: "/device#ispc" },
        ],
      },
      {
        text: "Encrypt",
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
        collapsed: true,
        items: [
          { text: "简介", link: "/identifier" },
          { text: "getFingerprint", link: "/identifier#getfingerprint" },
        ],
      },
      {
        text: "Optimization",
        collapsed: true,
        items: [
          { text: "简介", link: "/optimization" },
          { text: "debounce", link: "/optimization#debounce" },
          { text: "throttle", link: "/optimization#throttle" },
        ],
      },
      {
        text: "StringFilter",
        collapsed: true,
        items: [
          { text: "简介", link: "/stringFilter" },
          { text: "leaveNum", link: "/stringFilter#leavenum" },
        ],
      },
      {
        text: "Time",
        collapsed: true,
        items: [
          { text: "简介", link: "/time" },
          { text: "sleep", link: "/time#sleep" },
        ],
      },
    ],
    // siteTitle: "NTANG工具箱",
    socialLinks: [{ icon: "github", link: "https://github.com/UzkiS/ntang" }],
  },
  title: "NTANG工具箱",
});
