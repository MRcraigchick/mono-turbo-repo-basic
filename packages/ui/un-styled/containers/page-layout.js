import Head from 'next/head';

export default function PageLayout({
  headChildren = null,
  mainContainerClass = '',
  title = '',
  navbar = false,
  footer = false,
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {headChildren ? headChildren : <></>}
      </Head>

      {navbar ? <>{/* Navbar component */}</> : <></>}

      <main className={`${mainContainerClass}`}>{children}</main>
      {footer ? <>{/* Footer component */}</> : <></>}
    </>
  );
}
