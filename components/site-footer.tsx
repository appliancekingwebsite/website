import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { services } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src={business.logoPath} alt="" width={88} height={88} />
          <div>
            <strong>Appliance King</strong>
            <p>Buy · Sell · Fix</p>
            <p>Macon, Georgia · delivery &amp; pickup within about 40 miles</p>
          </div>
        </div>
        <div>
          <p className="footer-heading">Start here</p>
          <Link href="/used-appliances">Used appliances</Link>
          <Link href="/used-appliances/washers">Used washers</Link>
          <Link href="/used-appliances/dryers">Used dryers</Link>
          <Link href="/used-appliances/ovens-ranges">Used ovens &amp; ranges</Link>
          <Link href="/used-appliances/refrigerators">Used refrigerators</Link>
          <Link href="/delivery-pickup">Delivery &amp; pickup</Link>
          <Link href="/services">Services</Link>
          <Link href="/residential-services">Residential</Link>
          <Link href="/commercial-services">Commercial</Link>
          <Link href="/book">Book a call</Link>
        </div>
        <div>
          <p className="footer-heading">Popular work</p>
          {services.slice(0, 5).map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              {service.navLabel}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer-heading">Business</p>
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <Link href="/service-areas">Service areas</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Appliance King. Insured home and commercial service.</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
