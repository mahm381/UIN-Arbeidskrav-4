    import './Maria.css'

const member = {
  name: 'Maria Ahmad',
  email: 'Mariahm@hiof.no',
  study: 'Informationsystemer – Bachelor',
  imageUrl: 'https://www.google.com/search?q=panda+potrait&sca_esv=d855ddeff0d9d054&udm=2&biw=1035&bih=696&sxsrf=ANbL-n4DolCHB7rihhfyy2PbfgqQ64LNNA%3A1777035743708&ei=32nraZnvKse3i-gP9dmG8Qg&ved=0ahUKEwjZ2oaCxoaUAxXH2wIHHfWsIY4Q4dUDCBI&uact=5&oq=panda+potrait&gs_lp=Egtnd3Mtd2l6LWltZyINcGFuZGEgcG90cmFpdDIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0jYD1DCAlj_DHABeACQAQCYAXWgAawEqgEDNi4yuAEDyAEA-AEBmAIJoALTBMICChAAGIAEGIoFGEPCAgYQABgHGB7CAgUQABiABMICBxAAGIAEGArCAgQQABgewgIGEAAYBRgewgIGEAAYCBgemAMAiAYBkgcDNy4yoAf6I7IHAzYuMrgHzgTCBwUwLjQuNcgHHoAIAQ&sclient=gws-wiz-img#sv=CAMSVhoyKhBlLVJFbF9WM1dod2RXT2FNMg5SRWxfVjNXaHdkV09hTToOYlMwSm1zOXcxcFY4VU0gBCocCgZtb3NhaWMSEGUtUkVsX1YzV2h3ZFdPYU0YADABGAcgkZC14ghKCBABGAEgASgB',
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

export default Maria