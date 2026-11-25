import { useEffect, useRef, useState } from 'react'
import homeHeroImage from './assets/about-book-clean.png'
import activitiesHeroImage from './assets/faith-grows-together.png'
import bibleNoahImage from './assets/bible-noah.png'
import bibleDavidImage from './assets/bible-david.png'
import bibleCreationImage from './assets/bible-creation.png'
import familyReadingImage from './assets/family-photo.png'
import zoetalesLogo from './assets/zoetales-emblem.png'

const navigation = [
  { label: 'Home', href: '/#home', view: 'home' },
  { label: 'Bible Stories', href: '/bible-stories/#stories', view: 'stories' },
  { label: 'Watch & Listen', href: '/watch-listen.html' },
  { label: 'Explore & Learn', href: '/activities/#explore', view: 'activities' },
  { label: 'About Us', href: '/about-us.html' },
  { label: 'Contact', href: '/contact/', view: 'contact' },
]

const stories = [
  {
    ages: 'Genesis 6–9 · Trust',
    testament: 'Old Testament',
    theme: 'Trust',
    title: 'Noah & the great adventure',
    description: 'Discover what happens when we trust God',
    action: 'Watch story',
    image: bibleNoahImage,
  },
  {
    ages: '1 Samuel 17 · Courage',
    testament: 'Old Testament',
    theme: 'Courage',
    title: 'David & a courageous heart',
    description: 'A little faith can face the biggest giants',
    action: 'Watch story',
    image: bibleDavidImage,
  },
  {
    ages: 'Genesis 1–2 · Wonder',
    testament: 'Old Testament',
    theme: 'Wonder',
    title: 'The wonder of creation',
    description: 'Discover the beautiful world God made',
    action: 'Watch story',
    image: bibleCreationImage,
  },
]

const activities = [
  {
    label: 'Create & share',
    category: 'Color & create',
    ages: 'Ages 5–9',
    title: 'A rainbow to remember',
    description: "Bring Noah's story to life with a colorful reminder of God's promise.",
    action: 'View activity',
    image: bibleNoahImage,
  },
  {
    label: 'Talk & wonder',
    category: 'Talk & wonder',
    ages: 'Ages 3–8',
    title: 'My little courage cards',
    description: 'Make conversation cards about being brave and trusting God.',
    action: 'Family activity',
    image: bibleDavidImage,
  },
  {
    label: 'Explore & discover',
    category: 'Explore & discover',
    ages: 'Ages 5–9',
    title: "God's creation treasure hunt",
    description: 'Head outdoors and notice the wonderful things God has made.',
    action: 'Nature activity',
    image: bibleCreationImage,
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
              className={item.view === view ? 'active' : ''}
              href={item.href}
              aria-current={item.view === view ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--gold header-cta" href="/bible-stories/#stories">
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

function BibleStoriesPage() {
  const [selected, setSelected] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All stories')
  const [searchQuery, setSearchQuery] = useState('')
  const dialogRef = useRef(null)
  const filteredStories = stories.filter((item) => {
    const matchesFilter = activeFilter === 'All stories'
      || item.testament === activeFilter
      || (activeFilter === 'Courage & kindness' && item.theme === 'Courage')
    const searchText = `${item.title} ${item.ages} ${item.description}`.toLowerCase()
    return matchesFilter && searchText.includes(searchQuery.trim().toLowerCase())
  })

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
              {['All stories', 'Old Testament', 'New Testament', 'Courage & kindness'].map((filter) => (
                <button
                  aria-pressed={activeFilter === filter}
                  className={`filter${activeFilter === filter ? ' active' : ''}`}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
              <input
                aria-label="Search Bible stories"
                className="filter filter-search"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search Bible stories..."
                type="search"
                value={searchQuery}
              />
            </div>
            <div className="story-grid">
              {filteredStories.map((item) => <StoryCard key={item.title} item={item} onOpen={setSelected} />)}
            </div>
            {filteredStories.length === 0 && (
              <p className="section-end" role="status">
                {activeFilter === 'New Testament'
                  ? 'New Testament stories are coming soon. Try an Old Testament story in the meantime.'
                  : 'No Bible stories match your search yet.'}
              </p>
            )}
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
              <a className="text-link" href="/activities/#explore">
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
  const [activeFilter, setActiveFilter] = useState('All activities')
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)
  const filteredActivities = activities.filter((item) => (
    activeFilter === 'All activities' || item.category === activeFilter
  ))

  useEffect(() => {
    if (selected && !dialogRef.current.open) dialogRef.current.showModal()
  }, [selected])

  return (
    <>
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
            {['All activities', 'Color & create', 'Talk & wonder', 'Explore & discover'].map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                className={`filter${activeFilter === filter ? ' active' : ''}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="story-grid">
            {filteredActivities.map((item) => <StoryCard key={item.title} item={item} onOpen={setSelected} />)}
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
          <a className="button button--gold" href="/contact/">Get in touch <ArrowIcon diagonal /></a>
        </div>
      </section>
      </main>
      <dialog className="story-dialog" ref={dialogRef} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <button className="dialog-close" type="button" aria-label="Close" onClick={() => dialogRef.current.close()}>×</button>
            <p className="eyebrow dark">{selected.label} · {selected.ages}</p>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </div>
        )}
      </dialog>
    </>
  )
}

function ContactPage() {
  const [messageSent, setMessageSent] = useState(false)
  const contactEmail = 'topsecreetdeveloper@gmail.com'
  const faqs = [
    {
      question: 'Who is ZOETALES for?',
      answer: 'Our stories and activities are designed for ages 3–12, with grown-ups joining in to guide, talk and explore together.',
    },
    {
      question: 'Where should our family start?',
      answer: 'Choose a Bible story that sparks your child’s curiosity. Afterward, visit Explore & Learn for a simple way to keep the conversation going.',
    },
    {
      question: 'Can I ask about resources for a class or church?',
      answer: 'Of course. Choose “Teachers & churches” in the form and tell us a little about your group so we can point you in the right direction.',
    },
  ]

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `ZOETALES contact: ${formData.get('topic')}`
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Topic: ${formData.get('topic')}`,
      '',
      'Message:',
      formData.get('message'),
    ].join('\n')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setMessageSent(true)
  }

  return (
    <main>
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="eyebrow">A little hello can start something wonderful</p>
          <h1>We’d love to hear<br />what’s on your heart.</h1>
          <p>A question, an idea or a story to share? There’s a place for it here.<br />Let’s make more room for wonder, together.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-inner">
          <aside className="contact-copy">
            <p className="eyebrow dark">Let’s connect</p>
            <h2>Big questions.<br />Little notes.<br />We’re listening.</h2>
            <p className="contact-intro">Whether you’re a parent, a teacher or simply curious about ZOETALES, we’re glad you’re here.</p>

            <div className="contact-audience">
              <h3>Parents &amp; families</h3>
              <p>Questions about our stories or finding the right activity for your little one.</p>
            </div>
            <div className="contact-audience">
              <h3>Teachers &amp; churches</h3>
              <p>Ideas for your classroom, Sunday school or a shared learning moment.</p>
            </div>
            <div className="contact-audience">
              <h3>Creative conversations</h3>
              <p>Have an idea or want to collaborate? Tell us a little about it.</p>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a little hello.</h2>
            <p className="form-required">Fields marked * are required.</p>

            <label htmlFor="contact-name">Your name *</label>
            <input id="contact-name" name="name" type="text" placeholder="Parent or educator name" required />

            <label htmlFor="contact-email">Email address *</label>
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="contact-topic">What’s your message about? *</label>
            <select id="contact-topic" name="topic" required defaultValue="">
              <option value="" disabled>Choose a topic</option>
              <option>Parents &amp; families</option>
              <option>Teachers &amp; churches</option>
              <option>Creative collaboration</option>
              <option>Something else</option>
            </select>

            <label htmlFor="contact-message">Your message *</label>
            <textarea id="contact-message" name="message" placeholder="What would you like to share?" required />

            <p className="privacy-note">By sending this message, you agree that ZOETALES may use your details to respond to your inquiry. Read our privacy policy.</p>
            <button className="button button--gold" type="submit">Send message <ArrowIcon diagonal /></button>
            {messageSent && <p className="form-success" role="status">Your email app should open with your message addressed to {contactEmail}. Review it and press Send.</p>}
          </form>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-inner">
          <p className="eyebrow dark">A few helpful answers</p>
          <h2>Wondering about something?</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Footer({ view }) {
  return (
    <footer className="site-footer" id={view === 'home' ? 'contact' : undefined}>
      <div className="footer-inner">
        <div><Brand footer /><p className="footer-tagline">Little stories for the biggest journey of all.</p></div>
        <div className="footer-links"><strong>Discover</strong><a href="/bible-stories/#stories">Bible Stories</a><a href="/watch-listen.html">Watch &amp; Listen</a><a href="/activities/#explore">Explore &amp; Learn</a></div>
        <div className="footer-links"><strong>ZOETALES</strong><a href="/about-us.html">About Us</a><a href="/contact/">Contact</a><a href="/activities/#explore">For Parents &amp; Teachers</a></div>
        <div className="footer-links"><strong>Stay connected</strong><a href="#youtube">YouTube <span>↗</span></a><a href="#instagram">Instagram <span>↗</span></a><a href="#facebook">Facebook <span>↗</span></a></div>
        <div className="footer-bottom"><span>© 2026, ZOETALES. All rights reserved.</span><span><a href="#privacy">Privacy policy</a> &nbsp; <a href="#terms">Terms of use</a></span></div>
      </div>
    </footer>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const view = path === '/activities' ? 'activities' : path === '/contact' ? 'contact' : 'stories'

  return (
    <>
      <Header view={view} />
      {view === 'stories' ? <BibleStoriesPage /> : view === 'activities' ? <ActivitiesPage /> : <ContactPage />}
      <Footer view={view} />
    </>
  )
}

export default App
