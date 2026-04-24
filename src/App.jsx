import './App.css'
import Header from './components/Header'
import Maria from './components/Maria'
import Masuda from './components/Masuda'
import Assignments from './components/Assignments'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="profiles-section">
          <h2 className="section-title">Gruppemedlemmer</h2>
          <div className="profiles-grid">
            <Maria />
            <Masuda />
          </div>
        </section>
        <Assignments />
      </main>
      <footer>
        <p>Utvikling av interaktive nettsteder &mdash; HiØF 2025</p>
      </footer>
    </>
  )
}

export default App