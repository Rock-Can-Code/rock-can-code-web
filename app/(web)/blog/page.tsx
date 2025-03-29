import Alert from "@/src/views/common/components/alert";
import Container from "@/src/views/common/components/container";
import Header from "@/src/views/common/components/header";
  import { PostBody } from "@/src/views/common/components/post-body";
  import { PostHeader } from "@/src/views/common/components/post-header";
import { getAllPosts, getPostBySlug } from "@/util/api";
import markdownToHtml from "@/util/markdownToHtml";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogView } from "@/src/views/blog/view";

export default async function Post(props: Params) {
  const posts = await getAllPosts();
  posts.map((post) => (console.log('post', post.slug)));
  

  return ( <BlogView />); //posts={posts}/> );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

