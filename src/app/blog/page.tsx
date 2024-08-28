import { Metadata } from "next";
import LayoutAnimation from "@/components/layout-animation"

import { posts } from "#blog/content";
import BlogWrapper from "./blog-wrapper";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a blog by theosb",
};

const Blogs = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
        <section className="w-3/4 m-auto">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-xl md:text-2xl text-blue-600">Read my blog📄</h1>
          </div>
          <div className="w-1/2 m-auto flex flex-col space-y-4 mt-2">
            <BlogDetail />      
          </div>
        </section>
      </LayoutAnimation>
    </div>
  )
}

export default Blogs

const BlogDetail = () => {
  return (
    <>
      {posts.map((post,i) => (
        <BlogWrapper key={i} post={post} />
      ))}
    </>
  )
}