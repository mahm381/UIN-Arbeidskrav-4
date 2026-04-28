// Importerer CSS-stilen som tilhører Maria-komponenten
import './Maria.css'

// Objekt som inneholder all informasjon om Maria
const member = {
  name: 'Maria Ahmad',
  email: 'Mariahm@hiof.no',
  study: 'Informationsystemer – Bachelor',
  imageUrl: 'https://api.dicebear.com/9.x/pixel-art/png?seed=maria',
  imageAlt: 'Illustrasjon for Maria',
}

// Maria-komponenten viser profilkortet til Maria på forsiden
function Maria() {
  return (
    // article er et selvstendig innholdselement - brukes for profilkort
    <article className="member-one">

      {/* figure brukes for bilder med tilhørende innhold */}
      <figure className="m1-image-wrap">
        {/* Profilbilde - henter src og alt fra member-objektet */}
        <img src={member.imageUrl} alt={member.imageAlt} className="m1-image" />
      </figure>

      {/* section grupperer tekstinnholdet i profilkortet */}
      <section className="m1-content">
        {/* Merkelapp som viser gruppemedlem nummer */}
        <span className="m1-badge">Gruppemedlem 1</span>

        {/* Navn på gruppemedlemmet */}
        <h2 className="m1-name">{member.name}</h2>

        {/* Studieretning */}
        <p className="m1-study">{member.study}</p>

        {/* address er riktig element for kontaktinformasjon */}
        <address>
          {/* mailto: gjør at lenken åpner e-postprogrammet automatisk */}
          <a href={`mailto:${member.email}`} className="m1-email">
            {member.email}
          </a>
        </address>
      </section>

    </article>
  )
}

// Eksporterer Maria så komponenten kan brukes i App.jsx
export default Maria