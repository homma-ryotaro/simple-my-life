import { getPostsData } from "@/app/server-utils";
import SideNav from "@/components/side-nav";
import Time from "@/components/time";
import Toc from "@/components/toc";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import shiki from "rehype-shiki";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkFlexibleToc from "remark-flexible-toc";
import remarkGfm from "remark-gfm";
import remarkNormalizeHeadings from "remark-normalize-headings";

const getPost = async (slug: string) => {
  const post: any = getPostsData().find((post) => post.id === slug);
  // 获取目录数据
  const file = await remark()
    .use(remarkNormalizeHeadings)
    .use(remarkFlexibleToc)
    .process(post.content);
  return {
    ...post,
    toc: file.data.toc,
    stats: readingTime(post.content),
  };
};

export async function generateStaticParams() {
  return getPostsData().map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: any) {
  const post: any = await getPost(params.slug);
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function Post({ params }: any) {
  const { slug } = params;
  const post: any = await getPost(slug);
  if (!post || post?.draft) notFound();

  return (
    <div className={"w-full flex justify-center"}>
      <div className={"w-full max-w-screen-lg  relative"}>
        {/*mobile*/}
        <div
          className={
            "block lg:hidden sticky top-20 p-2 bg-white/80 backdrop-blur-md z-10 w-full shadow-sm"
          }
        >
          <div className={"flex justify-between"}>
            <div className={"space-x-4"}>
              <SideNav />
            </div>
          </div>
        </div>

        {/*pc*/}
        <div className={"px-4 pt-8"}>
          <div className={"sticky top-28 hidden lg:block"}>
            <div
              className={
                "absolute top-24 -left-16 -translate-x-full flex flex-col space-y-4"
              }
            >
              <SideNav />
            </div>
            <div className={"absolute -right-8 translate-x-full"}>
              <div className={"w-full h-full max-h-[80vh] overflow-auto"}>
                <div className={"text-base font-bold mb-2"}>
                  Table of contents
                </div>
                <Toc toc={post.toc} />
              </div>
            </div>
          </div>
          <article>
            <div className={"mb-3 text-base text-zinc-400"}>
              <Time date={post.date} /> · {post.stats.words} words ·{" "}
              {post.stats.text}
            </div>
            <Suspense fallback={<>Loading...</>}>
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkNormalizeHeadings, remarkGfm],
                    rehypePlugins: [
                      shiki,
                      rehypeSlug,
                      rehypeStringify,
                      rehypeAutolinkHeadings,
                    ],
                    remarkRehypeOptions: {
                      allowDangerousHtml: true,
                    },
                  },
                }}
              />
            </Suspense>
          </article>
        </div>
      </div>
    </div>
  );
}
