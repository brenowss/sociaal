import Image from 'next/image';

export default function Banner() {
  return (
    <div className="h-screen flex-1 overflow-hidden rounded-s-3xl max-lg:hidden">
      <Image
        src="/lighthouse.jpg"
        alt="Lighthouse"
        quality={100}
        sizes="100%"
        width={1920}
        height={1080}
        style={{
          position: 'static',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
