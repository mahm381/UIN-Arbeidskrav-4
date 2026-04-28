// Importer CSS-filen for App-komponenten
import './App.css'
// Importer Header-komponenten
import Header from './components/Header'
// Importer Maria-komponenten (gruppemedlem)
import Maria from './components/Maria'
// Importer Masuda-komponenten (gruppemedlem)
import Masuda from './components/Masuda'
// Importer Assignments-komponenten
import Assignments from './components/Assignments'

// Hoved App-komponent som strukturerer hele applikasjonen
function App() {
  // Returnerer JSX-struktur
  return (
    <>
      {/* Header-komponent */}
      <Header />
      
      {/* Hovedinnholdet av siden */}
      <main>
        {/* Seksjon for gruppemedlemmer */}
        <section className="profiles-section">
          {/* Overskrift for profil-seksjonen */}
          <h2 className="section-title">Gruppemedlemmer</h2>
          
          {/* Grid-layout for profil-kortene */}
          <section className="profiles-grid">
            {/* Maria - gruppemedlem 1 */}
            <Maria />
            {/* Masuda - gruppemedlem 2 */}
            <Masuda />
          </section>
        </section>
        
        {/* Assignments-komponent som viser arbeidskrav */}
        <Assignments />
      </main>
      
      {/* Footer av siden */}
      <footer>
        <p>Utvikling av interaktive nettsteder &mdash; HiØF 2025</p>
      </footer>
    </>
  )
}

// Eksporter App-komponenten som standard eksport
export default App