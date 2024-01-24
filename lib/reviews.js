import { marked } from "marked";
import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";

export async function getFeaturedReview() {
  const reviews = await getReviews();

  return reviews[0];
}

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, image, html };
}

export async function getReviews() {
  const slugs = await getSlugs();

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  reviews.sort((a, b) => a.date - b.date);

  return reviews;
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
