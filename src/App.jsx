const HERO_VIDEO_START_TIME = 0.3
const PRIMARY_PHONE = '+919811732340'
const SECONDARY_PHONE = '+918467067944'
const CONTACT_EMAIL = 'info@asprint.in'

const services = [
  {
    title: 'Acrylic LED Letters',
    description: 'Modern illuminated signage that enhances brand visibility.',
  },
  {
    title: 'Stainless Steel Letters',
    description: 'Premium, corrosion-resistant signage with a sleek finish.',
  },
  {
    title: 'Channel Letters',
    description: '3D illuminated signage for maximum impact.',
  },
  {
    title: 'Glow Sign Boards',
    description: 'Reliable and eye-catching signage for retail and commercial use.',
  },
  {
    title: 'CNC & Laser Cutting',
    description: 'Precision cutting for detailed designs and custom projects.',
  },
  {
    title: 'Digital Vinyl Printing',
    description: 'High-resolution prints for branding and promotions.',
  },
]

const serviceDetails = [
  'Acrylic LED Letters',
  'Stainless Steel Letters',
  'Aluminium Channel Letters',
  'GI Steel Letters',
  'CNC Router Cutting',
  'Laser Cutting',
  'Digital Vinyl Printing',
  'Clip-On Displays',
  'LED Light Boards',
]

const trustPoints = [
  'In-house production with no outsourcing',
  'Advanced machinery and fabrication workflow',
  '10+ years of signage manufacturing experience',
  'Fast turnaround, usually within 4 to 6 days',
  'Premium material quality and finish control',
  'Custom design support from concept to execution',
]

const machines = [
  {
    name: 'UV Printing Machine',
    image: '/machines/uv-printing-480.webp',
    imageSet: '/machines/uv-printing-480.webp 480w, /machines/uv-printing-960.webp 960w',
    label: 'UV Printing',
    description: 'Direct printing for crisp graphics, durable color, and premium surface quality.',
  },
  {
    name: 'CNC Router',
    image: '/machines/cnc-router-480.webp',
    imageSet: '/machines/cnc-router-480.webp 480w, /machines/cnc-router-960.webp 960w',
    label: 'CNC Router',
    description: 'Accurate cutting and shaping for repeatable custom signage production.',
  },
  {
    name: 'CO2 Laser Cutting Machine',
    image: '/machines/co2-laser-480.webp',
    imageSet: '/machines/co2-laser-480.webp 480w, /machines/co2-laser-960.webp 960w',
    label: 'CO2 Laser',
    description: 'Fine-detail cutting that helps achieve sharp edges and cleaner fabrication.',
  },
  {
    name: 'Spot Welding Machine',
    image: '/machines/spot-welding-480.webp',
    imageSet: '/machines/spot-welding-480.webp 480w, /machines/spot-welding-960.webp 960w',
    label: 'Spot Welding',
    description: 'Reliable metal joining for stronger builds and long-lasting structural work.',
  },
  {
    name: 'Channel Letter Bending Machine',
    image: '/machines/channel-letter-bending-480.webp',
    imageSet:
      '/machines/channel-letter-bending-480.webp 480w, /machines/channel-letter-bending-960.webp 960w',
    label: 'Channel Letter Bending',
    description: 'Automated bending for accurate curves, faster output, and cleaner letter forms.',
  },
]

const clientLogos = [
  '/Clients/Amul.webp',
  '/Clients/MSME.webp',
  '/Clients/AMRITA_Hospital.webp',
  '/Clients/Hype-the-gym.webp',
  '/Clients/Radisson.webp',
]

function App() {
  const trimHeroVideoStart = (event) => {
    const video = event.currentTarget
    video.currentTime = Math.min(HERO_VIDEO_START_TIME, video.duration || HERO_VIDEO_START_TIME)
  }

  const loopHeroVideoFromTrimmedStart = (event) => {
    const video = event.currentTarget
    video.currentTime = Math.min(HERO_VIDEO_START_TIME, video.duration || HERO_VIDEO_START_TIME)
    void video.play().catch(() => {})
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <a className="brand" href="#home" aria-label="Abhinav Sign & Print">
            <span className="brand-mark" aria-hidden="true">
              <span className="billboard-logo billboard-logo-compact">
                <span className="billboard-frame" />
                <span className="billboard-panel" />
                <span className="billboard-leds" />
                <span className="billboard-glow" />
                <span className="billboard-flare" />
                <span className="billboard-text">
                  <span className="billboard-letter letter-a">A</span>
                  <span className="billboard-letter letter-s">S</span>
                  <span className="billboard-letter letter-p">P</span>
                </span>
              </span>
            </span>
            <span>
              <strong>Abhinav Sign & Print</strong>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Faridabad signage manufacturer, since 2011</span>
              <div className="hero-lightword" aria-hidden="true">
                <span className="billboard-logo billboard-logo-hero">
                  <span className="billboard-frame" />
                  <span className="billboard-panel" />
                  <span className="billboard-leds" />
                  <span className="billboard-glow" />
                  <span className="billboard-flare" />
                  <span className="billboard-text">
                    <span className="billboard-letter letter-a">A</span>
                    <span className="billboard-letter letter-s">S</span>
                    <span className="billboard-letter letter-p">P</span>
                  </span>
                </span>
              </div>
              <h1>We Build Signage That Gets You Noticed.</h1>
              <p>
                Premium LED letters, acrylic signage, and custom branding solutions, designed,
                manufactured, and installed in-house.
              </p>
              <p className="brand-positioning">
                We don’t just make signboards, we build brand visibility.
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#contact">
                  Get a Free Quote
                </a>
                <a className="secondary-btn" href={`tel:${PRIMARY_PHONE}`}>
                  Call Now
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-photo hero-photo-main hero-video-shell">
                <video
                  className="hero-video"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={trimHeroVideoStart}
                  onEnded={loopHeroVideoFromTrimmedStart}
                >
                  <source src="/stickman%20(online-video-cutter.com).mp4" type="video/mp4" />
                </video>
              </div>
              <div className="hero-stat-grid">
                <article>
                  <strong>In-house</strong>
                  <span>Design to manufacturing control</span>
                </article>
                <article>
                  <strong>2011</strong>
                  <span>Crafting visibility since</span>
                </article>
                <article>
                  <strong>Premium</strong>
                  <span>Material and finish quality</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="about">
          <div className="container">
            <div className="about-grid about-grid-tight">
              <div className="section-heading about-copy">
                <span className="eyebrow">About us</span>
                <h2>Crafting Visibility Since 2011</h2>
                <p>
                  Abhinav Sign & Print is a Faridabad-based signage manufacturer specializing in
                  high-quality, durable, and visually striking branding solutions.
                </p>
                <p>
                  With complete in-house production capabilities, we ensure precision, faster
                  delivery, and unmatched quality, every single time.
                </p>
              </div>

              <div className="about-card accent-card">
                <span className="mini-label">ASP</span>
                <h3>Vision, mission, values</h3>
                <div className="stacked-copy">
                  <p>
                    <strong>Vision:</strong> To become a leading signage manufacturer known for
                    quality, innovation, and reliability across India.
                  </p>
                  <p>
                    <strong>Mission:</strong> To help businesses stand out through high-quality,
                    durable, and visually appealing signage solutions.
                  </p>
                  <p>
                    <strong>Values:</strong> Quality First, Customer Satisfaction, Innovation,
                    Reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Our services</span>
              <h2>End-to-End Signage Solutions</h2>
              <p>From concept to installation, every job is handled in-house for better quality and faster delivery.</p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title} style={{ animationDelay: `${index * 70}ms` }}>
                  <span className="service-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <div className="detail-panel">
              <div>
                <span className="eyebrow">Capabilities</span>
                <h3>Built for custom branding needs</h3>
              </div>
              <div className="chips-grid">
                {serviceDetails.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light compact-overview-section">
          <div className="container compact-overview-shell">
            <div className="compact-overview-intro">
              <span className="eyebrow">Why choose us</span>
              <h2>Why Businesses Trust Us</h2>
              <p>We don’t just make signboards, we build brand visibility.</p>
            </div>

            <div className="compact-overview-grid">
              <article className="overview-panel overview-panel-trust">
                <h3>What sets us apart</h3>
                <div className="overview-trust-list">
                  {trustPoints.map((item, index) => (
                    <div className="overview-trust-item" key={item}>
                      <span>0{index + 1}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-light" id="clients">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Trusted clients</span>
              <h2>Our Clients</h2>
              <p>We are proud to work with leading brands, institutions, and organizations.</p>
            </div>

            <div className="client-carousel">
              <div className="client-track">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <article className="client-tile client-carousel-tile" key={`${logo}-${index}`}>
                    <img className="client-logo" src={logo} alt="" loading="lazy" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section machines-section section-dark">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Our machinery</span>
              <h2>Powered by Advanced Technology</h2>
              <p>We use state-of-the-art machinery to ensure precision and quality.</p>
            </div>

            <div className="machine-grid">
              {machines.map((machine, index) => (
                <article className="machine-card compact-machine" key={machine.name} style={{ animationDelay: `${index * 70}ms` }}>
                  <div className="machine-visual" aria-hidden="true">
                    <div className="machine-photo">
                      <img
                        className="machine-photo-image"
                        src={machine.image}
                        srcSet={machine.imageSet}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1179px) calc(50vw - 3rem), 420px"
                      />
                      <span>{machine.label}</span>
                    </div>
                  </div>
                  <div className="machine-content">
                    <span className="machine-tag">Advanced production setup</span>
                    <h3>{machine.name}</h3>
                    <p>{machine.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section section-light" id="contact">
          <div className="container contact-grid">
            <div className="contact-card">
              <span className="eyebrow">Contact us</span>
              <h2>Get in Touch</h2>
              <p>Share your signage requirement and we will help you with design support, manufacturing, and installation guidance.</p>
              <div className="contact-blocks">
                <div>
                  <strong>Workshop Address</strong>
                  <p>Sec-25, Main Road, Krishna Colony, Gali No.-5, Faridabad</p>
                </div>
                <div>
                  <strong>Office Address</strong>
                  <p>Sec-56, Near HDFC Bank, Samaypur Road, Faridabad, HR-121004</p>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href={`tel:${PRIMARY_PHONE}`}>{PRIMARY_PHONE}</a>
                  </p>
                  <p>
                    <a href={`tel:${SECONDARY_PHONE}`}>{SECONDARY_PHONE}</a>
                  </p>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <p className="footer-meta">© 2026 Abhinav Sign & Print. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
