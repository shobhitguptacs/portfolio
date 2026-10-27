// Shared theme prepared from the planner-selected report entry and adapted for an ATS résumé.
// The theme owns A4 geometry, readable typography, paragraph rhythm, and standard headings.

#let report-accent = rgb("#171717")

#let report-rhythms = (
  report: (
    paragraph-gap: 0.32,
    leading: 1.10,
    first-line-indent: none,
    levels: (
      h1: (size: 1.22, before: 0.82, after: 0.30, weight: 700),
      h2: (size: 1.12, before: 0.58, after: 0.22, weight: 700),
      h3: (size: 1.04, before: 0.42, after: 0.18, weight: 650),
      h4: (size: 1.00, before: 0.30, after: 0.12, weight: 650),
    ),
  ),
  longform: (
    paragraph-gap: 0.65,
    leading: 0.82,
    first-line-indent: none,
    levels: (
      h1: (size: 1.55, before: 2.15, after: 0.88, weight: 700),
      h2: (size: 1.30, before: 1.48, after: 0.68, weight: 700),
      h3: (size: 1.13, before: 1.10, after: 0.58, weight: 650),
      h4: (size: 1.00, before: 0.88, after: 0.52, weight: 650),
    ),
  ),
)

#let report-theme(
  title: none,
  author: none,
  rhythm: "report",
  body-size: 11pt,
  first-line-indent: none,
  paragraph-spacing: none,
  running-header: false,
  body,
) = {
  if title != none or author != none {
    set document(title: title, author: author)
  }

  let p = report-rhythms.at(rhythm)
  let paragraph-gap = if paragraph-spacing == none {
    p.paragraph-gap * body-size
  } else {
    paragraph-spacing
  }
  let indent = if first-line-indent == none {
    p.first-line-indent
  } else {
    first-line-indent
  }
  let h1 = p.levels.h1
  let h2 = p.levels.h2
  let h3 = p.levels.h3
  let h4 = p.levels.h4

  set page(
    paper: "a4",
    margin: (top: 1.25cm, bottom: 1.25cm, x: 1.55cm),
    numbering: none,
    header: if running-header {
      context {
        if counter(page).get().first() > 0 {
          set text(size: 9pt, fill: luma(100))
          grid(
            columns: (1fr, 1fr),
            align(left)[#title],
            align(right)[#author],
          )
          v(-0.6em)
          line(length: 100%, stroke: 0.4pt + luma(180))
        }
      }
    } else {
      none
    },
  )

  set text(
    font: ("Liberation Sans", "DejaVu Sans"),
    fill: rgb("#171717"),
    size: body-size,
    lang: "en",
    region: "us",
  )

  set par(
    justify: false,
    leading: p.leading * body-size,
    spacing: paragraph-gap,
    first-line-indent: if indent == none {
      0pt
    } else {
      (amount: indent, all: false)
    },
  )

  set heading(numbering: none)
  show heading: set text(
    font: ("Liberation Sans", "DejaVu Sans"),
    fill: report-accent,
  )

  show heading.where(level: 1): set text(size: h1.size * body-size, weight: h1.weight)
  show heading.where(level: 1): set block(
    above: h1.before * body-size,
    below: h1.after * body-size,
    sticky: true,
    breakable: false,
  )

  show heading.where(level: 2): set text(size: h2.size * body-size, weight: h2.weight)
  show heading.where(level: 2): set block(
    above: h2.before * body-size,
    below: h2.after * body-size,
    sticky: true,
    breakable: false,
  )

  show heading.where(level: 3): set text(size: h3.size * body-size, weight: h3.weight)
  show heading.where(level: 3): set block(
    above: h3.before * body-size,
    below: h3.after * body-size,
    sticky: true,
    breakable: false,
  )

  show heading.where(level: 4): set text(size: h4.size * body-size, weight: h4.weight)
  show heading.where(level: 4): set block(
    above: h4.before * body-size,
    below: h4.after * body-size,
    sticky: true,
    breakable: false,
  )

  show raw.where(block: true): it => block(
    fill: luma(246),
    inset: 10pt,
    radius: 4pt,
    width: 100%,
    text(size: 9pt, it),
  )
  show link: set text(fill: report-accent)
  show figure: set block(breakable: true)

  body
}
