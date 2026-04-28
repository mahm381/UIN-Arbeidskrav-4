import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <section className="header-inner">
        <span className="header-label">Utvikling av interaktive nettsteder</span>
        <h1 className="header-title">
          <span className="header-group">Gruppe 12</span>
        </h1>
        <p className="header-sub">UIN26_12 &mdash; Arbeidskrav 4</p>
      </section>
      <aside className="header-deco" aria-hidden="true">
        <span>AK4</span>
      </aside>
    </header>
  )
}

export default Header
