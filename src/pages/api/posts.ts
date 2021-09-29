import matter from "gray-matter";
import marked from "marked";

export async function getAllPosts() {
  const context = require.context("../../../content", false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../../../content/${post}`);
    const meta = matter(content.default);

    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://rychillie.net";

    const thumbAPI = `${baseUrl}/api/thumbnail.png?title=${
      meta.data.title
    }&thumbnail_bg=${encodeURIComponent(meta.data.thumbnail_bg)}`;

    const thumbHeader = meta.data.headerImage;

    const thumbnailUrl = thumbHeader ? meta.data.image : thumbAPI;

    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
      description: meta.data.description,
      postMonth: meta.data.postMonth,
      postDay: meta.data.postDay,
      postID: meta.data.postID,
      tags: meta.data.tag,
      thumbnailUrl,
    });
  }

  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../../../content/${slug}.md`);

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://rychillie.net";

  const meta = matter(fileContent.default);
  const content = marked(meta.content);

  const thumbAPI = `${baseUrl}/api/thumbnail.png?title=${
    meta.data.title
  }&thumbnail_bg=${encodeURIComponent(meta.data.thumbnail_bg)}`;

  const thumbHeader = meta.data.headerImage;

  const thumbnailUrl = thumbHeader ? meta.data.image : thumbAPI;

  return {
    title: meta.data.title,
    description: meta.data.description,
    postMonth: meta.data.postMonth,
    postDay: meta.data.postDay,
    postID: meta.data.postID,
    tags: meta.data.tag,
    thumbnailUrl,
    content,
    slug,
  };
}
