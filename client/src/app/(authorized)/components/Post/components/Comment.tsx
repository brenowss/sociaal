import AvatarComponent from '../../Avatar';
import { Comment } from '../types';

export default function Comment({ comment }: { comment: Comment }) {
  return (
    // <div className="flex items-center gap-2 mb-2">
    //   <div className="flex items-center gap-2">
    //     <AvatarComponent
    //       imgURL={userImage}
    //       alt={userName}
    //       fallback={userName[0]}
    //     />
    //     <div className="flex flex-col">
    //       <p className="text-gray-900 font-medium text-sm">{userName}</p>
    //       <p className="text-gray-600 text-xs">{commentDate}</p>
    //     </div>
    //   </div>
    //   <p className="text-gray-900 text-sm">{comment}</p>
    // </div>
    <p className="text-gray-900 text-sm">{comment}</p>
  );
}
