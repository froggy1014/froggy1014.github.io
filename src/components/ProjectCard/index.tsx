import React, { FC } from "react";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { TProject } from "../HomepageFeatures";

const ProjectCard: FC<TProject> = ({ title, src, description }) => {
  return (
    <div className="w-auto mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <ThemedImage
        className="w-full h-[300px] sm:h-[180px]"
        alt={title}
        sources={{
          light: useBaseUrl(src),
          dark: useBaseUrl(src),
        }}
      />

      <div className="px-4">
        <Heading
          as="h4"
          className="text-lg font-semibold text-zinc-800 dark:text-white mb-0"
        >
          {title}
        </Heading>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
