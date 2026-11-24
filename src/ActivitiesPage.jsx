import familyImage from './assets/family-photo.png'
import storyOne from './assets/story-1.png'
import storyTwo from './assets/story-2.png'
import storyThree from './assets/story-3.png'

const activities = [
  {
    label: 'COLOR & CREATE',
    reference: 'AGES 5–9',
    title: 'A rainbow to remember',
    description: "Bring Noah's story to life with a colorful reminder of God's promise.",
    image: storyOne,
  },
  {
    label: 'TALK & WONDER',
    reference: 'AGES 3–8',
    title: 'My little courage cards',
    description: 'Make conversation cards about being brave and trusting God.',
    image: storyTwo,
  },
  {
    label: 'EXPLORE & DISCOVER',
    reference: 'AGES 5–9',
    title: "God's creation treasure hunt",
    description: 'Head outdoors and notice the wonderful things God has made.',
    image: storyThree,
  },
]

const familyMoments = [
  { number: '01', label: 'WATCH', title: 'Start with a story.', text: 'Settle in for a Bible adventure. Let their curiosity lead the way.', className: 'green' },
  { number: '02', label: 'WONDER', title: 'Ask one big question.', text: 'What surprised you? How did God show His love? There’s no perfect answer.', className: 'purple' },
  { number: '03', label: 'LIVE', title: 'Try one little thing.', text: 'Make, play or pray together. Carry the story into the rest of your day.', className: 'cream' },
]

export default function ActivitiesPage() {
  return (
    <main>
      <section className="hero" id="watch">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">BIG QUESTIONS. HAPPY DISCOVERIES.</p>
          <h1>Little hands.<br />Growing faith.</h1>
          <p className="hero-script">Make room for wonder.</p>
          <p className="hero-description">Color, create, wonder and play. Simple activities that help God&apos;s Word take root in everyday life.</p>
          <div className="hero-actions">
            <a className="button button--gold" href="#explore">Find an activity</a>
            <a className="button button--light" href="/watch-listen.html">Watch a story</a>
          </div>
          <p className="hero-note">For families, Sunday schools &amp; curious little hearts</p>
        </div>
        <div className="hero-art">
          <img src={familyImage} alt="A family enjoying a Bible story together outdoors" />
        </div>
      </section>

      <section className="stories-section section-wrap" id="explore">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SMALL MOMENTS, BEAUTIFUL DISCOVERIES.</p>
            <h2>Bring the story into their day.</h2>
            <p className="section-intro">A little preparation, a lot of wonder. Choose something to enjoy together.</p>
          </div>
        </div>
        <div className="story-grid">
          {activities.map((activity) => (
            <article className="story-card" key={activity.title}>
              <div className="story-image">
                <img src={activity.image} alt="" />
              </div>
              <div className="story-body">
                <p className="story-meta">{activity.label} <span>•</span> {activity.reference}</p>
                <h3>{activity.title}</h3>
                <p className="story-description">{activity.description}</p>
                <div className="story-footer"><a href="/watch-listen.html">Explore together <span aria-hidden="true">↗</span></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learn-section section-wrap">
        <div className="learn-heading">
          <p className="eyebrow">A LITTLE RHYTHM FOR YOUR FAMILY</p>
          <h2>Watch it. Wonder about it. Live it.</h2>
        </div>
        <div className="learning-grid">
          {familyMoments.map((moment) => (
            <article className={`learning-card learning-card--${moment.className}`} key={moment.number}>
              <p className="learning-number">{moment.number} <span>/</span> {moment.label}</p>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
