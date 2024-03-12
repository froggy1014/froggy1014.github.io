import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";
import i18next from "i18next";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isCurrentLanguage = data.language === i18next.language;

  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return (
    isCurrentLanguage &&
    !data.draft &&
    (import.meta.env.DEV || isPublishTimePassed)
  );
};

export default postFilter;
