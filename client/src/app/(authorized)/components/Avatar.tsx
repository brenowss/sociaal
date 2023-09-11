import * as Avatar from '@radix-ui/react-avatar';
import clsx from 'clsx';

interface AvatarProps extends React.ComponentProps<typeof Avatar.Root> {
  imgURL: string;
  alt: string;
  fallback: string;
  fallbackSize?: string;
}

export default function AvatarComponent({
  imgURL,
  alt,
  fallback,
  fallbackSize = 'sm',
  ...rest
}: AvatarProps) {
  return (
    <Avatar.Root
      className={clsx(
        'inline-flex max-h-[45px] max-w-[45px] w-full h-full aspect-square select-none items-center justify-center overflow-hidden rounded-full align-middle col-span-2',
        {
          [rest.className as string]: rest.className,
        }
      )}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={imgURL}
        alt={alt}
      />
      <Avatar.Fallback
        className={`leading-1 flex h-full w-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 font-medium text-center text-${fallbackSize}`}
      >
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
