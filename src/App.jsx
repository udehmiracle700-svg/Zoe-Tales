import { useState } from 'react'
import heroImage from './assets/hero-art.png'
import homeNoahImage from './assets/home-noah.png'
import homeDavidImage from './assets/home-david.png'
import homeCreationImage from './assets/home-creation.png'
import homeAnimatedStoryBadge from './assets/home-animated-story-badge.png'
import familyImage from './assets/family-photo.png'
import zoetalesLogo from './assets/zoetales-emblem.png'
import './App.css'

const navigation = [
  ['Home', '/#home'],
  ['Bible Stories', '/bible-stories/#stories'],
  ['Watch & Listen', '/watch-listen.html'],
  ['Explore & Learn', '/activities/#explore'],
  ['About Us', '/about-us.html'],
  ['Contact', '/contact/'],
]

const stories = [
  { title: 'Noah & the great adventure', reference: 'Genesis 6–9', theme: 'TRUST', meta: '8 min', image: homeNoahImage, badge: homeAnimatedStoryBadge },
  { title: 'David & a courageous heart', reference: '1 Samuel 17', theme: 'COURAGE', meta: '7 min', image: homeDavidImage, badge: homeAnimatedStoryBadge },
  { title: 'The wonder of creation', reference: 'Genesis 1–2', theme: 'WONDER', meta: '6 min', image: homeCreationImage, badge: homeAnimatedStoryBadge },
]

const learningCards = [
  { number: '01', label: 'WATCH', title: 'Stories that spark wonder', text: 'Step into the Bible with animated adventures.', className: 'green', link: 'Discover stories' },
  { number: '02', label: 'LISTEN', title: 'Little voices. Joyful praises.', text: 'Sing along and hide God’s Word in their hearts.', className: 'purple', link: 'Find your songs' },
  { number: '03', label: 'PLAY', title: 'Big questions. Happy discoveries.', text: 'Make learning Bible adventure with fun Bible quizzes.', className: 'cream', link: 'Let’s play' },
  { number: '04', label: 'GROW', title: 'Small hands. Beautiful creations.', text: 'Bring the stories home with coloring and activities.', className: 'yellow', link: 'Get creative' },
]

function Arrow({ diagonal = false }) {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      {diagonal ? <path d="M4 12 12 4M5 4h7v7" /> : <path d="M2 8h11m-4-4 4 4-4 4" />}
    </svg>
  )
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand--footer' : ''}`} href="/#home" aria-label="Zoetales home">
      <img className="brand-logo" src={zoetalesLogo} alt="" />
      <span className="brand-copy">
        <span className="brand-name">ZOETALES</span>
        <span className="brand-tagline">Little Stories. Eternal Truths. A Lifetime of Faith.</span>
      </span>
    </a>
  )
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
        <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="button button--gold header-cta" href="/bible-stories/#stories">Explore Stories <Arrow /></a>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">A LITTLE WONDER. A LOT OF FAITH.</p>
          <h1>Big adventures.<br />Little hearts.<br />Eternal truths.</h1>
          <p className="hero-script">Bringing God&apos;s Word to Life.</p>
          <p className="hero-description">A world of Bible stories, joyful songs and wonder-filled adventures. Made for little explorers. Rooted in God&apos;s love.</p>
          <div className="hero-actions">
            <a className="button button--gold" href="/bible-stories/#stories">Explore Bible Stories <Arrow diagonal /></a>
            <a className="button button--light" href="/watch-listen.html">Watch the wonder <Arrow diagonal /></a>
          </div>
          <p className="hero-note">Faith-filled fun for ages 3–12 <span>·</span> Made for growing hearts</p>
        </div>
        <div className="hero-art">
          <img src={heroImage} alt="An open storybook revealing a magical forest" />
        </div>
      </section>

      <section className="values-strip" id="values" aria-label="Our values">
        {['Rooted in Scripture', 'Made for little hearts', 'Loved by the whole family', 'Wonder in every story'].map((value) => (
          <div className="value" key={value}><b>✦</b><span>{value}</span></div>
        ))}
      </section>

      <section className="stories-section section-wrap" id="stories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OPEN A STORY. DISCOVER HIS LOVE.</p>
            <h2>Extraordinary stories. <em>Everyday faith.</em></h2>
            <p className="section-intro">Big lessons in courage, kindness and trusting God, one adventure at a time.</p>
          </div>
          <a className="text-link" href="/bible-stories/#stories">View all stories <Arrow /></a>
        </div>
        <div className="story-grid" id="story-collection">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-image">
                <img src={story.image} alt="" />
                {story.badge && <img className="story-badge" src={story.badge} alt="Animated story" />}
              </div>
              <div className="story-body">
                <p className="story-meta">{story.reference.toUpperCase()} <span>•</span> {story.theme}</p>
                <h3>{story.title}</h3>
                <p className="story-description">{story.theme === 'TRUST' ? 'Discover what happens when we trust God.' : story.theme === 'COURAGE' ? 'A little faith can do extraordinary things.' : 'A beautiful world, made with so much love.'}</p>
                <div className="story-footer"><a href="/watch-listen.html">Watch story <Arrow /></a><span>{story.meta} · Ages 3+</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learn-section section-wrap" id="watch">
        <div className="learn-heading">
          <p className="eyebrow">SO MANY WAYS TO GROW</p>
          <h2>Let their curiosity lead the way.</h2>
        </div>
        <div className="learning-grid">
          {learningCards.map((card) => (
            <article className={`learning-card learning-card--${card.className}`} key={card.number}>
              <p className="learning-number">{card.number} <span>/</span> {card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href={card.className === 'yellow' ? '/activities/#explore' : '/watch-listen.html'}>{card.link} <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="family-section section-wrap">
        <div className="family-image"><img src={familyImage} alt="A family sharing a Bible story beneath a leafy tree" /></div>
        <div className="family-copy">
          <p className="eyebrow">FOR THE GROWN-UPS WHO GUIDE THEM</p>
          <h2>Meaningful moments.<br />Faith that grows together.</h2>
          <p>From one more bedtime story to a Sunday school full of curious minds, make room for moments that matter.</p>
          <ul>
            <li>Scripture-inspired storytelling, made with care</li>
            <li>Wholesome entertainment for growing hearts</li>
            <li>Resources for home, church and the classroom</li>
          </ul>
          <a className="button button--teal" href="/activities/#explore">Explore &amp; Learn <Arrow /></a>
        </div>
      </section>

      <section className="purpose-section" id="about">
        <div className="purpose-inner section-wrap">
          <div>
            <p className="eyebrow eyebrow--light">OUR HEART BEHIND EVERY TALE</p>
            <h2>Little Stories.<br />Eternal Truths.<br />A Lifetime of Faith.</h2>
          </div>
          <div className="purpose-copy">
            <h3>We believe the stories children grow up with shape the people they become.</h3>
            <p>That&apos;s why we&apos;re bringing the Bible to life through joyful, imaginative experiences — helping a new generation discover God&apos;s love and carry His truth wherever life takes them.</p>
            <a className="text-link text-link--gold" href="/about-us.html">Get to know ZOETALES <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="newsletter section-wrap" id="contact">
        <div>
          <p className="eyebrow">A LITTLE JOY IN YOUR INBOX</p>
          <h2>Let the wonder keep growing.</h2>
          <p>New stories, joyful songs and little ways to nurture big faith.</p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="email-row">
            <input type="email" aria-label="Email address" placeholder="Your email address" />
            <button type="submit">Join the adventure <Arrow /></button>
          </div>
          <small>For parents &amp; educators. A little encouragement, never clutter.<br />By subscribing, you agree to our Privacy Policy.</small>
        </form>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-wrap">
        <div className="footer-brand"><Brand footer /></div>
        <div><h4>Discover</h4><a href="/bible-stories/#stories">Bible Stories</a><a href="/watch-listen.html">Watch &amp; Listen</a><a href="/activities/#explore">Explore &amp; Learn</a></div>
        <div><h4>ZOETALES</h4><a href="/about-us.html">About Us</a><a href="/contact/">Contact</a><a href="/activities/#explore">For parents &amp; teachers</a></div>
        <div><h4>Stay connected</h4><a href="/contact/">YouTube ↗</a><a href="/contact/">Instagram ↗</a><a href="/contact/">Facebook ↗</a></div>
      </div>
      <div className="footer-bottom section-wrap"><span>© 2026 ZOETALES. All rights reserved.</span><span><a href="/contact/">Privacy Policy</a><a href="/contact/">Terms of Use</a></span></div>
    </footer>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HomePage />
      <Footer />
    </>
  )
}
