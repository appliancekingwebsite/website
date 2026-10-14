"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "@/lib/business";
import { services } from "@/lib/content";

const serviceGroups = [
  {
    label: "Appliance repair",
    slugs: [
      "appliance-repair",
      "washer-repair",
      "dryer-repair",
      "refrigerator-freezer-repair",
      "dishwasher-repair",
      "range-oven-stove-repair",
    ],
  },
  {
    label: "Installation & airflow",
    slugs: ["appliance-installation", "washer-dryer-installation", "dryer-vent-cleaning-repair"],
  },
  {
    label: "Property support",
    slugs: [
      "handyman-services",
      "minor-electrical-repairs",
      "landscaping-property-maintenance",
      "commercial-property-maintenance",
    ],
  },
];

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/used-appliances", label: "Shop Used" },
  { href: "/delivery-pickup", label: "Delivery & Pickup" },
  { href: "/residential-services", label: "Residential" },
  { href: "/commercial-services", label: "Commercial" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Appliance King home">
      <Image
        src={business.logoPath}
        alt=""
        width={58}
        height={58}
        className="brand__mark"
        priority
      />
      <span>
        <strong>Appliance King</strong>
        <small>Macon, Georgia</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-inner">
        <Brand />
        <NavigationMenu.Root className="desktop-nav" aria-label="Primary navigation">
          <NavigationMenu.List className="desktop-nav__list">
            <NavigationMenu.Item>
              <Link className={pathname === "/" ? "nav-link is-active" : "nav-link"} href="/">
                Home
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="nav-trigger">
                Services <ChevronDown aria-hidden="true" size={15} />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="service-menu">
                <div className="service-menu__intro">
                  <span className="status-dot" aria-hidden="true" />
                  <p>Repair, install, maintain.</p>
                  <Link href="/services">View every service</Link>
                </div>
                {serviceGroups.map((group) => (
                  <div key={group.label} className="service-menu__group">
                    <p>{group.label}</p>
                    {group.slugs.map((slug) => {
                      const service = services.find((item) => item.slug === slug)!;
                      return (
                        <Link key={slug} href={`/services/${slug}`}>
                          {service.navLabel}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="nav-trigger">
                Buy &amp; Sell <ChevronDown aria-hidden="true" size={15} />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="buy-sell-menu">
                <Link href="/used-appliances">
                  <strong>Used Appliances</strong>
                  <span>Washers, dryers, ovens, refrigerators.</span>
                </Link>
                <Link href="/sell-your-appliance">
                  <strong>Sell Your Appliance</strong>
                  <span>Share the model, condition, and access.</span>
                </Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {primaryLinks.slice(1).map((item) => (
              <NavigationMenu.Item key={item.href}>
                <Link
                  className={pathname.startsWith(item.href) ? "nav-link is-active" : "nav-link"}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <NavigationMenu.Viewport className="nav-viewport" />
        </NavigationMenu.Root>
        <div className="header-actions">
          <a className="header-phone" href={business.phoneHref}>
            <Phone aria-hidden="true" size={17} /> <span>{business.phoneDisplay}</span>
          </a>
          <Link className="button button--primary button--compact" href="/book" data-book>
            Book a call
          </Link>
        </div>
        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger className="mobile-menu-trigger" aria-label="Open navigation">
            <Menu aria-hidden="true" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content className="mobile-menu" aria-describedby={undefined}>
              <div className="mobile-menu__head">
                <Dialog.Title>Menu</Dialog.Title>
                <Dialog.Close aria-label="Close navigation">
                  <X aria-hidden="true" />
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile navigation">
                {primaryLinks.map((item) => (
                  <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                ))}
                <p>Services</p>
                <Link href="/services" onClick={() => setMenuOpen(false)}>All services</Link>
                {services.map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug} onClick={() => setMenuOpen(false)}>{service.navLabel}</Link>
                ))}
                <p>Buy &amp; sell</p>
                <Link href="/used-appliances" onClick={() => setMenuOpen(false)}>Used appliances</Link>
                <Link href="/sell-your-appliance" onClick={() => setMenuOpen(false)}>Sell your appliance</Link>
              </nav>
              <div className="mobile-menu__actions">
                <a className="button button--outline" href={business.phoneHref}>
                  Call {business.phoneDisplay}
                </a>
                <Link className="button button--primary" href="/book" onClick={() => setMenuOpen(false)}>
                  Book an estimate
                </Link>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
