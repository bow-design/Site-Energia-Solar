'use client';

import { useRouter } from 'next/navigation';
import useSiteMotion from '../../hooks/useSiteMotion';
import Button from '../../components/ui/Button';

export default function SobrePage() {
  useSiteMotion();
  const router = useRouter();
  const goSimular = () => router.push('/contato#simulador');

  return (
    <>
      <section data-screen-label="Hero Sobre" style={{ position: 'relative', height: '78vh', minHeight: 480, overflow: 'hidden', background: 'var(--navy-900)', display: 'flex', alignItems: 'center' }}>
        <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=2400&q=80" alt="Painéis solares" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(4,14,24,.72),rgba(4,14,24,.82))' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,48px)', color: '#fff' }}>
          <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,.66)' }}>Sobre</span>
          <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,6vw,86px)', lineHeight: 0.98, letterSpacing: '-.04em' }}>
            Energia limpa.
            <br />
            Tecnologia.
            <br />
            Confiança.
          </h1>
        </div>
      </section>

      <section data-screen-label="História" style={{ background: '#fff', padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,6vw,88px)', alignItems: 'start' }}>
          <h2 data-reveal="up" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.08, letterSpacing: '-.03em', maxWidth: '16ch' }}>
            Desde 2013 gerando energia — e confiança.
          </h2>
          <div data-reveal="up" data-delay="100" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <p style={{ margin: 0, fontSize: 'clamp(16px,1.4vw,20px)', lineHeight: 1.7, color: 'var(--text-primary)', maxWidth: '56ch' }}>
              A SC Energia Solar nasceu com um objetivo simples: tornar a geração de energia própria mais acessível, eficiente e segura.
            </p>
            <p style={{ margin: 0, fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '56ch' }}>
              Cada projeto é desenvolvido pensando no longo prazo, porque acreditamos que investir em energia solar significa investir no futuro da sua família, do seu negócio e do seu patrimônio.
            </p>
            <p style={{ margin: 0, fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '56ch' }}>
              Somos engenheiros, projetistas e instaladores. A mesma equipe que dimensiona é a que acompanha a obra e responde depois que o sistema entra em operação.
            </p>
          </div>
        </div>
      </section>

      <section data-screen-label="Linha do tempo" style={{ background: 'var(--gray-50)', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <span data-reveal="up" style={{ display: 'block', fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Trajetória</span>
          <div style={{ marginTop: 'clamp(32px,4vw,52px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 1, background: 'var(--border-subtle)', borderTop: '1px solid var(--border-subtle)' }}>
            {[
              { y: '2013', t: 'Primeira instalação residencial, quando geração distribuída ainda era novidade no país.' },
              { y: '2017', t: 'Equipe própria de engenharia e o primeiro projeto comercial acima de 100 kWp.', delay: '100' },
              { y: '2021', t: 'Expansão para o agronegócio, com usinas de solo e compensação em múltiplas unidades.', delay: '200' },
              { y: '2026', t: 'Mais de 3.000 projetos entregues e monitoramento contínuo da base instalada.', delay: '300' },
            ].map((it) => (
              <div key={it.y} data-reveal="up" data-delay={it.delay} style={{ background: 'var(--gray-50)', padding: 'clamp(26px,3vw,40px) clamp(16px,2vw,28px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1, letterSpacing: '-.04em', color: 'var(--navy-900)' }}>{it.y}</span>
                <span style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)' }}>{it.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="Equipe" style={{ background: '#fff', padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(36px,6vw,80px)', alignItems: 'center' }}>
          <div data-reveal="left" className="sc-hover-zoom-wrap" style={{ position: 'relative', height: 'min(70vh,580px)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--gray-100)' }}>
            <img data-parallax="0.09" className="sc-hover-zoom-img" src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=80" alt="Equipe de instalação" style={{ position: 'absolute', left: 0, top: '-10%', width: '100%', height: '120%', objectFit: 'cover' }} />
          </div>
          <div data-reveal="up" data-delay="100">
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Como trabalhamos</span>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.05, letterSpacing: '-.035em', maxWidth: '15ch' }}>
              Engenharia própria, do cálculo ao pós-instalação.
            </h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column' }}>
              {[
                { t: 'Projeto antes da proposta', d: 'O dimensionamento vem primeiro. O preço é consequência dele.' },
                { t: 'Equipamentos certificados', d: 'Marcas homologadas no INMETRO, com garantia de fábrica e suporte no Brasil.' },
                { t: 'Acompanhamento contínuo', d: 'Monitoramos a geração e avisamos você se algo sair do esperado.', last: true },
              ].map((it) => (
                <div key={it.t} style={{ padding: '18px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: it.last ? '1px solid var(--border-subtle)' : undefined }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-.015em' }}>{it.t}</h3>
                  <p style={{ margin: '8px 0 0', fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '44ch' }}>{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="CTA Sobre" style={{ background: 'var(--navy-900)', color: '#fff', padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 data-reveal="up" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.05, letterSpacing: '-.035em', maxWidth: '18ch' }}>
            Vamos calcular quanto o sol pode economizar para você.
          </h2>
          <div data-reveal="up" data-delay="100">
            <Button variant="secondary" size="lg" onClick={goSimular}>Simular minha economia</Button>
          </div>
        </div>
      </section>
    </>
  );
}
