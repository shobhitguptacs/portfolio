"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Code2,
  ExternalLink,
  Flame,
  Mail,
  Star,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { leetcodeStats, pawcare, profile, skillGroups } from "@/lib/content";
import type { GitHubRepo } from "@/lib/github";
import type { ReactNode } from "react";

function ExternalIconLink({
  href,
  children,
  className = "social-link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

function ProjectCard({ repo }: { repo: GitHubRepo }) {
  const topics = repo.topics?.length ? repo.topics.slice(0, 3) : [];
  return (
    <article className="repo-card">
        <div>
          <div className="repo-card-top">
            <h3>{repo.name}</h3>
          <ExternalIconLink className="repo-language" href={repo.html_url}>
            <ExternalLink aria-hidden="true" size={13} /> Source
          </ExternalIconLink>
        </div>
        <p>
          {repo.description ||
            "A public repository from Shobhit’s GitHub profile."}
        </p>
      </div>
      <div className="repo-card-bottom">
        <span className="repo-language">{repo.language || "Code"}</span>
        {repo.stargazers_count !== null && (
          <span className="repo-stars">
            <Star aria-hidden="true" fill="currentColor" size={12} />{" "}
            {repo.stargazers_count}
          </span>
        )}
        {topics.length > 0 && (
          <span className="repo-language">{topics.join(" · ")}</span>
        )}
      </div>
    </article>
  );
}

export function PortfolioHome({ repos }: { repos: GitHubRepo[] }) {
  const featuredRepo =
    repos.find((repo) => repo.name.toLowerCase() === "pawcare") ?? null;
  const otherRepos = repos.filter(
    (repo) => repo.name.toLowerCase() !== "pawcare",
  );
  const pawcareDescription = featuredRepo?.description || pawcare.description;
  const stack = pawcare.stack;

  return (
    <>
      <Navigation />
      <main id="top">
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="availability">
                <span aria-hidden="true" className="availability-dot" />
                Open to internships · startup roles · collaboration
              </p>
              <h1 className="display-font" id="hero-title">
                <span className="hero-line">Full Stack</span>
                <span className="hero-line hero-line-accent">Developer.</span>
                <span className="hero-line">Startup Builder.</span>
                <span className="hero-line">Problem Solver.</span>
              </h1>
              <p className="hero-tagline">{profile.tagline}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  View projects <ArrowDownRight aria-hidden="true" size={16} />
                </a>
                <a
                  className="button-secondary"
                  download
                  href="/Shobhit-Gupta-CV.pdf"
                >
                  Download CV <ArrowDownRight aria-hidden="true" size={16} />
                </a>
                <a className="button-secondary" href="#contact">
                  Let’s collaborate <ArrowRight aria-hidden="true" size={15} />
                </a>
              </div>
              <nav aria-label="Profile links" className="hero-socials">
                <ExternalIconLink href={profile.github}>
                  <Code2 aria-hidden="true" size={15} /> GitHub
                </ExternalIconLink>
                <ExternalIconLink href={profile.leetcode}>
                  <Code2 aria-hidden="true" size={15} /> LeetCode
                </ExternalIconLink>
                <a className="social-link" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" size={15} /> Email
                </a>
              </nav>
            </div>

            <Reveal className="hero-aside" delay={0.15}>
              <article className="hero-card">
                <div className="card-kicker">
                  <span>Featured build</span>
                  <span className="card-index">01 / 01</span>
                </div>
                <h2 className="display-font">PawCare</h2>
                <p>{pawcare.subtitle}</p>
                <a className="hero-card-link" href="#pawcare">
                  Explore the case study{" "}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
                <div className="hero-card-tags">
                  {["React", "Express", "MongoDB", "Leaflet"].map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
              <p className="hero-index">Independent work · BMSCE CSE</p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="section section-rule wrap"
          id="about"
        >
          <div className="about-grid">
            <Reveal>
              <p className="eyebrow">01 — About</p>
              <h2 className="section-heading display-font" id="about-title">
                Curious by nature. Product-minded by choice.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-copy">{profile.about}</p>
              <div className="about-facts">
                <div className="fact">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">{profile.education}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Building</span>
                  <span className="fact-value">Full-stack products</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Looking for</span>
                  <span className="fact-value">
                    Internships & startup roles
                  </span>
                </div>
                <div className="fact">
                  <span className="fact-label">Current project</span>
                  <span className="fact-value">PawCare · end to end</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="skills-title"
          className="section section-rule wrap"
          id="skills"
        >
          <div className="skills-layout">
            <Reveal>
              <p className="eyebrow">02 — Toolkit</p>
              <h2 className="section-heading display-font" id="skills-title">
                Tools for ideas that need to ship.
              </h2>
              <p className="section-intro">
                A growing toolkit across interfaces, backend systems, and
                problem-solving.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="skills-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3 className="skill-group-title">{group.title}</h3>
                    <div className="skill-pills">
                      {group.items.map((item) => (
                        <span className="skill-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="projects-title"
          className="section section-rule wrap"
          id="projects"
        >
          <Reveal>
            <p className="eyebrow">03 — Selected work</p>
            <h2 className="section-heading display-font" id="projects-title">
              One idea, built end to end.
            </h2>
            <p className="section-intro">
              PawCare is my current and only project: a full-stack product that
              connects animal reports with people ready to help.
            </p>
          </Reveal>

          <div className="project-feature">
            <Reveal className="project-main">
              <div className="project-main-top">
                <span className="project-featured">
                  Featured · shipped project
                </span>
                {featuredRepo && featuredRepo.stargazers_count !== null && (
                  <span className="project-stars">
                    <Star aria-hidden="true" fill="currentColor" size={13} />{" "}
                    {featuredRepo.stargazers_count} stars
                  </span>
                )}
              </div>
              <div className="project-main-content">
                <h3 className="display-font">PawCare</h3>
                <p>{pawcareDescription}</p>
                <div className="project-actions">
                  <ExternalIconLink
                    className="button-primary"
                    href={pawcare.repo}
                  >
                    View on GitHub <ArrowUpRight aria-hidden="true" size={15} />
                  </ExternalIconLink>
                  <ExternalIconLink
                    className="button-secondary"
                    href={pawcare.live}
                  >
                    Live project <ExternalLink aria-hidden="true" size={14} />
                  </ExternalIconLink>
                </div>
              </div>
            </Reveal>
            <Reveal className="project-side" delay={0.1}>
              <div>
                <span className="project-side-label">
                  Built for a connected rescue flow
                </span>
                <p className="project-side-number display-font">04</p>
                <p className="project-side-copy">
                  Role-aware views for users, volunteers, shelters, and
                  administrators.
                </p>
              </div>
              <div className="project-side-footer">
                <span>Report → accept → resolve</span>
                <ArrowUpRight aria-hidden="true" size={14} />
              </div>
            </Reveal>
          </div>

          {otherRepos.length > 0 && (
            <>
              <p className="eyebrow">Other public repositories</p>
              <p className="section-intro">
                PawCare is the featured end-to-end project; these cards link to
                additional public GitHub repositories.
              </p>
              <div className="repo-list">
                {otherRepos.map((repo) => (
                  <ProjectCard key={repo.id || repo.full_name} repo={repo} />
                ))}
              </div>
            </>
          )}

          <div className="case-study" id="pawcare">
            <Reveal>
              <div className="case-header">
                <div>
                  <p className="eyebrow">Case study · PawCare</p>
                  <h3 className="display-font">
                    A clearer path from “I found an animal” to “help is on the
                    way.”
                  </h3>
                </div>
                <p>{pawcare.problem}</p>
              </div>
            </Reveal>

            <section
              aria-label="PawCare application screenshots"
              className="case-media"
            >
              {pawcare.screenshots.map((shot) => (
                <figure className="case-screenshot" key={shot.src}>
                  <Image
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 600px"
                    src={shot.src}
                  />
                  <figcaption className="case-screenshot-label">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </section>

            <div className="case-features">
              <Reveal className="case-block">
                <h4>Problem & approach</h4>
                <p>{pawcare.problem}</p>
              </Reveal>
              <Reveal className="case-block" delay={0.04}>
                <h4>What it does</h4>
                <ul>
                  {pawcare.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="case-block">
                <h4>Architecture & stack</h4>
                <p>
                  React and React Router client → Express REST API →
                  MongoDB/Mongoose. JWT and bcrypt handle authentication, Multer
                  receives animal photos, and Leaflet/OpenStreetMap provides
                  free map interactions.
                </p>
                <div className="case-stack">
                  {stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal className="case-block" delay={0.04}>
                <h4>My role</h4>
                <p>{pawcare.role}</p>
                <div className="case-stack">
                  <ExternalIconLink
                    className="button-secondary"
                    href={pawcare.repo}
                  >
                    Source code <Code2 aria-hidden="true" size={14} />
                  </ExternalIconLink>
                  <ExternalIconLink
                    className="button-secondary"
                    href={pawcare.live}
                  >
                    Live app <ExternalLink aria-hidden="true" size={14} />
                  </ExternalIconLink>
                </div>
              </Reveal>
            </div>

            <div className="video-frame">
              <video
                aria-label="Silent 33-second PawCare walkthrough with English captions"
                controls
                preload="metadata"
                poster={pawcare.demoPoster}
                src={pawcare.demoVideo}
              >
                <track
                  default
                  kind="captions"
                  label="English descriptions"
                  src="/media/pawcare/pawcare-demo.vtt"
                  srcLang="en"
                />
                Your browser does not support embedded video. View the PawCare
                case study screenshots above.
              </video>
              <div className="video-caption">
                <span>PawCare · silent 33-second walkthrough</span>
                <span>English captions · isolated demo data</span>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="leetcode-title"
          className="section section-rule wrap"
          id="leetcode"
        >
          <div className="leetcode-layout">
            <Reveal>
              <p className="eyebrow">04 — Problem solving</p>
              <h2 className="section-heading display-font" id="leetcode-title">
                A little progress, every problem at a time.
              </h2>
              <p className="section-intro">
                I use data structures and algorithms practice to build
                consistency and sharpen how I reason about code.
              </p>
              <div className="hero-actions">
                <ExternalIconLink
                  className="button-primary"
                  href={profile.leetcode}
                >
                  View LeetCode profile{" "}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </ExternalIconLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="leetcode-chart-wrap">
                <div
                  aria-label="Problem breakdown: 15 Easy, 13 Medium, 2 Hard"
                  className="leetcode-chart"
                  role="img"
                >
                  <div className="leetcode-chart-inner">
                    <strong className="display-font">
                      {leetcodeStats.total}
                    </strong>
                    <span>solved</span>
                  </div>
                </div>
                <div
                  className="leetcode-legend"
                >
                  <div className="legend-item">
                    <span className="legend-key">
                      <span className="legend-dot" /> Easy
                    </span>
                    <strong>{leetcodeStats.easy}</strong>
                  </div>
                  <div className="legend-item">
                    <span className="legend-key">
                      <span className="legend-dot legend-dot-medium" /> Medium
                    </span>
                    <strong>{leetcodeStats.medium}</strong>
                  </div>
                  <div className="legend-item">
                    <span className="legend-key">
                      <span className="legend-dot legend-dot-hard" /> Hard
                    </span>
                    <strong>{leetcodeStats.hard}</strong>
                  </div>
                </div>
              </div>
              <div className="leetcode-stats">
                <div className="leetcode-stat">
                  <strong>{leetcodeStats.activeDays}</strong>
                  <span>
                    <CalendarDays aria-hidden="true" size={12} /> Active days
                  </span>
                </div>
                <div className="leetcode-stat">
                  <strong>{leetcodeStats.maxStreak}</strong>
                  <span>
                    <Flame aria-hidden="true" size={12} /> Max streak · days
                  </span>
                </div>
              </div>
              <p className="snapshot-note">
                Public profile snapshot checked {leetcodeStats.checkedAt}.
                Counts can change; no contest rating was listed on the profile.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="section section-rule wrap"
          id="contact"
        >
          <Reveal className="collab-band">
            <div>
              <p className="eyebrow">05 — Let’s build</p>
              <h2 className="display-font" id="contact-title">
                Good ideas get better with good people.
              </h2>
              <p>{profile.collaboration}</p>
            </div>
            <div className="collab-side">
              <a
                className="button-primary"
                href={`mailto:${profile.email}?subject=Let%E2%80%99s%20collaborate`}
              >
                Let’s collaborate <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={15} /> {profile.email}
              </a>
              <ExternalIconLink href={profile.github} className="contact-link">
                <Code2 aria-hidden="true" size={15} /> GitHub profile
              </ExternalIconLink>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-rule">
        <div className="wrap footer-inner">
          <a className="brand" href="#top">
            <span aria-hidden="true" className="brand-mark">
              SG
            </span>
            <span>
              Built with curiosity<span className="brand-dot">.</span>
            </span>
          </a>
          <span>© {new Date().getFullYear()} Shobhit Gupta</span>
          <nav aria-label="Footer links" className="footer-social">
            <ExternalIconLink href={profile.github}>
              GitHub <ArrowUpRight aria-hidden="true" size={12} />
            </ExternalIconLink>
            <ExternalIconLink href={profile.leetcode}>
              LeetCode <ArrowUpRight aria-hidden="true" size={12} />
            </ExternalIconLink>
            <a className="social-link" href={`mailto:${profile.email}`}>
              Email <ArrowUpRight aria-hidden="true" size={12} />
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
