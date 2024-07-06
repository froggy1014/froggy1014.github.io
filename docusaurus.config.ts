import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

type TItem = {
  type: string;
  id: string;
};

function reverseBasedOnDate(items: Array<TItem>) {
  return items.sort((a, b) => {
    const dateA = a.id.split("/")[1];
    const dateB = b.id.split("/")[1];
    return dateB.localeCompare(dateA);
  });
}

function reverseSidebarItems(items) {
  const result = items.map((item) => {
    if (item.type === "category") {
      return { ...item, items: reverseBasedOnDate(item.items) };
    }
    return item;
  });

  return result;
}

const config: Config = {
  title: "Evan (FE)",
  favicon: "img/favicon.ico",
  url: "https://froggy1014.github.io",
  baseUrl: "/",
  projectName: "froggy1014.github.io", // Usually your repo name.
  organizationName: "froggy1014", // Usually your GitHub org/user name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [tailwindPlugin],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          tags: "./tags.yml",
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: "google-site-verification",
        content: "jyGDXJ29gIqX2cQC8u2gfMH24MpxDk8ROAx9QPWNLoY",
      },
    ],
    navbar: {
      title: "Evan",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "블로그",
        },
        { to: "/blog", label: "회고", position: "left" },
        {
          href: "https://github.com/froggy1014",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
