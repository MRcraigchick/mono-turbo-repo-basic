import Link from 'next/link';

export default function US_Button({ href = false, children, ...props }) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      ) : (
        <button {...props}>{children}</button>
      )}
    </>
  );
}
