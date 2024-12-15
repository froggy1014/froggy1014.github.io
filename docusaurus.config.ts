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
  title: "프로기네",
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
          postsPerPage: "ALL",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
    },
    metadata: [
      {
        name: "google-site-verification",
        content: "jyGDXJ29gIqX2cQC8u2gfMH24MpxDk8ROAx9QPWNLoY",
      },
      {
        name: "keywords",
        content:
          "프론트엔드 개발자, 이정민, 에반, 블리딩 엣지, 새로운 기술, 대외 활동, 사이드 프로젝트, 자동화, 문서화, 협업, 프로젝트 품질, 지속적 학습, 개발자 경험, 사회 기여, 개발자 성장",
      },
      {
        name: "description",
        content:
          "안녕하세요. 프론트엔드 개발자 이정민입니다. 새로운 기술을 배우고 이를 실제 프로젝트에 적용하는 것을 좋아하며, 대외 활동과 사이드 프로젝트를 통해 빠르게 지식을 습득하고 반복적인 작업을 자동화하는 데 열정을 가지고 있습니다. 문서화를 통해 팀 협업을 원활하게 하고 프로젝트 품질을 향상하는 데 기여하고 있으며, 지속적으로 학습하고 배운 바를 적용함으로써 개발자 경험을 쌓고 사회에 기여하는 개발자로 성장하고 싶습니다.",
      },
    ],
    headTags: [
      {
        tagName: "link",
        attributes: {
          rel: "preconnect",
          href: "https://froggy1014.github.io",
        },
      },
      {
        tagName: "script",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: JSON.stringify({
          "@context": "https://froggy1014.github.io/",
          "@type": "Organization",
          name: "프론트엔드 개발자 이정민 개발블로그",
          url: "https://froggy1014.github.io/",
          logo: "https://avatars.githubusercontent.com/u/76844856?v=4",
        }),
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
