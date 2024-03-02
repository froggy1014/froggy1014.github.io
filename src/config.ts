import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://froggy1014.github.io/", // replace this with your deployed domain
  author: "이정민",
  desc: "안녕하세요. 주니어 프론트엔드 개발자 이정민입니다. 이 블로그는 개발자로서의 성장과 함께 제가 배운 것들과 회고를 기록하는 공간입니다.",
  title: "에바니네",
  ogImage: "evan-blog-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "ko",
  langTag: ["ko-KR", "ko"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/froggy1014",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/min6_6b/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/%EC%A0%95%EB%AF%BC-%EC%9D%B4-617a4a145/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "clcl6084@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
