import './Masuda.css'

const member = {
  name: 'Masuda Ahmed',
  email: 'masudam@hiof.no',
  study: 'Informasjons teknologi – årstuduim',
  imageUrl: 'https://www.google.com/search?sca_esv=678aa669decbf740&rlz=1C1GCEA_enNO1139NO1139&sxsrf=ANbL-n4RvlMTGebI1lKSvuChR63LWY6jiQ:1777037949859&udm=2&fbs=ADc_l-YGrpJMQtvjQ6h14rj-dfIrbPkd_Upq68wJVnEIgo2PwwKPNlYwsjssCGmh4GdP4oGmzKAsANyV238wnjZYHA6FqOZKlgV37jTcte-EpvsEGq2-bWHtTm1Nmz0IP55JWjkqNqlAFYkcNf9tpoVd5rcAG8giZq3KIPMuViL9UEa4Au36j8ZgZ0Kg9r5sjqw3eNIIP0poLm1G-cL1IVuGhYZ_F7L0qA&q=dory&sa=X&ved=2ahUKEwiUxIOezoaUAxUm0wIHHUVNOrUQtKgLegQIHBAB&biw=1280&bih=551&dpr=1.5#sv=CAMSVhoyKhBlLWFoSFo4YnNRX05mMUpNMg5haEhaOGJzUV9OZjFKTToOajlNWjZENDFibjdIY00gBCocCgZtb3NhaWMSEGUtYWhIWjhic1FfTmYxSk0YADABGAcg6-2V2wNKCBABGAEgASgB',
  imageAlt: 'Illustrasjon for Masuda',
}

function MemberTwo() {
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