import Head from "next/head"

export default function PageLayout({
  headChildren = null,
  mainContainerClass = "",
  navbar = true,
  footer = true,
  children,
}) {
  return (
    <>
      <Head>
        <title>{/* Title here */}</title>
        {headChildren ? headChildren : <></>}
      </Head>

      {navbar ? <>{/* Navbar component */}</> : <></>}

      <main className={`${mainContainerClass}`}>{children}</main>
      {footer ? <>{/* Footer component */}</> : <></>}
    </>
  )
}
