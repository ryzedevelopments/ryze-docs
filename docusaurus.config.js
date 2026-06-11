// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ryze RP Docs",
  tagline: "Official documentation for Ryze RP",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://ryzedevelopments.github.io",
  baseUrl: "/ryze-docs/",

  organizationName: "ryzedevelopments",
  projectName: "ryze-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/ryzedevelopments/ryze-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ryze-social-card.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Ryze RP",
        logo: {
          alt: "Ryze RP Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://discord.gg/YOURINVITE",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting-started/introduction",
              },
              {
                label: "Server Rules",
                to: "/docs/server-rules/introduction",
              },
              {
                label: "Organization Rules",
                to: "/docs/organization-rules/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/YOURINVITE",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ryze RP.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
