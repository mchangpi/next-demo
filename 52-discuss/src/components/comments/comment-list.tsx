import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostId } from "@/db/queries/comments";

/* // option 1
interface CommentListProps {
  fetchData: () => Promise<CommentWithAuthor[]>;
} */

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow key={comment.id} postId={postId} commentId={comment.id} />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
