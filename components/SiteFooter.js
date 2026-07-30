import Link from 'next/link';
import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'rgba(255,255,255,.72)', padding: 'clamp(56px,7vw,88px) clamp(20px,5vw,48px) 32px' }}>
      <div
        style={{
          maxWidth: 'var(--content-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
          gap: 'clamp(32px,5vw,56px)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: 200 }}>
          <Image
            src="/assets/logo-full.png"
            alt="SC Energia Solar"
            width={200}
            height={155}
            style={{ height: 74, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.94 }}
          />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, maxWidth: 270, color: 'rgba(255,255,255,.6)' }}>
            Projetos de energia solar com engenharia própria, do dimensionamento à homologação.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.42)' }}>Navegação</span>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/solucoes">Soluções</FooterLink>
          <FooterLink href="/projetos">Projetos</FooterLink>
          <FooterLink href="/#como-funciona">Como Funciona</FooterLink>
          <FooterLink href="/sobre">Sobre</FooterLink>
          <FooterLink href="/contato">Contato</FooterLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.42)' }}>Soluções</span>
          <FooterLink href="/solucoes#residencial">Residencial</FooterLink>
          <FooterLink href="/solucoes#comercial">Comercial</FooterLink>
          <FooterLink href="/solucoes#rural">Rural</FooterLink>
          <FooterLink href="/contato#simulador">Simular economia</FooterLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.42)' }}>Contato</span>
          <FooterLink href="tel:+554830000000">(48) 3000-0000</FooterLink>
          <FooterLink href="https://wa.me/5548999990000">WhatsApp (48) 99999-0000</FooterLink>
          <FooterLink href="mailto:contato@scenergiasolar.com.br">contato@scenergiasolar.com.br</FooterLink>
          <FooterLink href="https://www.instagram.com/scenergiasolar">@scenergiasolar</FooterLink>
          <span style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.6)' }}>
            Rua das Palmeiras, 250 — Centro
            <br />
            Florianópolis · SC
          </span>
        </div>
      </div>
      <div
        style={{
          maxWidth: 'var(--content-max)',
          margin: 'clamp(40px,6vw,64px) auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,.14)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px 28px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
          © 2026 SC Energia Solar · Energia solar desde 2013 · CNPJ 00.000.000/0001-00
        </span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>
          Fotografias: <a href="https://unsplash.com/?utm_source=claude_design&utm_medium=referral" style={{ color: 'rgba(255,255,255,.55)' }}>Unsplash</a>
        </span>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  const isInternal = href.startsWith('/');
  const style = { fontSize: 14, color: 'rgba(255,255,255,.8)', transition: 'color var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard)', display: 'inline-block', width: 'fit-content' };
  if (isInternal) {
    return <Link href={href} style={style} className="sc-footer-link">{children}</Link>;
  }
  return <a href={href} style={style} className="sc-footer-link">{children}</a>;
}
