    import './Maria.css'

const member = {
  name: 'Maria Fullt Navn',
  email: 'din.epost@hiof.no',
  study: 'Informatikk – Bachelor',
  imageUrl: 'https://google.com/images/.`)',
  imageAlt: 'Illustrasjon for Maria',
}

function Maria() {
  return (
    <article className="member-one">
      <figure className="m1-image-wrap">
        <img src={member.imageUrl} alt={member.imageAlt} className="m1-image" />
      </figure>
      <div className="m1-content">
        <span className="m1-badge">Gruppemedlem 1</span>
        <h2 className="m1-name">{member.name}</h2>
        <p className="m1-study">{member.study}</p>
        <address>
          <a href={`mailto:${member.email}`} className="m1-email">
            {member.email}
          </a>
        </address>
      </div>
    </article>
  )
}

