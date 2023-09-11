import Image from 'next/image';
import Header from './components/Header';
import Description from './components/Description';
import LikesAndComments from './components/LikesAndComments';
import { useState } from 'react';
import CommentsSection from './components/CommentsSection';

interface PostProps {
  userName: string;
  userImage: string;
  postImage?: string;
  postText: string;
  postDate: string;
  comments: string[];
}

export default function Post({
  postDate,
  postImage,
  postText,
  userName,
  userImage,
  comments
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked((prevState) => !prevState);
  }

  return (
    <div className="flex-col max-w-lg">
      <Header postDate={postDate} userImage={userImage} userName={userName} />

      <div className="flex flex-col">
        <Description postText={postText} />
        {postImage && (
          <div className="flex justify-center max-w-md max-h-[448px] rounded-xl overflow-hidden">
            <Image
              src={postImage}
              alt={postText}
              width={500}
              height={500}
              style={{ objectFit: 'none' }}
            />
          </div>
        )}
      </div>

      <LikesAndComments isLiked={isLiked} handleLike={handleLike} />

      <CommentsSection comments={comments} />
    </div>
  );
}
