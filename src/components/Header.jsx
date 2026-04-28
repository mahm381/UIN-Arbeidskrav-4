// Importer CSS-filen for styling av Header-komponenten
import './Header.css'

// Header komponentfunksjon som rendrer nettstedets header
function Header() {
  // Hoved header-element med site-header klasse
  return (
    <header className="site-header">
      {/* Indre seksjon som inneholder hovedinnholdet i headeren */}
      <section className="header-inner">
        {/* Etikett for kursnavnet */}
        <span className="header-label">Utvikling av interaktive nettsteder</span>
        {/* Hovedtittel med gruppenummer */}
        <h1 className="header-title">
          <span className="header-group">Gruppe 12</span>
        </h1>
        {/* Undertittel med oppgavedetaljer */}
        <p className="header-sub">UIN26_12 &mdash; Arbeidskrav 4</p>
      </section>
      {/* Dekorativt aside-element for AK4, skjult for skjermlesere */}
      <aside className="header-deco" aria-hidden="true">
        <span>AK4</span>
      </aside>
    </header>
  )
}

// Eksporter Header-komponenten som standard eksport
export default Header
