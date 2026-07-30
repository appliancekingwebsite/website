import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found content-shell">
      <p className="eyebrow">404 / Not found</p>
      <h1>This page slipped off the service board.</h1>
      <p>Return home, browse the complete service list, or book an estimate.</p>
      <div className="hero-actions">
        <Link className="button button--primary" href="/">Go home</Link>
        <Link className="button button--outline" href="/services">View services</Link>
      </div>
    </main>
  );
}
