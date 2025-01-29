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
        { value: "blog", label: "Blog post" },
        { value: "docs", label: "Documentation" },
      ],
    });

    if (isCancel(postType)) {
      outro("Operation cancelled");
      process.exit(0);
    }

    // Get base directory based on selection
    const baseDir = path.join(
      path.dirname(__dirname),
      postType === "blog" ? "blog" : "docs",
    );

    // For now, just log the selected directory
    console.log(`Selected directory: ${baseDir}`);

    outro("Done!");
  }
}

const cli = new Cli({
  binaryName: "write-post",
  binaryLabel: "Write Post",
});

cli.register(WritePostCommand);
cli.runExit(process.argv.slice(2));
