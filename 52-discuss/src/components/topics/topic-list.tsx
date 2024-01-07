/* NOT client component */
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

export default async function TopicList() {
  const topicArr = await db.topic.findMany();

  const renderedTopicArr = topicArr.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap gap-2">{renderedTopicArr}</div>
  );
}
