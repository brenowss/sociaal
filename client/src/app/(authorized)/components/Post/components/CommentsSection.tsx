import { Comment as IComment } from '../types';
import Comment from './Comment';

interface CommentsSectionProps {
  comments: IComment[];
}

export default function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <div className="flex-col">
      <h2 className="text-gray-900 font-medium text-lg mb-2">Comentários</h2>
      {comments.map((comment) => (
        <Comment key={comment} comment={comment} />
      ))}
    </div>
  );
}
