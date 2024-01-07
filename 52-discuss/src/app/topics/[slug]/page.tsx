"use client";

import PostCreateForm from "@/components/posts/post-create-form";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1>{slug}</h1>
      </div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
}
