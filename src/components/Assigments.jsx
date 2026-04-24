import { useEffect, useState } from 'react'
import './Assignments.css'

// BYTT UT disse med verdiene fra Sanity-prosjektet ditt:
const SANITY_PROJECT_ID = 'ditt-project-id'   // f.eks. "abc12def"
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'

// GROQ-spørringen – henter alle arbeidskrav sortert på nummer
const QUERY = encodeURIComponent('*[_type == "arbeidskrav"] | order(nummer asc)')

const SANITY_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${QUERY}`

// Fallback-data mens dere setter opp Sanity
const FALLBACK = [
  { _id: '1', nummer: 1, tittel: 'Arbeidskrav 1', beskrivelse: 'Grunnleggende HTML og CSS – semantisk oppbygging av nettsider.' },
  { _id: '2', nummer: 2, tittel: 'Arbeidskrav 2', beskrivelse: 'JavaScript og DOM-manipulering – interaktivitet på klientsiden.' },
  { _id: '3', nummer: 3, tittel: 'Arbeidskrav 3', beskrivelse: 'API og asynkron JavaScript – henting og visning av data fra eksterne tjenester.' },
  { _id: '4', nummer: 4, tittel: 'Arbeidskrav 4', beskrivelse: 'React og teamarbeid – utvikling av komponentbasert applikasjon i gruppe.' },
]

function Assignments() {
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Bruk fallback hvis project ID ikke er satt
    if (SANITY_PROJECT_ID === 'ditt-project-id') {
      setAssignments(FALLBACK)
      setLoading(false)
      return
    }

    fetch(SANITY_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Kunne ikke hente fra Sanity')
        return res.json()
      })
      .then((data) => {
        setAssignments(data.result)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Kunne ikke laste arbeidskrav. Viser fallback-data.')
        setAssignments(FALLBACK)
        setLoading(false)
      })
  }, [])

  return (
    <section className="assignments-section">
      <h2 className="section-title">Arbeidskrav</h2>
      {error && <p className="assignments-error">{error}</p>}
      {loading ? (
        <p className="assignments-loading">Laster arbeidskrav…</p>
      ) : (
        <ol className="assignments-list">
          {assignments.map((item) => (
            <li key={item._id} className="assignment-item">
              <span className="assignment-number">
                {String(item.nummer).padStart(2, '0')}
              </span>
              <div className="assignment-body">
                <h3 className="assignment-title">{item.tittel}</h3>
                <p className="assignment-desc">{item.beskrivelse}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default Assignments
