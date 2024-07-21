import { getDevPostsData } from "@/app/server-utils";
import BlogContent from "@/components/blog-content";
import PageContainer from "@/components/page-container";
import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = getMetadata("dev");

const Dev = () => {
  return (
    <PageContainer>
      <Suspense>
        <BlogContent posts={getDevPostsData()} />
      </Suspense>
    </PageContainer>
  );
};

export default Dev;
