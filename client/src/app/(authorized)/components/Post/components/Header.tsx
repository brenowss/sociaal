import { DotsThreeVertical } from '@phosphor-icons/react';
import Image from 'next/image';
import AvatarComponent from '../../Avatar';

interface HeaderProps {
  userName: string;
  userImage: string;
  postDate: string;
}

export default function Header({ postDate, userImage, userName }: HeaderProps) {
  const formattedDate = new Date(postDate).toLocaleDateString('pt-BR');
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AvatarComponent
          imgURL={userImage}
          alt={userName}
          fallback={userName[0]}
        />
        <div className="mb-1">
          <p className="text-gray-900 font-medium text-lg">{userName}</p>
          <p className="text-gray-600 text-sm">{formattedDate}</p>
        </div>
      </div>
      <button className="text-gray-600 hover:text-gray-900">
        <DotsThreeVertical size={20} />
      </button>
    </div>
  );
}
