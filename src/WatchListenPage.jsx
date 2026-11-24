import { useState } from 'react'
import noahImage from './assets/watch-noah-enhanced.png'
import zoetalesLogo from './assets/zoetales-emblem.png'
import './WatchListenPage.css'

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Bible Stories', href: '/#stories' },
  { label: 'Watch & Listen', href: '/watch-listen.html', current: true },
  { label: 'Explore & Learn', href: '/#values' },
  { label: 'About Us', href: '/about-us.html' },
  { label: 'Contact', href: '/#contact' },
]

const audioStories = [
  {
    title: 'Sing, smile & praise',
    detail: 'Joyful songs for little voices',
  },
  {
    title: 'A story before sleep',
    detail: 'Gentle Bible stories for winding down',
  },
  {
    title: 'On the way together',
    detail: 'Faith-filled listening for family journeys',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    </svg>
  )
}

function Brand() {
  return (
    <a className="watch-brand" href="/#home" aria-label="Zoetales home">
      <img className="watch-brand__logo" src={zoetalesLogo} alt="" />
      <span className="watch-brand__copy">
        <span className="watch-brand__name">ZOETALES</span>
        <span className="watch-brand__tagline">Little Stories. Eternal Truths. A Lifetime of Faith.</span>
      </span>
    </a>
  )
}

export default function WatchListenPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="watch-page">
      <header className="watch-header">
        <div className="watch-header__inner">
          <Brand />
          <button
            className="watch-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="watch-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`watch-nav${menuOpen ? ' is-open' : ''}`}
            id="watch-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                aria-current={item.current ? 'page' : undefined}
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="watch-button watch-button--gold watch-header__cta" href="/#stories">
            Explore Stories <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="watch-intro" aria-labelledby="watch-title">
          <div className="watch-content">
            <p className="watch-eyebrow watch-eyebrow--gold">PRESS PLAY. LET FAITH GROW.</p>
            <h1 id="watch-title">A little screen time.<br />A whole lot of meaning.</h1>
            <p>
              Animated adventures, joyful songs and quiet listening moments.
              <br className="watch-intro__desktop-break" /> A world of wonder for little hearts and the grown-ups beside them.
            </p>
          </div>
        </section>

        <section className="watch-spotlight" aria-labelledby="spotlight-title">
          <div className="watch-content watch-spotlight__inner">
            <div className="watch-spotlight__visual">
              <img
                src={noahImage}
                alt="Noah welcomes animals aboard the ark as a rainbow shines over the water"
              />
              <a href="/#stories">
                <span aria-hidden="true">▶</span> Watch the story
              </a>
              <span className="watch-spotlight__duration">8 MIN&nbsp; · &nbsp;AGES 3+</span>
            </div>
            <div className="watch-spotlight__copy">
              <p className="watch-eyebrow">IN THE SPOTLIGHT</p>
              <h2 id="spotlight-title">One big boat.<br /><span>An even bigger trust.</span></h2>
              <p>
                Join Noah on an extraordinary adventure, and discover how
                trusting God can lead to wonderful things.
              </p>
              <a className="watch-button watch-button--gold" href="/#stories">
                Watch Noah&apos;s story <span aria-hidden="true">▶</span>
              </a>
              <span className="watch-spotlight__reference">Based on Genesis 6–9</span>
            </div>
          </div>
        </section>

        <section className="watch-audio" id="audio-stories" aria-labelledby="audio-title">
          <div className="watch-content">
            <p className="watch-eyebrow">LITTLE VOICES. JOYFUL PRAISES.</p>
            <div className="watch-audio__heading">
              <h2 id="audio-title">Something for every moment.</h2>
              <span>Songs &amp; audio stories</span>
            </div>
            <div className="watch-audio__layout">
              <div className="watch-audio__intro">
                <h3>From morning joy<br />to bedtime peace.</h3>
                <p>
                  Make space for God&apos;s Word in the little rhythms of your
                  day. Pick a mood and listen together.
                </p>
                <a className="watch-button watch-button--gold" href="#audio-list">
                  Explore audio stories <ArrowIcon />
                </a>
              </div>
              <div className="watch-audio__list" id="audio-list">
                {audioStories.map((story, index) => (
                  <article className="watch-audio-card" key={story.title}>
                    <span className="watch-audio-card__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="watch-audio-card__copy">
                      <h3>{story.title}</h3>
                      <p>{story.detail}</p>
                    </div>
                    <span className="watch-audio-card__play" aria-hidden="true">▶</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="watch-together">
          <div className="watch-content">
            <p className="watch-eyebrow">TURN A WATCH INTO A WONDER</p>
            <h2>The best part happens together.</h2>
            <p>
              “What would you have done?” One little question after a story
              can open a beautiful conversation.
            </p>
            <a className="watch-button watch-button--gold" href="/#values">
              Find activities to go with a story <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="watch-footer">
        <div className="watch-content">
          <div className="watch-footer__main">
            <div className="watch-footer__brand">
              <Brand />
            </div>
            <div className="watch-footer__column">
              <h2>Discover</h2>
              <a href="/#stories">Bible Stories</a>
              <a href="/watch-listen.html">Watch &amp; Listen</a>
              <a href="/#values">Explore &amp; Learn</a>
            </div>
            <div className="watch-footer__column">
              <h2>ZOETALES</h2>
              <a href="/about-us.html">About Us</a>
              <a href="/#contact">Contact</a>
              <a href="/#contact">For parents &amp; teachers</a>
            </div>
            <div className="watch-footer__column">
              <h2>Stay connected</h2>
              <a href="/#contact">YouTube ↗</a>
              <a href="/#contact">Instagram ↗</a>
              <a href="/#contact">Facebook ↗</a>
            </div>
          </div>
          <div className="watch-footer__bottom">
            <span>© 2026 ZOETALES. All rights reserved.</span>
            <span><a href="/#contact">Privacy policy</a><a href="/#contact">Terms of use</a></span>
          </div>
        </div>
      </footer>
    </div>
  )
}
