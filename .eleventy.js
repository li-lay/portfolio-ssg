const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy CSS files to the output directory
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Copy favicon and SEO files
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Set HTML as the default template engine
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css"
  ]);

  // Customize Markdown library
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "liquid", // Use liquid for HTML templates
    markdownTemplateEngine: "liquid"
  };
};
