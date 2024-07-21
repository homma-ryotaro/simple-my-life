import { getDevPostsData } from "@/app/server-utils";
import BlogContent from "@/components/blog-content";
import PageContainer from "@/components/page-container";
import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("blog");

const Blog = () => {
  return (
    <PageContainer>
      <BlogContent posts={getDevPostsData()} />
    </PageContainer>
  );
};

export default Blog;
