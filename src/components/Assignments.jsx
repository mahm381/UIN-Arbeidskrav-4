// Importer React hooks for tilstandshåndtering og sideeffekter
import { useEffect, useState } from 'react'
// Importer CSS-filen for styling av Assignments-komponenten
import './Assignments.css'

// BYTT UT disse konstantene med verdiene fra ditt Sanity-prosjekt:
const SANITY_PROJECT_ID = 'ditt-project-id'   // f.eks. "abc12def"
const SANITY_DATASET = 'production'
// Versjon av Sanity API som skal brukes
const SANITY_API_VERSION = '2024-01-01'

// GROQ-spørring som henter alle arbeidskrav sortert stigende etter nummer
const QUERY = encodeURIComponent('*[_type == "arbeidskrav"] | order(nummer asc)')

// Konstruer full URL til Sanity API for å hente data
const SANITY_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${QUERY}`

// Fallback-data som vises mens Sanity-prosjektet blir satt opp
const FALLBACK = [
  { _id: '1', nummer: 1, tittel: 'Arbeidskrav 1', beskrivelse: 'Grunnleggende HTML og CSS – semantisk oppbygging av nettsider.' },
  { _id: '2', nummer: 2, tittel: 'Arbeidskrav 2', beskrivelse: 'JavaScript og DOM-manipulering – interaktivitet på klientsiden.' },
  { _id: '3', nummer: 3, tittel: 'Arbeidskrav 3', beskrivelse: 'API og asynkron JavaScript – henting og visning av data fra eksterne tjenester.' },
  { _id: '4', nummer: 4, tittel: 'Arbeidskrav 4', beskrivelse: 'React og teamarbeid – utvikling av komponentbasert applikasjon i gruppe.' },
]

// Assignments-komponent som henter og viser arbeidskrav
function Assignments() {
  // Tilstand for arbeidskrav-data
  const [assignments, setAssignments] = useState([])
  // Tilstand for loading-status
  const [loading, setLoading] = useState(true)
  // Tilstand for feilmeldinger
  const [error, setError] = useState(null)

  // useEffect-hook kjører når komponenten monteres
  useEffect(() => {
    // Hvis project ID ikke er satt, bruk fallback-data
    if (SANITY_PROJECT_ID === 'ditt-project-id') {
      setAssignments(FALLBACK)
      setLoading(false)
      return
    }

    // Hent data fra Sanity API
    fetch(SANITY_URL)
      // Håndter responsen
      .then((res) => {
        // Sjekk om forespørselen var vellykket
        if (!res.ok) throw new Error('Kunne ikke hente fra Sanity')
        // Parse JSON-data
        return res.json()
      })
      // Lagre data og oppdater tilstand
      .then((data) => {
        setAssignments(data.result)
        setLoading(false)
      })
      // Håndter eventuelle feil
      .catch((err) => {
        console.error(err)
        setError('Kunne ikke laste arbeidskrav. Viser fallback-data.')
        // Bruk fallback-data hvis API-kall mislykkes
        setAssignments(FALLBACK)
        setLoading(false)
      })
  }, [])

  // Render JSX-strukturen
  return (
    <section className="assignments-section">
      {/* Overskrift for arbeidskrav-seksjonen */}
      <h2 className="section-title">Arbeidskrav</h2>
      
      {/* Vis feilmelding hvis det oppstår en feil */}
      {error && <p className="assignments-error">{error}</p>}
      
      {/* Betinget rendering - vis loading-tekst eller liste med arbeidskrav */}
      {loading ? (
        <p className="assignments-loading">Laster arbeidskrav…</p>
      ) : (
        <ol className="assignments-list">
          {/* Iterer gjennom alle arbeidskrav og lager listeelementer */}
          {assignments.map((item) => (
            <li key={item._id} className="assignment-item">
              {/* Nummer på arbeidskravet, paddes med null hvis mindre enn 10 */}
              <span className="assignment-number">
                {String(item.nummer).padStart(2, '0')}
              </span>
              
              {/* Section som inneholder innholdet for arbeidskravet */}
              <section className="assignment-body">
                {/* Tittel på arbeidskravet */}
                <h3 className="assignment-title">{item.tittel}</h3>
                {/* Beskrivelse av arbeidskravet */}
                <p className="assignment-desc">{item.beskrivelse}</p>
              </section>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

// Eksporter Assignments-komponenten som standard eksport
export default Assignments
