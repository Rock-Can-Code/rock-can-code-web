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
import { BlogHeader, BlogPostView, BlogView } from "@/src/views/blog/view";
import { Main } from "next/document";
import Particles from "@/src/views/common/components/particles";


export default async function Post(props: Params) {
  const rawPosts = await getAllPosts();
  const posts = Array.isArray(rawPosts) ? rawPosts : [];
  
  
  //TODO: move this to a component
  return ( 

<div className="relative bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pt-16">
           <Particles className="absolute inset-0 -z-10" quantity={150} />
          <Container>
              <div className="container mx-auto px-4 flex flex-col gap-16 py-16">
                <h1 className="text-6xl md:text-8xl font-bold text-white text-center relative">
                  Blog
                </h1>
              </div>

              <div className="p-8">
                <p className="mt-4 text-lg text-zinc-400">
                  <span className="block text-2xl font-semibold text-white mb-4">
                  ✍️ Learning is good. Sharing is better.
                  </span>
                  At Rock Can Code, we believe that each person brings a unique perspective shaped by their background, 
                  challenges, and curiosity. When we share what we know — even if it's just a small breakthrough — we help others grow. 
                  And in doing so, we deepen our own understanding. This blog is a space to lift each other up, one insight, mistake, 
                  and discovery at a time. It’s not just about showing what we built — it’s about sharing the deeper knowledge we gained 
                  along the way.
                </p>
              </div>
            </Container>

            <div className="w-full h-px bg-zinc-800" />

            {    posts.map((post) => (
      <div
      key={post.slug}
      className="bg-zinc-800/40 hover:bg-zinc-800/60 transition-colors rounded-xl p-6 border border-zinc-700"
    >
      <Link href={`/blog/${post.slug}`} className="block space-y-2">
        <h2 className="text-2xl font-semibold text-white">{post.title || post.slug}</h2>
        {post.date && (
          <p className="text-sm text-zinc-400">
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
        {post.excerpt && (
          <p className="text-zinc-300 text-base">{post.excerpt}</p>
        )}
      </Link>
    </div>
    ))}
        
        </div>


  


);
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

