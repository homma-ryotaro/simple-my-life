import { getPostsData } from "@/app/server-utils";
import BlogContent from "@/components/blog-content";
import PageContainer from "@/components/page-container";
import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = getMetadata("blog");

const Blog = () => {
  return (
    <PageContainer>
      <Suspense>
        <BlogContent posts={getPostsData()} />
      </Suspense>
    </PageContainer>
  );
};

export default Blog;
