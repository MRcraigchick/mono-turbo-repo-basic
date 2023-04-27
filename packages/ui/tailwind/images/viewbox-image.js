import Image from 'next/image';

export default function ViewboxImage({ viewboxProps, imageProps }) {
  return (
    <div
      {...viewboxProps}
      className={`${viewboxProps?.className && viewboxProps.className}`}>
      <Image
        {...imageProps}
        width='2000'
        height='2000'
      />
    </div>
  );
}
