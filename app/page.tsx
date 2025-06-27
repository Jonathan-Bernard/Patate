'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'
import { useScrollReveal } from './hooks/useScrollReveal'
import Image from 'next/image'

export default function Home() {
  const images = ['/patate1.png', '/patate2.png', '/patate3.png' , '/patate4.png', '/patate5.png' , '/patate6.png', '/patate7.png']
  const [current, setCurrent] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const accueilRef = useScrollReveal()
  const nourritureRef = useScrollReveal()
  const infosRef = useScrollReveal()
  const contactRef = useScrollReveal()
  const photosRef = useScrollReveal()
  const coursesRef = useScrollReveal()

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, 5000)
  return () => clearInterval(interval)
}, [images.length]) // 👈 ici

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <main className={styles.page}>
      {/* 🔰 Logo */}
      <header className={styles.logoHeader}>
        <a href="#accueil">
          <Image
            src="/logo-patate.png"
            alt="Logo Patate le Chat"
            className={styles.logo}
            width={180}
            height={180}
          />
        </a>
      </header>

      {/* 🧭 Navigation */}
<nav className={styles.nav} ref={navRef}>
  <div className={styles.navWrapper}>
    <div className={styles.navLeft}>
      {/* Vide ou futur logo si souhaité */}
    </div>

    <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
      <a href="#nourriture" onClick={() => setIsMenuOpen(false)}>Nourriture</a>
      <a href="#infos" onClick={() => setIsMenuOpen(false)}>Infos pratiques</a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      <a href="#photos" onClick={() => setIsMenuOpen(false)}>Photos</a>
    </div>

    <button
      className={styles.burger}
      onClick={() => setIsMenuOpen((prev) => !prev)}
      aria-label="Toggle menu"
    >
      ☰
    </button>
  </div>
</nav>

      {/* 🏠 Accueil */}
      <section id="accueil" ref={accueilRef} className={`reveal reveal-fade ${styles.section}`}>
        <div className={styles.card}>
          <h1>🐾 Patate !</h1>
          <p>Si tu es ici, c'est que tu gardes Patate, le plus grand des chasseurs 🐱🦴 !</p>
          <p>📋 Voici toutes les infos pour t'aider à prendre soin de lui pendant notre absence.</p>
        </div>
      </section>

      {/* 🍽️ Nourriture */}
      <section id="nourriture" ref={nourritureRef} className={`reveal reveal-left ${styles.section}`}>
        <div className={styles.card}>
          <h2>Nourriture</h2>
          <h3>Une fois par jour</h3>
          <ul className={styles.textWithImages}>
            <li>
              🥫 Un sachet de Sheba avec un demi médicament écrasé dedans. Le tout dans la gamelle en fer.
              <Image src="/nourriture.png" alt="Nourriture de Patate" />
            </li>
            <li>
              🍗 Croquettes : remplir à moitié le pipolino. Les croquettes sont en dessous des plaques de cuisson.
              <Image src="/croquette.png" alt="Croquettes" />
              <Image src="/pipolino.png" alt="Pipolino" />
            </li>
            <li>
              💧 Eau fraîche à volonté.
              <Image src="/eau.png" alt="Bol d'eau fraîche" />
            </li>
            <li>
              🍬 Et une poignée de Catisfactions pour son plus grand plaisir 😻.
              <Image src="/catisfaction2.png" alt="Catisfactions" />
            </li>
          </ul>
        </div>
      </section>

      {/* 📋 Infos pratiques */}
      <section id="infos" ref={infosRef} className={`reveal reveal-right ${styles.section}`}>
        <div className={styles.card}>
          <h2>Infos pratiques</h2>
          <ul className={styles.textWithImages}>
            <li>
              🚽 Litière : à nettoyer tous les jours (pelle et petite poubelle à côté)
              <Image src="/litiere2.png" alt="Litière" />
            </li>
            <li>
              🎾 Les jouets sont dans la chambre !
              <Image src="/jouets.png" alt="jouets" />
            </li>
            <li>
              😺 Câlins fortement recommandés — c&apos;est un expert en ronrons
              <Image src="/patate5.png" alt="Ronrons de Patate" />
            </li>
          </ul>
        </div>
      </section>

      {/* 🛍️ Courses */}
      <section id="courses" ref={coursesRef} className={`reveal reveal-left ${styles.section}`}>
        <div className={styles.card}>
          <h2>Courses pour Patate</h2>
          <p>🛒 Tu trouveras les produits pour Patate dans ces magasins proches :</p>

          <div className={styles.storeBlock}>
            <h3>🛍️ Intermarché – 75-77 Rue Léon Gambetta</h3>
            <div className={styles.productGrid}>
              <div className={styles.productCard}>
                <Image src="/sheba.png" alt="Sheba" />
                <p>Pâtée Sheba</p>
              </div>
              <div className={styles.productCard}>
                <Image src="/catisfaction.png" alt="Catisfactions" />
                <p>Catisfactions</p>
              </div>
              <div className={styles.productCard}>
                <Image src="/litiere.png" alt="Litière" />
                <p>Litière agglomérante</p>
              </div>
            </div>

            <h3>🌿 LaFleur – 174 Rue Léon Gambetta</h3>
            <div className={`${styles.productGrid} ${styles.singleCentered}`}>
              <div className={`${styles.productCard}`}>
                <Image src="/herbeachat.png" alt="Herbe à chat" />
                <p>Herbe à chat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Contact */}
      <section id="contact" ref={contactRef} className={`reveal reveal-zoom ${styles.section}`}>
        <div className={styles.card}>
          <div className={styles.cardContentLeft}>
            <h2 style={{ textAlign: 'center' }}>Contact</h2>
            <ul>
              <li>📱 John : <a href="tel:0634387525">06 34 38 75 25</a></li>
              <li>📱 Rux : <a href="tel:0643480008">06 43 48 00 08</a></li>
              <li>🐾 Vétérinaire Bourbouze-Beloeil :</li>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>📍 Adresse : <a href="https://maps.google.com/?q=195+Rue+Nationale,+59800+Lille" target="_blank" rel="noopener noreferrer">195 Rue Nationale, 59800 Lille</a></li>
                <li>📞 Téléphone : <a href="tel:0320579003">03 20 57 90 03</a></li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      {/* 📸 Galerie */}
      <section id="photos" ref={photosRef} className={`reveal reveal-fade ${styles.section}`}>
        <div className={styles.card}>
          <h2>Galerie</h2>
          <div className={styles.carousel}>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Patate ${index + 1}`}
                className={`${styles.slide} ${index === current ? styles.active : ''}`}
                aria-hidden={index !== current}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
