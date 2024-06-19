import React, { FC } from "react";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { TProject } from "../HomepageFeatures";
import Link from "@docusaurus/Link";

const ProjectCard: FC<TProject> = ({ project }) => {
  const { redirectUrl, title, src, from, to, description } = project;
  return (
    <Link
      to={redirectUrl}
      className="max-w-[360px] md:max-w-none w-auto mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <ThemedImage
        className="w-full h-auto md:h-[300px] sm:h-[180px]"
        alt={title}
        sources={{
          light: useBaseUrl(src),
          dark: useBaseUrl(src),
        }}
      />

      <div className="px-4">
        <Heading
          as="h4"
          className="text-lg font-semibold text-zinc-800 dark:text-white mb-0 flex justify-between items-center"
        >
          <span>{title}</span>
          <div className="flex gap-1">
            <span className="text-xs">{from}</span>
            <span className="text-xs">~</span>
            <span className="text-xs">{to}</span>
          </div>
        </Heading>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
