import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { intro, isCancel, outro, select, spinner, text } from "@clack/prompts";
import { Cli, Command, Option } from "clipanion";
import process from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class WritePostCommand extends Command {
  static paths = [Command.Default];

  async execute() {
    intro("Create new MDX post");

    // Select post type (blog or docs)
    const postType = await select({
      message: "Where would you like to create the post?",
      options: [
        { value: "docs", label: "포스팅" },
        { value: "blog", label: "회고" },
      ],
    });

    if (isCancel(postType)) {
      outro("Operation cancelled");
      process.exit(0);
    }

    let finalDir = "";
    let categoryLabel = "";

    // Get base directory based on selection
    const baseDir = path.join(
      path.dirname(__dirname),
      postType === "blog" ? "blog" : "docs",
    );

    // If docs is selected, show subdirectories
    if (postType === "docs") {
      const s = spinner();
      s.start("Reading docs directories");

      try {
        const directories = await fs.readdir(baseDir, { withFileTypes: true });
        const docsFolders = directories
          .filter(
            (dirent) => dirent.isDirectory() && !dirent.name.startsWith("_"),
          )
          .map((dir) => ({
            value: dir.name,
            label: dir.name,
          }));

        s.stop("Found docs directories");

        const selectedFolder = await select({
          message: "Select the docs category",
          options: docsFolders,
        });

        if (isCancel(selectedFolder)) {
          outro("Operation cancelled");
          process.exit(0);
        }

        finalDir = path.join(baseDir, selectedFolder);

        // Read category label from _category_.json
        const categoryPath = path.join(
          baseDir,
          selectedFolder,
          "_category_.json",
        );
        try {
          const categoryData = JSON.parse(
            await fs.readFile(categoryPath, "utf-8"),
          );
          categoryLabel = categoryData.label || selectedFolder;
        } catch (error) {
          categoryLabel = selectedFolder;
        }
      } catch (error) {
        s.stop("Error reading directories");
        console.error("Error:", error);
        process.exit(1);
      }
    } else {
      finalDir = baseDir;
    }

    // Get post details
    const title = await text({
      message: "Enter post title",
      validate: (value) => {
        if (!value) return "Title is required";
        return undefined;
      },
    });

    if (isCancel(title)) {
      outro("Operation cancelled");
      process.exit(0);
    }

    const slug = await text({
      message: "Enter post slug (in English)",
      validate: (value) => {
        if (!value) return "Slug is required";
        if (!/^[a-zA-Z0-9-]+$/.test(value)) {
          return "Slug must contain only English letters, numbers, and hyphens";
        }
        return undefined;
      },
    });

    if (isCancel(slug)) {
      outro("Operation cancelled");
      process.exit(0);
    }

    const description = await text({
      message: "Enter post description",
      validate: (value) => {
        if (!value) return "Description is required";
        return undefined;
      },
    });

    if (isCancel(description)) {
      outro("Operation cancelled");
      process.exit(0);
    }

    // Generate filename with current date
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0]; // YYYY-MM-DD
    const fileName = `${dateStr}-${slug}.mdx`;
    const filePath = path.join(finalDir, fileName);

    const hitsCounter = `[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ffroggy1014.github.io%2Fdocs%2F${fileName}&count_bg=%232E8555&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)`;

    // Generate frontmatter
    const frontmatter = `---
title: ${title}
description: ${description}
tags: [${categoryLabel}]
last_update:
  date: ${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getDate().toString().padStart(2, "0")}/${today.getFullYear()}
---

`;

    const content = `${frontmatter}
${hitsCounter}

`;

    try {
      await fs.writeFile(filePath, frontmatter + hitsCounter);
      console.log(`Created file: ${filePath}`);
    } catch (error) {
      console.error("Error creating file:", error);
      process.exit(1);
    }

    outro("Done!");
  }
}

const cli = new Cli({
  binaryName: "write-post",
  binaryLabel: "Write Post",
});

cli.register(WritePostCommand);
cli.runExit(process.argv.slice(2));
