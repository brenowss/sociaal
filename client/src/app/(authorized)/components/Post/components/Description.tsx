import { useState } from 'react';

interface DescriptionProps {
  postText: string;
}

import clsx from 'clsx';

export default function Description({ postText }: DescriptionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col mb-1">
      <p
        className={clsx('text-gray-900', 'text-lg', 'overflow-ellipsis', {
          'max-h-max': isExpanded,
          'line-clamp-3': !isExpanded,
        })}
      >
        {postText}
      </p>
      {postText.length > 280 && (
        <button
          className="text-gray-600 hover:text-gray-900 max-w-max"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      )}
    </div>
  );
}
