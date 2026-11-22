import { useEffect, useRef, useState } from 'react'
import homeHeroImage from './assets/home-hero.jpg'
import activitiesHeroImage from './assets/activities-hero.jpg'
import noahImage from './assets/noah-story.jpg'
import davidImage from './assets/david-story.jpg'
import creationImage from './assets/creation-story.jpg'
import familyReadingImage from './assets/family-reading.jpg'
import './App.css'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Bible Stories', href: '/#stories', view: 'home' },
  { label: 'Watch & Listen', href: '/activities#watch', view: 'activities' },
  { label: 'Explore & Learn', href: '/activities#explore', view: 'activities' },
  { label: 'About Us', href: '/#about', view: 'home' },
  { label: 'Contact', href: '/activities#contact', view: 'activities' },
]

const stories = [
  {
    ages: 'Genesis 6–9 · Trust',
    title: 'Noah & the great adventure',
    description: 'Discover what happens when we trust God',
    action: 'Watch story',
    image: noahImage,
  },
  {
    ages: '1 Samuel 17 · Courage',
    title: 'David & a courageous heart',
    description: 'A little faith can face the biggest giants',
    action: 'Watch story',
    image: davidImage,
  },
  {
    ages: 'Genesis 1–2 · Wonder',
    title: 'The wonder of creation',
    description: 'Discover the beautiful world God made',
    action: 'Watch story',
    image: creationImage,
  },
]

const activities = [
  {
    label: 'Create & share',
    ages: 'Ages 5–9',
    title: 'A rainbow to remember',
    description: "Bring Noah's story to life with a colorful reminder of God's promise.",
    action: 'View activity',
    image: noahImage,
  },
  {
    label: 'Talk & wonder',
    ages: 'Ages 3–8',
    title: 'My little courage cards',
    description: 'Make conversation cards about being brave and trusting God.',
    action: 'Family activity',
    image: davidImage,
  },
  {
    label: 'Explore & discover',
    ages: 'Ages 5–9',
    title: "God's creation treasure hunt",
    description: 'Head outdoors and notice the wonderful things God has made.',
    action: 'Nature activity',
    image: creationImage,
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg className="arrow-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
      {diagonal
        ? <path d="M4 12 12 4M5 4h7v7" />
        : <path d="M2.5 8h10m-4-4 4 4-4 4" />}
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Zoetales home">
      <span className="brand-name">ZOETALES</span>
      <span className="brand-tagline">Bringing God&apos;s Word to life</span>
    </a>
  )
}

function Header({ view }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={`primary-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              className={item.view === view && (view === 'home' ? item.label === 'Bible Stories' : item.label === 'Explore & Learn') ? 'active' : ''}
              href={item.href}
              aria-current={item.view === view && (view === 'home' ? item.label === 'Bible Stories' : item.label === 'Explore & Learn') ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--gold header-cta" href="/#stories">
          Explore Stories <ArrowIcon diagonal />
        </a>
      </div>
    </header>
  )
}

function StoryCard({ item, onOpen }) {
  return (
    <article className="story-card">
      <div className="card-image-wrap">
        <img src={item.image} alt="" className="card-image" />
      </div>
      <div className="story-card-body">
        <p className="card-meta">{item.label && `${item.label} · `}{item.ages}</p>
        <h3>{item.title}</h3>
        <p className="card-description">{item.description}</p>
        <button type="button" className="card-link" onClick={() => onOpen(item)}>
          {item.action} <span aria-hidden="true">↗</span>
        </button>
        {item.action === 'View activity' && <span className="card-extra">· &nbsp; Coloring sheet</span>}
        {item.action === 'Family activity' && <span className="card-extra">· &nbsp; Family activity</span>}
        {item.action === 'Nature activity' && <span className="card-extra">· &nbsp; Nature activity</span>}
      </div>
    </article>
  )
}

function HomePage() {
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (selected && !dialogRef.current.open) dialogRef.current.showModal()
  }, [selected])

  return (
    <>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Big adventures start in His Word</p>
            <h1>Little stories.<br />Life-changing truths.</h1>
            <p className="hero-description">Step into a world of courage, kindness and God&apos;s love. Bible stories made for little hearts and shared discoveries.</p>
            <a className="button button--gold" href="#stories">
              Find a story <ArrowIcon diagonal />
            </a>
            <p className="hero-note">For ages 3–12 · Best enjoyed together</p>
          </div>
          <div className="hero-art">
            <img src={homeHeroImage} alt="An illustrated storybook forest adventure" />
          </div>
        </section>

        <section className="stories-section" id="stories">
          <div className="section-inner">
            <p className="eyebrow dark">Pick a story. Discover His love.</p>
            <h2>Which adventure will you choose?</h2>
            <p className="section-intro">Start with a familiar favorite or discover something wonderful together.</p>
            <div className="filters" aria-label="Story categories">
              <button className="filter active" type="button">All stories</button>
              <button className="filter" type="button">Old Testament</button>
              <button className="filter" type="button">New Testament</button>
              <button className="filter" type="button">Courage & kindness</button>
              <button className="filter" type="button">Search Bible stories...</button>
            </div>
            <div className="story-grid">
              {stories.map((item) => <StoryCard key={item.title} item={item} onOpen={setSelected} />)}
            </div>
            <p className="section-end">Every story is a chance to talk, wonder and grow together.</p>
          </div>
        </section>

        <section className="story-feature" id="about">
          <div className="feature-inner">
            <img src={familyReadingImage} alt="Children reading together outdoors" />
            <div className="feature-copy">
              <p className="eyebrow dark">Beyond “the end”</p>
              <h2>The story is just<br />the beginning.</h2>
              <p>Ask a big question. Make something with little hands. Find simple ways to bring each Bible story into your everyday.</p>
              <a className="text-link" href="/activities#explore">
                Explore family activities <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <dialog className="story-dialog" ref={dialogRef} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <button className="dialog-close" type="button" aria-label="Close" onClick={() => dialogRef.current.close()}>×</button>
            <p className="eyebrow dark">{selected.ages}</p>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </div>
        )}
      </dialog>
    </>
  )
}

function ActivitiesPage() {
  return (
    <main>
      <section className="hero" id="watch">
        <div className="hero-copy">
          <p className="eyebrow">Big questions, happy discoveries</p>
          <h1>Little hands.<br />Growing faith.</h1>
          <p className="hero-description">Color, create, wonder and play. Simple activities that help God&apos;s Word take root in everyday life.</p>
          <a className="button button--gold" href="#explore">
            Find an activity <ArrowIcon diagonal />
          </a>
          <p className="hero-note">For families, Sunday schools & curious little hearts</p>
        </div>
        <div className="hero-art">
          <img src={activitiesHeroImage} alt="Children enjoying a Bible story together outdoors" />
        </div>
      </section>

      <section className="stories-section" id="explore">
        <div className="section-inner">
          <p className="eyebrow dark">Small moments, beautiful discoveries.</p>
          <h2>Bring the story into their day.</h2>
          <p className="section-intro">A little preparation, a lot of wonder. Choose something to enjoy together.</p>
          <div className="filters" aria-label="Activity categories">
            <button className="filter active" type="button">All activities</button>
            <button className="filter" type="button">Color & create</button>
            <button className="filter" type="button">Talk & wonder</button>
            <button className="filter" type="button">Explore & discover</button>
          </div>
          <div className="story-grid">
            {activities.map((item) => <StoryCard key={item.title} item={item} onOpen={() => {}} />)}
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="section-inner">
          <p className="eyebrow dark">A little rhythm for your family</p>
          <h2>Watch it. Wonder about it. Live it.</h2>
          <div className="how-grid">
            <div><span>01 / Watch</span><h3>Start with a story.</h3><p>Settle in for a Bible adventure. Let their curiosity lead the way.</p></div>
            <div><span>02 / Wonder</span><h3>Ask one big question.</h3><p>What surprised you? How did God show His love? There&apos;s no perfect answer.</p></div>
            <div><span>03 / Live</span><h3>Try one little thing.</h3><p>Make, play or pray together. Carry the story into the rest of your day.</p></div>
          </div>
        </div>
      </section>

      <section className="next-section" id="contact">
        <div className="section-inner next-inner">
          <div>
            <p className="eyebrow dark">For the grown-ups who guide them</p>
            <h2>A little help for<br />your next faith-filled moment.</h2>
            <p>Looking for something for your classroom or Sunday school? Let&apos;s find a joyful place to start.</p>
          </div>
          <button className="button button--gold" type="button">Get in touch <ArrowIcon diagonal /></button>
        </div>
      </section>
    </main>
  )
}

function Footer({ view }) {
  return (
    <footer className="site-footer" id={view === 'home' ? 'contact' : undefined}>
      <div className="footer-inner">
        <div><Brand /><p className="footer-tagline">Little stories for the biggest journey of all.</p></div>
        <div className="footer-links"><strong>Discover</strong><a href="/#stories">Bible Stories</a><a href="/activities#watch">Watch &amp; Listen</a><a href="/activities#explore">Explore &amp; Learn</a></div>
        <div className="footer-links"><strong>ZOETALES</strong><a href="/#about">About Us</a><a href="/activities#contact">Contact</a><a href="/activities#explore">For Parents &amp; Teachers</a></div>
        <div className="footer-links"><strong>Stay connected</strong><a href="#youtube">YouTube <span>↗</span></a><a href="#instagram">Instagram <span>↗</span></a><a href="#facebook">Facebook <span>↗</span></a></div>
        <div className="footer-bottom"><span>© 2026, ZOETALES. All rights reserved.</span><span><a href="#privacy">Privacy policy</a> &nbsp; <a href="#terms">Terms of use</a></span></div>
      </div>
    </footer>
  )
}

function App() {
  const view = window.location.pathname.replace(/\/+$/, '') === '/activities'
    ? 'activities'
    : 'home'

  return (
    <>
      <Header view={view} />
      {view === 'home' ? <HomePage /> : <ActivitiesPage />}
      <Footer view={view} />
    </>
  )
}

export default App
