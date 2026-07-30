'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useSiteMotion from '../hooks/useSiteMotion';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import HoverExpandPanels from '../components/HoverExpandPanels';

const FAQ = [
  { q: 'Quanto posso economizar?', a: 'Depende do seu consumo e do projeto desenvolvido. Após uma análise técnica é possível estimar a economia do seu sistema.' },
  { q: 'Quanto tempo dura um sistema?', a: 'Os painéis possuem vida útil superior a 25 anos, mantendo alta eficiência ao longo do tempo.' },
  { q: 'Preciso fazer manutenção?', a: 'A manutenção é simples e preventiva, garantindo máxima eficiência durante toda a operação.' },
  { q: 'Posso financiar?', a: 'Sim. Existem diversas linhas de financiamento que permitem parcelar seu investimento.' },
];

const SOLUTIONS = [
  {
    href: '/solucoes#residencial',
    index: '01',
    title: 'Residencial',
    desc: 'Transforme sua casa em uma fonte inteligente de energia.',
    img: 'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=1600&q=80',
    alt: 'Residência com energia solar',
  },
  {
    href: '/solucoes#comercial',
    index: '02',
    title: 'Comercial',
    desc: 'Reduza custos operacionais e aumente a competitividade da sua empresa.',
    img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1600&q=80',
    alt: 'Usina solar comercial',
  },
  {
    href: '/solucoes#rural',
    index: '03',
    title: 'Rural',
    desc: 'Energia confiável para quem depende de produtividade todos os dias.',
    img: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Energia solar no campo',
  },
];

export default function HomePage() {
  useSiteMotion();
  const router = useRouter();
  const goSimular = () => router.push('/contato#simulador');

  return (
    <>
      <section
        data-screen-label="Hero"
        style={{ position: 'relative', height: '100vh', minHeight: 620, width: '100%', overflow: 'hidden', background: 'var(--navy-900)' }}
      >
        <img
          className="sc-hero-bg sc-hero-zoom"
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2400&q=80"
          alt="Painéis solares ao amanhecer"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(4,14,24,.62) 0%,rgba(4,14,24,.28) 38%,rgba(4,14,24,.72) 100%)' }} />
        <div
          style={{
            position: 'relative',
            height: '100%',
            maxWidth: 'var(--content-max)',
            margin: '0 auto',
            padding: '0 clamp(20px,5vw,48px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 'clamp(20px,3vw,30px)',
            color: '#fff',
          }}
        >
          <span className="sc-hero-item" style={{ animationDelay: '0ms', fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,.72)' }}>
            Energia solar · Desde 2013
          </span>
          <h1 className="sc-hero-item sc-hero-title" style={{ animationDelay: '220ms', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,6.4vw,90px)', lineHeight: 0.98, letterSpacing: '-.035em', maxWidth: '16ch', textWrap: 'balance' }}>
            Produza sua <span className="sc-hero-highlight">própria energia.</span>
            <br />
            Economize todos<br />
            os meses.
          </h1>
          <p className="sc-hero-item" style={{ animationDelay: '460ms', margin: 0, fontSize: 'clamp(15px,1.35vw,19px)', lineHeight: 1.6, maxWidth: '60ch', color: 'rgba(255,255,255,.88)' }}>
            Projetos inteligentes de energia solar para residências, empresas e propriedades rurais. Mais economia, mais autonomia e um investimento que gera retorno por décadas.
          </p>
          <div className="sc-hero-item" style={{ animationDelay: '840ms', display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 6 }}>
            <Button variant="secondary" size="lg" onClick={goSimular}>Simular minha economia</Button>
            <Button
              size="lg"
              onClick={() => router.push('/solucoes')}
              style={{ background: 'rgba(12,22,34,.42)', color: '#fff', border: '1px solid rgba(255,255,255,.42)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            >
              Conhecer Soluções
            </Button>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.6)', animation: 'scDrift 2.8s ease-in-out infinite' }}>
          <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase' }}>Role</span>
          <span style={{ display: 'block', width: 1, height: 34, background: 'linear-gradient(180deg,rgba(255,255,255,.7),rgba(255,255,255,0))' }} />
        </div>
      </section>

      <section
        data-screen-label="Seção 01"
        style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--navy-900)', color: '#fff', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,48px)' }}
      >
        <img
          data-parallax="0.10"
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80"
          alt="Usina solar"
          style={{ position: 'absolute', left: 0, top: '-12%', width: '100%', height: '124%', objectFit: 'cover', opacity: 0.5 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(6,17,29,.92) 0%,rgba(6,17,29,.72) 52%,rgba(6,17,29,.5) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,6vw,80px)', alignItems: 'center' }}>
          <div data-reveal="up">
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>01 — O futuro</span>
            <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4.6vw,64px)', lineHeight: 1.02, letterSpacing: '-.035em' }}>O futuro da energia já chegou.</h2>
            <p style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(19px,2vw,26px)', lineHeight: 1.3, letterSpacing: '-.02em', color: 'rgba(255,255,255,.82)' }}>Você produz a energia que consome.</p>
          </div>
          <div data-reveal="up" data-delay="120" style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
            <p style={{ margin: 0, fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,.72)', maxWidth: '52ch' }}>
              Enquanto a conta de luz continua aumentando, seu sistema trabalha silenciosamente todos os dias, transformando luz solar em economia real.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid rgba(255,255,255,.16)' }}>
              {['Mais controle.', 'Mais previsibilidade.', 'Mais independência.'].map((t) => (
                <span key={t} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,.16)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(17px,1.7vw,22px)', letterSpacing: '-.02em' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" data-screen-label="Soluções" style={{ background: '#fff', padding: 'clamp(72px,9vw,130px) 0 0' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div data-reveal="up">
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Soluções</span>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4.4vw,60px)', lineHeight: 1.02, letterSpacing: '-.035em', maxWidth: '14ch' }}>
              Um projeto para cada realidade.
            </h2>
          </div>
          <Link href="/solucoes" data-reveal="up" data-delay="100" className="sc-link-underline">Ver todas as soluções</Link>
        </div>
        <HoverExpandPanels items={SOLUTIONS} />
      </section>

      <section data-screen-label="Seção 02" style={{ background: '#fff', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(36px,6vw,88px)', alignItems: 'center' }}>
          <div data-reveal="left" className="sc-hover-zoom-wrap" style={{ position: 'relative', height: 'min(70vh,620px)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--gray-100)' }}>
            <img
              data-parallax="0.09"
              className="sc-hover-zoom-img"
              src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=80"
              alt="Equipe instalando painéis solares"
              style={{ position: 'absolute', left: 0, top: '-10%', width: '100%', height: '120%', objectFit: 'cover' }}
            />
          </div>
          <div data-reveal="up" data-delay="100">
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>02 — Engenharia</span>
            <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.03, letterSpacing: '-.035em', maxWidth: '15ch' }}>
              Muito mais do que instalar placas.
            </h2>
            <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(18px,1.9vw,24px)', lineHeight: 1.32, letterSpacing: '-.02em', color: 'var(--navy-800)' }}>
              Nós desenvolvemos um projeto completo.
            </p>
            <p style={{ margin: '24px 0 0', fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '54ch' }}>
              Desde a análise da sua conta de energia até a homologação junto à concessionária, cada etapa é planejada para entregar o máximo desempenho ao seu investimento.
            </p>
            <p style={{ margin: '14px 0 0', fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '54ch' }}>
              Você acompanha todo o processo enquanto nossa equipe cuida do restante.
            </p>
          </div>
        </div>
      </section>

      <section id="como-funciona" data-screen-label="Como Funciona" data-hscroll style={{ background: 'var(--gray-50)', position: 'relative' }}>
        <div data-hscroll-sticky style={{ top: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', padding: 'clamp(56px,8vw,96px) 0' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)', width: '100%' }}>
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Como funciona</span>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.03, letterSpacing: '-.035em', maxWidth: '18ch' }}>
              Cinco etapas até a sua primeira geração.
            </h2>
          </div>
          <div data-hscroll-track style={{ display: 'flex', gap: 'clamp(16px,2vw,28px)', marginTop: 'clamp(36px,5vw,64px)', padding: '0 clamp(20px,5vw,48px)', willChange: 'transform', transition: 'none' }}>
            {[
              { n: '01', t: 'Analisamos seu consumo', d: 'Basta enviar sua conta de energia.' },
              { n: '02', t: 'Desenvolvemos seu projeto', d: 'Dimensionamos um sistema sob medida para sua necessidade.' },
              { n: '03', t: 'Instalação especializada', d: 'Equipe qualificada realizando toda a instalação.' },
              { n: '04', t: 'Homologação', d: 'Cuidamos de toda a documentação junto à concessionária.' },
            ].map((s) => (
              <article key={s.n} style={{ flex: '0 0 clamp(260px,26vw,380px)', scrollSnapAlign: 'start', background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px,2.4vw,36px)', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 'clamp(260px,30vh,320px)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,4vw,58px)', lineHeight: 1, letterSpacing: '-.05em', color: 'var(--gray-200)' }}>{s.n}</span>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(19px,1.7vw,24px)', letterSpacing: '-.02em', lineHeight: 1.15 }}>{s.t}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)' }}>{s.d}</p>
              </article>
            ))}
            <article style={{ flex: '0 0 clamp(260px,26vw,380px)', scrollSnapAlign: 'start', background: 'var(--navy-900)', color: '#fff', border: '1px solid var(--navy-900)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 'clamp(24px,2.4vw,36px)', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 'clamp(260px,30vh,320px)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,4vw,58px)', lineHeight: 1, letterSpacing: '-.05em', color: 'rgba(255,255,255,.28)' }}>05</span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(19px,1.7vw,24px)', letterSpacing: '-.02em', lineHeight: 1.15 }}>Comece a gerar energia</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.72)' }}>Seu sistema entra em operação e começa a reduzir sua conta de luz.</p>
            </article>
          </div>
          <div style={{ maxWidth: 'var(--content-max)', margin: 'clamp(28px,4vw,44px) auto 0', padding: '0 clamp(20px,5vw,48px)', width: '100%' }}>
            <div style={{ height: 2, background: 'var(--gray-200)', overflow: 'hidden' }}>
              <div data-hscroll-bar style={{ height: '100%', background: 'var(--navy-800)', transform: 'scaleX(.04)', transformOrigin: 'left center', transition: 'transform 80ms linear' }} />
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Destaque" style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--navy-900)', color: '#fff', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,48px)' }}>
        <img
          data-parallax="0.12"
          src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=2400&q=80"
          alt="Painéis solares ao entardecer"
          style={{ position: 'absolute', left: 0, top: '-14%', width: '100%', height: '128%', objectFit: 'cover', opacity: 0.42 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(6,17,29,.78),rgba(6,17,29,.86))' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>
          <h2 data-reveal="mask" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.6vw,64px)', lineHeight: 1.04, letterSpacing: '-.035em', textWrap: 'balance' }}>
            Economia inteligente começa com um bom projeto.
          </h2>
          <p data-reveal="up" data-delay="120" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(18px,2vw,26px)', letterSpacing: '-.02em', color: 'rgba(255,255,255,.8)' }}>
            Não existe projeto igual para todos.
          </p>
          <p data-reveal="up" data-delay="200" style={{ margin: 0, fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.75, color: 'rgba(255,255,255,.66)', maxWidth: '62ch' }}>
            Cada residência, empresa ou propriedade rural possui um perfil de consumo diferente. Por isso, cada sistema desenvolvido pela SC Energia Solar é dimensionado para oferecer máxima eficiência e o melhor retorno sobre o investimento.
          </p>
        </div>
      </section>

      <section data-screen-label="Números" style={{ background: '#fff', padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <div data-reveal="up" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'clamp(36px,5vw,60px)' }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.05, letterSpacing: '-.035em' }}>Resultado que se mede em números.</h2>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Dados consolidados de 2013 a 2026</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 1, background: 'var(--border-subtle)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            <Stat delay={undefined} to="3000" prefix="+" label="Projetos entregues" pad="clamp(28px,3vw,44px) clamp(16px,2vw,28px) clamp(28px,3vw,44px) 0" />
            <Stat delay="100" to="90" suffix="%" label="Até 90% de economia na conta de luz" pad="clamp(28px,3vw,44px) clamp(16px,2vw,28px)" />
            <Stat delay="200" to="8400" prefix="+" label="Toneladas de CO₂ evitadas" pad="clamp(28px,3vw,44px) clamp(16px,2vw,28px)" />
            <Stat delay="300" to="25" suffix="+" label="Anos de vida útil estimada do sistema" pad="clamp(28px,3vw,44px) 0 clamp(28px,3vw,44px) clamp(16px,2vw,28px)" />
          </div>
        </div>
      </section>

      <section id="projetos" data-screen-label="Projetos" style={{ background: 'var(--gray-50)', padding: 'clamp(72px,9vw,130px) 0' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
          <div data-reveal="up" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,5vw,72px)', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Projetos</span>
              <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.03, letterSpacing: '-.035em', maxWidth: '16ch' }}>
                Energia instalada em diferentes realidades.
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: 'clamp(15px,1.2vw,17px)', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '46ch' }}>
              Residências. Empresas. Agronegócio. Cada projeto desenvolvido representa uma solução personalizada para quem busca reduzir custos sem abrir mão da qualidade.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(12px,1.4vw,20px)', padding: '0 clamp(20px,5vw,48px)', maxWidth: 1600, marginLeft: 'auto', marginRight: 'auto' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80', label: 'Residencial · 9,8 kWp', delay: undefined },
            { img: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1400&q=80', label: 'Comercial · 148 kWp', delay: '90' },
            { img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80', label: 'Rural · 62 kWp', delay: '180' },
          ].map((p) => (
            <Link key={p.label} href="/projetos" data-reveal="scale" data-delay={p.delay} className="sc-hover-zoom-wrap" style={{ position: 'relative', display: 'block', height: 'clamp(300px,42vh,440px)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--gray-200)' }}>
              <img data-parallax="0.08" className="sc-hover-zoom-img" src={p.img} alt={p.label} style={{ position: 'absolute', left: 0, top: '-10%', width: '100%', height: '120%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', left: 20, bottom: 18, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff', textShadow: '0 1px 12px rgba(0,0,0,.5)' }}>{p.label}</span>
            </Link>
          ))}
        </div>
        <div style={{ maxWidth: 'var(--content-max)', margin: 'clamp(32px,4vw,48px) auto 0', padding: '0 clamp(20px,5vw,48px)' }}>
          <Link href="/projetos" data-reveal="up" className="sc-link-underline">Ver todos os projetos</Link>
        </div>
      </section>

      <section data-screen-label="Diferenciais" style={{ background: '#fff', padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,6vw,80px)' }}>
          <h2 data-reveal="up" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.03, letterSpacing: '-.035em', maxWidth: '13ch', alignSelf: 'start', position: 'sticky', top: 110 }}>
            Por que escolher a SC Energia Solar?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', t: 'Engenharia especializada', d: 'Projetos desenvolvidos para máxima eficiência.', delay: undefined },
              { n: '02', t: 'Equipamentos certificados', d: 'Tecnologia reconhecida internacionalmente.', delay: '80' },
              { n: '03', t: 'Atendimento completo', d: 'Do primeiro contato ao pós-instalação.', delay: '160' },
              { n: '04', t: 'Transparência', d: 'Sem promessas irreais. Apenas planejamento, engenharia e resultado.', delay: '240', last: true },
            ].map((it) => (
              <div key={it.n} data-reveal="up" data-delay={it.delay} style={{ padding: 'clamp(24px,3vw,34px) 0', borderTop: '1px solid var(--border-subtle)', borderBottom: it.last ? '1px solid var(--border-subtle)' : undefined, display: 'flex', gap: 'clamp(18px,3vw,40px)', alignItems: 'baseline' }}>
                <span style={{ fontSize: 12, color: 'var(--gray-400)', letterSpacing: '.12em', flex: '0 0 auto' }}>{it.n}</span>
                <div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(19px,1.8vw,25px)', letterSpacing: '-.02em' }}>{it.t}</h3>
                  <p style={{ margin: '10px 0 0', fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '42ch' }}>{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="Depoimentos" style={{ background: 'var(--gray-50)', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <span data-reveal="up" style={{ display: 'block', fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Depoimentos</span>
          <div style={{ marginTop: 'clamp(32px,4vw,52px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(16px,2vw,24px)' }}>
            {[
              { q: '"A conta caiu de R$ 780 para R$ 92 no primeiro mês. O projeto foi entregue no prazo combinado."', a: 'Marcelo A. · Residencial · Florianópolis', delay: undefined },
              { q: '"Cuidaram de tudo, inclusive da homologação. Só precisei acompanhar pelo relatório."', a: 'Renata S. · Comercial · Itajaí', delay: '110' },
              { q: '"Na propriedade, energia parada é prejuízo. Desde a instalação não tivemos nenhum problema."', a: 'Jorge M. · Rural · Chapecó', delay: '220' },
            ].map((d) => (
              <figure key={d.a} data-reveal="up" data-delay={d.delay} className="sc-hover-lift" style={{ margin: 0, background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(26px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(17px,1.5vw,21px)', lineHeight: 1.45, letterSpacing: '-.015em' }}>{d.q}</blockquote>
                <figcaption style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{d.a}</figcaption>
              </figure>
            ))}
          </div>
          <div data-reveal="up" style={{ marginTop: 'clamp(48px,6vw,76px)', paddingTop: 'clamp(28px,3vw,40px)', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(24px,5vw,56px)' }}>
            <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gray-400)', flex: '0 0 auto' }}>Equipamentos</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(24px,4vw,52px)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(15px,1.4vw,19px)', letterSpacing: '-.01em', color: 'var(--gray-400)' }}>
              {['Canadian Solar', 'Growatt', 'JA Solar', 'Fronius', 'BYD', 'Deye'].map((b) => <span key={b}>{b}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Sobre" style={{ background: '#fff', padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(36px,6vw,88px)', alignItems: 'center' }}>
          <div data-reveal="up">
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Sobre</span>
            <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.03, letterSpacing: '-.035em' }}>
              Energia limpa.
              <br />
              Tecnologia.
              <br />
              Confiança.
            </h2>
            <p style={{ margin: '26px 0 0', fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '52ch' }}>
              A SC Energia Solar nasceu com um objetivo simples: tornar a geração de energia própria mais acessível, eficiente e segura.
            </p>
            <Link href="/sobre" className="sc-link-underline" style={{ display: 'inline-block', marginTop: 26 }}>Conhecer a empresa</Link>
          </div>
          <div data-reveal="right" className="sc-hover-zoom-wrap" style={{ position: 'relative', height: 'min(62vh,540px)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--gray-100)' }}>
            <img data-parallax="0.09" className="sc-hover-zoom-img" src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80" alt="Usina solar vista de cima" style={{ position: 'absolute', left: 0, top: '-10%', width: '100%', height: '120%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section data-screen-label="FAQ" style={{ background: '#fff', padding: '0 clamp(20px,5vw,48px) clamp(72px,9vw,120px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,5vw,72px)', alignItems: 'start' }}>
          <h2 data-reveal="up" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.05, letterSpacing: '-.035em', maxWidth: '12ch' }}>Perguntas frequentes</h2>
          <div data-reveal="up" data-delay="100">
            <Accordion items={FAQ} />
          </div>
        </div>
      </section>

      <section data-screen-label="CTA final" style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--navy-900)', color: '#fff', padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
        <img data-parallax="0.10" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80" alt="Campo ao entardecer" style={{ position: 'absolute', left: 0, top: '-12%', width: '100%', height: '124%', objectFit: 'cover', opacity: 0.38 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(6,17,29,.72),rgba(6,17,29,.9))' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'flex-start' }}>
          <h2 data-reveal="mask" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5.2vw,72px)', lineHeight: 1.02, letterSpacing: '-.035em', maxWidth: '17ch', textWrap: 'balance' }}>
            A próxima conta de energia pode ser diferente.
          </h2>
          <p data-reveal="up" data-delay="120" style={{ margin: 0, fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,.72)', maxWidth: '58ch' }}>
            Descubra quanto sua residência, empresa ou propriedade rural pode economizar com um projeto desenvolvido especialmente para você.
          </p>
          <div data-reveal="up" data-delay="200" style={{ marginTop: 6 }}>
            <Button variant="secondary" size="lg" onClick={goSimular}>Solicitar meu projeto</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ to, prefix, suffix, label, delay, pad }) {
  return (
    <div data-reveal="up" data-delay={delay} style={{ background: '#fff', padding: pad, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,4.6vw,66px)', lineHeight: 1, letterSpacing: '-.05em', color: 'var(--navy-900)' }}>
        <span data-count-to={to} data-prefix={prefix} data-suffix={suffix}>{`${prefix || ''}${to}${suffix || ''}`}</span>
      </span>
      <span style={{ fontSize: 14, color: 'var(--text-secondary)', letterSpacing: '.01em' }}>{label}</span>
    </div>
  );
}
