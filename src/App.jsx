import { useEffect, useRef, useState } from 'react'
import heroImage from './assets/storybook-forest.svg'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Bible stories', href: '#stories' },
  { label: 'Watch & listen', href: '#watch' },
  { label: 'Explore & learn', href: '#values' },
  { label: 'About us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const values = [
  'Rooted in Scripture',
  'Made for little hearts',
  'Loved by the whole family',
  'Wonder in every story',
]

const stories = [
  {
    title: "Noah's big boat",
    category: 'A promise to remember',
    reference: 'Genesis 6–9',
    description:
      'When the rain came, Noah trusted God and cared for every creature aboard the ark. After the storm, a rainbow reminded the whole world of God’s faithful promise.',
    art: 'ark',
    number: '01',
  },
  {
    title: "Esther's brave heart",
    category: 'Courage for a moment',
    reference: 'Esther 4–7',
    description:
      'Esther found the courage to speak up for her people. Her story reminds little hearts that doing what is right can be brave—and that we are never alone.',
    art: 'esther',
    number: '02',
  },
  {
    title: 'The lost little lamb',
    category: 'A love that finds us',
    reference: 'Luke 15:3–7',
    description:
      'Jesus told of a shepherd who searched until every sheep was safely home. It is a tender picture of how deeply God loves and cares for each one of us.',
    art: 'lamb',
    number: '03',
  },
  {
    title: "David's giant-sized faith",
    category: 'Small can be mighty',
    reference: '1 Samuel 17',
    description:
      'David stepped forward with a brave heart and a trust bigger than his fear. His story shows us that God can work through anyone, no matter how small.',
    art: 'david',
    number: '04',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  )
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Zoetales home">
      <svg
        className="brand-symbol"
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 37V14m0 8c-10 0-16-5-17-15 10 0 16 5 17 15Zm0 7c10 0 16-5 17-15-10 0-16 5-17 15Z"
          fill="currentColor"
        />
        <path
          d="M32 38c-9-7-19-9-28-6v15c10-3 19-1 28 6 9-7 18-9 28-6V32c-9-3-19-1-28 6Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M9 39c8-1 15 1 23 7 8-6 15-8 23-7M32 38v15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 5v4m-2-2h4"
          stroke="#D8A43B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-lockup">
        <span className="brand-name">ZOETALES</span>
        <span className="brand-tagline">Bringing God&apos;s Word to life</span>
      </span>
    </a>
  )
}

function StoryArtwork({ type }) {
  return (
    <div className={`story-art story-art--${type}`} aria-hidden="true">
      <span className="story-art__sun" />
      <span className="story-art__hill story-art__hill--back" />
      <span className="story-art__hill story-art__hill--front" />
      {type === 'ark' && <span className="story-art__boat" />}
      {type === 'esther' && <span className="story-art__crown" />}
      {type === 'lamb' && <span className="story-art__sheep" />}
      {type === 'david' && <span className="story-art__star" />}
      <span className="story-art__number">{stories.find((story) => story.art === type)?.number}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState(null)
  const storyDialogRef = useRef(null)

  useEffect(() => {
    const dialog = storyDialogRef.current
    if (!dialog) return

    if (selectedStory && !dialog.open) dialog.showModal()
    if (!selectedStory && dialog.open) dialog.close()
  }, [selectedStory])

  function closeMenu() {
    setMenuOpen(false)
  }

  function closeStory() {
    setSelectedStory(null)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a href={item.href} key={item.label} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--gold header-cta" href="#stories">
            Explore stories <ArrowIcon diagonal />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light">A little wonder. A lot of faith.</p>
            <h1 id="hero-title">
              Big adventures.
              <br />
              Little hearts.
              <br />
              Eternal truths.
            </h1>
            <p className="hero-script">Bringing God&apos;s Word to life.</p>
            <p className="hero-description">
              A world of Bible stories, joyful songs, and wonder-filled
              adventures. Made for little explorers. Rooted in God&apos;s love.
            </p>
            <div className="hero-actions">
              <a className="button button--gold" href="#stories">
                Explore Bible stories <ArrowIcon diagonal />
              </a>
              <a className="button button--light" href="#watch">
                Watch the wonder <ArrowIcon diagonal />
              </a>
            </div>
            <p className="hero-note">
              Faith-filled fun for ages 3–12 <span>·</span> Made for growing
              hearts
            </p>
          </div>
          <div className="hero-art">
            <img
              className="hero-illustration"
              src={heroImage}
              alt="A glowing forest adventure rising from the pages of an open storybook"
              fetchPriority="high"
            />
            <div className="hero-art-note">
              <span className="note-star" aria-hidden="true">
                ✦
              </span>
              <p>
                Every great adventure
                <br />
                <span>begins with His Word.</span>
              </p>
            </div>
            <span className="hero-art-caption">A storybook world awaits</span>
          </div>
        </section>

        <section className="values-strip" id="values" aria-label="What we believe">
          {values.map((value) => (
            <div className="value-item" key={value}>
              <span aria-hidden="true">✦</span>
              {value}
            </div>
          ))}
        </section>

        <section className="stories-section section-wrap" id="stories">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow--green">Open a story. Discover His love.</p>
              <h2>Extraordinary stories. <em>Everlasting truths.</em></h2>
              <p className="section-intro">
                Big lessons in courage, kindness, and trusting God, one
                adventure at a time.
              </p>
            </div>
            <a className="text-link" href="#story-collection">
              Meet your next favorite <ArrowIcon />
            </a>
          </div>
          <div className="story-grid" id="story-collection">
            {stories.map((story) => (
              <article className="story-card" key={story.title}>
                <StoryArtwork type={story.art} />
                <div className="story-card__body">
                  <p className="story-category">{story.category}</p>
                  <h3>{story.title}</h3>
                  <p className="story-reference">{story.reference}</p>
                  <button
                    className="story-link"
                    type="button"
                    onClick={() => setSelectedStory(story)}
                  >
                    Discover this story <ArrowIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wonder-section" id="watch">
          <div className="wonder-inner section-wrap">
            <div className="wonder-copy">
              <p className="eyebrow eyebrow--light">Gather close, wonder together</p>
              <h2>Stories made to be <em>shared.</em></h2>
              <p>
                From a quiet bedtime read to a joyful sing-along, find little
                ways to bring a big-hearted faith into every day.
              </p>
              <a className="button button--light" href="#contact">
                Find your next family moment <ArrowIcon diagonal />
              </a>
            </div>
            <div className="wonder-card" aria-label="A little time together goes a long way">
              <span className="wonder-card__spark" aria-hidden="true">✳</span>
              <p className="wonder-card__quote">
                “Let the little children come to me.”
              </p>
              <p className="wonder-card__reference">MATTHEW 19:14</p>
              <div className="wonder-card__rule" />
              <p className="wonder-card__note">A little time together goes a long way.</p>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-symbol" aria-hidden="true">
            <span>✦</span>
            <span>✧</span>
            <span>✦</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow--green">A little about us</p>
            <h2>Growing faith, one <em>story at a time.</em></h2>
            <p>
              ZoeTales brings timeless Bible stories to life for curious kids
              and the grown-ups who love them. Because the best adventures
              help little hearts know they are loved by God.
            </p>
            <a className="text-link" href="#contact">
              Say hello <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <BrandMark />
          <p>Little stories. Eternal truths. A lifetime of faith.</p>
          <a className="footer-link" href="mailto:hello@zoetales.com">
            Get in touch <ArrowIcon diagonal />
          </a>
          <span className="copyright">© ZoeTales</span>
        </div>
      </footer>

      <dialog
        className="story-dialog"
        ref={storyDialogRef}
        aria-labelledby="story-dialog-title"
        onClose={closeStory}
      >
        {selectedStory && (
          <div className="story-dialog__content">
            <button
              className="dialog-close"
              type="button"
              aria-label="Close story"
              onClick={() => storyDialogRef.current?.close()}
            >
              ×
            </button>
            <p className="eyebrow eyebrow--green">{selectedStory.category}</p>
            <h2 id="story-dialog-title">{selectedStory.title}</h2>
            <p className="story-dialog__reference">{selectedStory.reference}</p>
            <p>{selectedStory.description}</p>
            <a
              className="button button--gold"
              href="#stories"
              onClick={() => storyDialogRef.current?.close()}
            >
              Explore more stories <ArrowIcon diagonal />
            </a>
          </div>
        )}
      </dialog>
    </>
  )
}

export default App
