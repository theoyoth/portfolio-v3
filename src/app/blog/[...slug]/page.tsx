import { Metadata } from "next";
import { notFound } from "next/navigation";

import { posts } from "#blog/content";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import LayoutAnimation from "@/components/layout-animation";
import { MDXContent } from "@/components/mdx-component";
import "@/styles/mdx.css";
import { Badge } from "@/components/ui/badge";

type postPageProps = {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({
  params,
}: postPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  postPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

async function getPostFromParams(params: postPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export default async function BlogPage ({params}:postPageProps) {
  const post = await getPostFromParams(params);

  if(!post || !post?.published){
    return notFound();
  }

  return (
    <article className="prose-zinc md:prose-lg min-h-screen py-14">
      <LayoutAnimation>
        <section className="w-full md:w-2/3 px-1 md:px-0 m-auto">
          <p className="text-[10px] md:text-xs font-bold text-center">{formatDate(post?.date)}</p>
          <h1 className="text-xs md:text-4xl font-bold text-center">{post?.title}</h1>
          <div className="flex items-center justify-center space-x-2">
            {
              post?.tags!.map((tag,idx) => (
                <Badge key={idx} className="bg-yellow-400">{tag}</Badge>
              ))
            }
          </div>
          <hr />
          <MDXContent code={post?.body} />
        </section>
      </LayoutAnimation>
    </article>
  )
}