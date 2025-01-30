import React, { type ReactNode } from "react";
import BlogPostPage from "@theme-original/BlogPostPage";
import type BlogPostPageType from "@theme/BlogPostPage";
import type { WrapperProps } from "@docusaurus/types";
import GiscusComponent from "@site/src/components/GiscusComponents";
import { ColorModeProvider } from "@docusaurus/theme-common/internal";

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPageWrapper(props: Props): ReactNode {
  return (
    <ColorModeProvider>
      <BlogPostPage {...props} />
      <div className="row">
        <div className="col col--3" />
        <div className="col col--7">
          <hr />
          <GiscusComponent />
        </div>
        <div className="col col--2" />
      </div>
    </ColorModeProvider>
  );
}
