import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // https://rehype-pretty-code.netlify.app
  theme: {
    dark: "slack-dark",
    light: "slack-ochin",
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [[rehypePrettyCode, options]],
    syntaxHighlight: false,
  },
});
