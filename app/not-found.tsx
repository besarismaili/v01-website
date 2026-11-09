import Link from "next/link";

export const metadata = {
  title: "V01 — Page Not Found",
};

export default function NotFound() {
  return (
    <main data-page="not-found">
      <section className="wrap page-head">
        <div className="breadcrumb">
          <Link href="/">V01</Link>
          <span>/</span>
          <span>404</span>
        </div>
        <h1>Page not<br />found.</h1>
        <p className="lede">This page doesn&rsquo;t exist or has moved.</p>
        <div className="ctas" style={{ marginTop: 32 }}>
          <Link className="btn primary" href="/work">
            <span>See the Work</span><span className="arr">&rarr;</span>
          </Link>
          <Link className="btn" href="/">
            <span>Back Home</span><span className="arr">&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
