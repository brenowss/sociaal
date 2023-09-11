import { ChatDots, Heart } from '@phosphor-icons/react';
import clsx from 'clsx';

interface LikesAndCommentsProps {
  isLiked: boolean;
  handleLike: () => void;
}

export default function LikesAndComments({
  isLiked,
  handleLike,
}: LikesAndCommentsProps) {
  return (
    <div className="flex gap-2 py-2">
      <button
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={handleLike}
      >
        <Heart
          size={20}
          weight={isLiked ? 'fill' : 'regular'}
          className={clsx('text-gray-600', 'transition-colors', {
            'text-red-600': isLiked,
          })}
        />
        <p
          className={clsx('text-sm', {
            'text-red-600': isLiked,
          })}
        >
          Curtir
        </p>
      </button>
      <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
        <ChatDots size={20} />
        <p className="text-sm">Comentar</p>
      </button>
    </div>
  );
}
