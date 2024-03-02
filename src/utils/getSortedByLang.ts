import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedByLang = (
  posts: CollectionEntry<"blog">[],
  lang: string = "ko"
) => {
  return posts
    .filter(post => post.data.language === lang)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedByLang;
