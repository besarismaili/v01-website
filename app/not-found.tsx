import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata = {
  title: "V01 — Page Not Found",
};

export default function NotFound() {
  return (
    <main data-v data-page="not-found">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "404" }]}
        title="Page not found."
        lede="This page doesn’t exist or has moved."
      >
        <div className="v-btns" style={{ paddingBlock: "12px 40px" }}>
          <Link className="v-btn v-btn--solid" href="/work">
            See the work <span className="v-arr" aria-hidden="true">&rarr;</span>
          </Link>
          <Link className="v-btn" href="/">
            Back home <span className="v-arr" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </PageHead>
    </main>
  );
}
