'use client';

import { useRouter } from 'next/navigation';
import useSiteMotion from '../../hooks/useSiteMotion';
import Button from '../../components/ui/Button';

const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80', title: 'Residência · Jurerê, [Sua Cidade]', meta: '9,8 kWp · 1.180 kWh/mês · economia de 92%', span: 2, h: 'clamp(320px,58vh,620px)' },
  { img: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1400&q=80', title: 'Indústria · [Sua Cidade]', meta: '148 kWp · usina de solo', delay: '90', h: 'clamp(320px,58vh,620px)' },
  { img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80', title: 'Propriedade rural · [Sua Cidade]', meta: '62 kWp · irrigação', h: 'clamp(300px,46vh,480px)' },
  { img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80', title: 'Residência · [Sua Cidade]', meta: '6,4 kWp · telhado cerâmico', delay: '90', h: 'clamp(300px,46vh,480px)' },
  { img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1400&q=80', title: 'Centro empresarial · [Sua Cidade]', meta: '230 kWp · geração remota', delay: '180', h: 'clamp(300px,46vh,480px)' },
  { img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=2000&q=80', title: 'Cooperativa · [Sua Cidade]', meta: '410 kWp · maior projeto entregue', span: 2, h: 'clamp(320px,54vh,560px)' },
];

export default function ProjetosPage() {
  useSiteMotion();
  const router = useRouter();
  const goSimular = () => router.push('/contato#simulador');

  return (
    <>
      <section data-screen-label="Hero Projetos" style={{ position: 'relative', height: '72vh', minHeight: 460, overflow: 'hidden', background: 'var(--navy-900)', display: 'flex', alignItems: 'flex-end' }}>
        <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2400&q=80" alt="Usina solar vista do alto" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(4,14,24,.5),rgba(4,14,24,.8))' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,48px) clamp(48px,6vw,80px)', color: '#fff' }}>
          <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,.66)' }}>Projetos</span>
          <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5.4vw,74px)', lineHeight: 1, letterSpacing: '-.035em', maxWidth: '14ch' }}>
            Energia instalada em diferentes realidades.
          </h1>
          <p style={{ margin: '22px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,.76)', maxWidth: '54ch' }}>
            Residências. Empresas. Agronegócio. Cada projeto representa uma solução personalizada para quem busca reduzir custos sem abrir mão da qualidade.
          </p>
        </div>
      </section>

      <section data-screen-label="Galeria" style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(12px,1.4vw,20px)' }}>
          {GALLERY.map((g) => (
            <figure key={g.title} data-reveal="scale" data-delay={g.delay} style={{ margin: 0, gridColumn: g.span ? `span ${g.span}` : undefined, minWidth: 0 }}>
              <div className="sc-hover-zoom-wrap" style={{ position: 'relative', height: g.h, overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--gray-200)' }}>
                <img data-parallax="0.09" className="sc-hover-zoom-img" src={g.img} alt={g.title} style={{ position: 'absolute', left: 0, top: '-12%', width: '100%', height: '124%', objectFit: 'cover' }} />
              </div>
              <figcaption style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', justifyContent: 'space-between', paddingTop: 16, fontSize: 13, color: 'var(--text-secondary)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', letterSpacing: '-.01em' }}>{g.title}</span>
                <span>{g.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section data-screen-label="Números Projetos" style={{ background: 'var(--navy-900)', color: '#fff', padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'clamp(28px,4vw,48px)' }}>
          {[
            { to: '3000', prefix: '+', label: 'Projetos entregues desde 2013' },
            { to: '90', suffix: '%', label: 'Até 90% de economia na conta de luz', delay: '100' },
            { to: '8400', prefix: '+', label: 'Toneladas de CO₂ evitadas', delay: '200' },
            { to: '25', suffix: '+', label: 'Anos de vida útil estimada', delay: '300' },
          ].map((s) => (
            <div key={s.label} data-reveal="up" data-delay={s.delay} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.2vw,60px)', lineHeight: 1, letterSpacing: '-.05em' }}>
                <span data-count-to={s.to} data-prefix={s.prefix} data-suffix={s.suffix}>{`${s.prefix || ''}${s.to}${s.suffix || ''}`}</span>
              </span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,.62)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section data-screen-label="CTA Projetos" style={{ background: '#fff', padding: 'clamp(64px,8vw,120px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 data-reveal="up" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.05, letterSpacing: '-.035em', maxWidth: '16ch' }}>
            O próximo projeto pode ser o seu.
          </h2>
          <div data-reveal="up" data-delay="100">
            <Button size="lg" onClick={goSimular}>Solicitar meu projeto</Button>
          </div>
        </div>
      </section>
    </>
  );
}
