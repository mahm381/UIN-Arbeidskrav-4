import './Masuda.css'

const member = {
  name: 'Masuda Maqsudi',
  email: 'masudam@hiof.no',
  study: 'Informasjons teknologi – årstudium',
  imageUrl: 'https://api.dicebear.com/9.x/pixel-art/png?seed=masuda',
  imageAlt: 'Illustrasjon for Masuda',
}

function Masuda() {
  return (
    <article className="member-two">
      <header className="m2-header">
        <span className="m2-number">02</span>
        <figure className="m2-image-wrap">
          <img src={member.imageUrl} alt={member.imageAlt} className="m2-image" />
        </figure>
      </header>
      <section className="m2-body">
        <h2 className="m2-name">{member.name}</h2>
        <p className="m2-study">{member.study}</p>
        <address className="m2-address">
          <a href={`mailto:${member.email}`} className="m2-email">
            ✉ {member.email}
          </a>
        </address>
      </section>
    </article>
  )
}


export default Masuda