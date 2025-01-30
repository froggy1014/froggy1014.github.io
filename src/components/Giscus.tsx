import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="comments"
      repo="froggy1014/froggy1014.github.io"
      repoId="3991d5d4ef0dbe17c7a8b521a8a357f7"
      category="Announcements"
      categoryId="8d54c82ad88daab88f3caba24aeb2a82"
      mapping="specific"
      term="Welcome to Froggy's Blog"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="ko"
      loading="lazy"
    />
  );
}
