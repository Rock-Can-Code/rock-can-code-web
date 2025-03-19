import Alert from "@/src/views/common/components/alert";
import Container from "@/src/views/common/components/container";
import Header from "@/src/views/common/components/header";
import { PostBody } from "@/src/views/common/components/post-body";
import { PostHeader } from "@/src/views/common/components/post-header";
import { getAllPosts, getPostBySlug } from "@/util/api";
import markdownToHtml from "@/util/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  // const post = getAllPosts()[0]

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  console.log('post', posts)  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
