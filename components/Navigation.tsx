"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "LeetCode", href: "#leetcode" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="site-nav wrap">
        <a
          aria-label="Shobhit Gupta home"
          className="brand"
          href="#top"
        >
          <span aria-hidden="true" className="brand-mark">
            SG
          </span>
          <span className="brand-name">
            Shobhit Gupta<span className="brand-dot">.</span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className={open ? "nav-links nav-links-open" : "nav-links"}
        >
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                aria-current={active === id ? "location" : undefined}
                className={
                  active === id ? "nav-link nav-link-active" : "nav-link"
                }
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="nav-cta"
            href="mailto:shobhitguptacs25@bmsce.ac.in?subject=Let%E2%80%99s%20collaborate"
          >
            Let’s talk <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="icon-button menu-button"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
