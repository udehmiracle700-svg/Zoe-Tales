import { useState } from 'react'
import aboutImage from './assets/about-book-clean.png'
import familyImage from './assets/family-photo.png'
import zoetalesLogo from './assets/zoetales-emblem.png'
import './AboutPage.css'

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Bible Stories', href: '/bible-stories/#stories' },
  { label: 'Watch & Listen', href: '/watch-listen.html' },
  { label: 'Explore & Learn', href: '/activities/#explore' },
  { label: 'About Us', href: '/about-us.html', current: true },
  { label: 'Contact', href: '/contact/' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    </svg>
  )

}

function Brand({ footer = false }) {
  return (
    <a className={`about-brand${footer ? ' about-brand--footer' : ''}`} href="/#home" aria-label="Zoetales home">
      <img className="about-brand__logo" src={zoetalesLogo} alt="" />
      <span className="about-brand__copy">
        <span className="about-brand__name">ZOETALES</span>
        <span className="about-brand__tagline">
          {footer ? "Bringing God's Word to Life." : "BRINGING GOD'S WORD TO LIFE"}
        </span>
      </span>
    </a>
  )
}

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-header__inner">
          <Brand />
          <button
            className="about-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="about-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`about-nav${menuOpen ? ' is-open' : ''}`}
            id="about-navigation"
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
          <a className="about-button about-button--gold about-header__cta" href="/bible-stories/#stories">
            Explore Stories <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="about-intro">
          <div className="about-content">
            <p className="about-eyebrow about-eyebrow--gold">OUR HEART. OUR PURPOSE.</p>
            <h1>Little stories. Eternal truths.<br />A lifetime of faith.</h1>
            <p>
              We believe the stories children grow up with shape the people they become.
              <br />So we're filling little hearts with the greatest story of all: God's love.
            </p>
          </div>
        </section>

        <section className="about-wonder">
          <div className="about-content about-wonder__inner">
            <div className="about-wonder__image">
              <img src={aboutImage} alt="An open storybook with a magical forest and the title Stories of Old" />
            </div>
            <div className="about-wonder__copy">
              <p className="about-eyebrow">BRINGING GOD'S WORD TO LIFE</p>
              <h2>A world of wonder.<br />Rooted in the Word.</h2>
              <p>
                ZOETALES brings Bible stories to life through imaginative storytelling,
                joyful songs and hands-on discoveries, made for children and the
                people who guide them.
              </p>
              <p>
                Our hope is simple: to help little ones know they are loved by God,
                find courage in His Word and carry His truth into everyday life.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="about-content">
            <p className="about-eyebrow">WHAT MATTERS TO US</p>
            <h2>Made with wonder. Guided by faith.</h2>
            <div className="about-values__grid">
              <article>
                <span>01</span>
                <h3>Rooted in Scripture</h3>
                <p>The Bible is the beginning of every adventure. Its eternal truths are at the heart of the stories we tell.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Made for little hearts</h3>
                <p>Gentle storytelling, curious questions and joyful discovery make room for the wonder of childhood.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Better together</h3>
                <p>Faith grows in relationship. We create moments for children, families and teachers to share.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-moments">
          <div className="about-content about-moments__inner">
            <div className="about-moments__copy">
              <p className="about-eyebrow">A LITTLE HELP FOR A BIG JOURNEY</p>
              <h2>For the small moments<br />that matter most.</h2>
              <p>
                A bedtime story. A song in the car. A Sunday school filled with
                questions. We're here to help make those ordinary moments meaningful.
              </p>
              <p>
                Thoughtfully made for ages 3–12, with plenty of ways for
                grown-ups to join the adventure.
              </p>
              <a className="about-button about-button--gold" href="/activities/#explore">
                Explore &amp; Learn <ArrowIcon />
              </a>
            </div>
            <div className="about-moments__image">
              <img src={familyImage} alt="A family reading together beneath a leafy tree" />
            </div>
          </div>
        </section>

        <section className="about-together">
          <div className="about-content about-together__inner">
            <div>
              <h2>Come grow with us.</h2>
              <p>There's a little wonder waiting for every heart.</p>
            </div>
            <a className="about-button about-button--gold" href="/bible-stories/#stories">
              Discover Bible stories <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-content">
          <div className="about-footer__main">
            <div className="about-footer__brand">
              <Brand footer />
              <small>Little stories for the bigger journey of it.</small>
            </div>
            <div className="about-footer__column">
              <h2>Discover</h2>
              <a href="/bible-stories/#stories">Bible Stories</a>
              <a href="/watch-listen.html">Watch &amp; Listen</a>
              <a href="/activities/#explore">Explore &amp; Learn</a>
            </div>
            <div className="about-footer__column">
              <h2>ZOETALES</h2>
              <a href="/about-us.html">About Us</a>
              <a href="/contact/">Contact</a>
              <a href="/activities/#explore">For parents &amp; teachers</a>
            </div>
            <div className="about-footer__column">
              <h2>Stay connected</h2>
              <a href="/contact/">YouTube ↗</a>
              <a href="/contact/">Instagram ↗</a>
              <a href="/contact/">Facebook ↗</a>
            </div>
          </div>
          <div className="about-footer__bottom">
            <span>© 2026 ZOETALES. All rights reserved.</span>
            <span><a href="/contact/">Privacy policy</a><a href="/contact/">Terms of use</a></span>
          </div>
        </div>
      </footer>
    </div>
  )
}
