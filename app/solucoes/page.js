'use client';

import { useRouter } from 'next/navigation';
import useSiteMotion from '../../hooks/useSiteMotion';
import Button from '../../components/ui/Button';

export default function SolucoesPage() {
  useSiteMotion();
  const router = useRouter();
  const goSimular = () => router.push('/contato#simulador');

  return (
    <>
      <section data-screen-label="Hero Soluções" style={{ position: 'relative', height: '66vh', minHeight: 440, overflow: 'hidden', background: 'var(--navy-900)', display: 'flex', alignItems: 'flex-end' }}>
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80" alt="Painéis solares" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(4,14,24,.6),rgba(4,14,24,.78))' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%', padding: '0 clamp(20px,5vw,48px) clamp(48px,6vw,80px)', color: '#fff' }}>
          <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,.66)' }}>Soluções</span>
          <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5.4vw,74px)', lineHeight: 1, letterSpacing: '-.035em', maxWidth: '15ch' }}>
            Sistemas dimensionados para o seu consumo.
          </h1>
          <p style={{ margin: '22px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,.76)', maxWidth: '56ch' }}>
            Residências, empresas e propriedades rurais têm perfis de consumo diferentes. O projeto muda — o cuidado com a engenharia, não.
          </p>
        </div>
      </section>

      <SolutionBlock
        id="residencial"
        reveal="left"
        index="01 — Residencial"
        title="Transforme sua casa em uma fonte inteligente de energia."
        text="Sistemas de 2 a 15 kWp, projetados a partir do histórico dos últimos 12 meses da sua conta. Instalação limpa, discreta e acompanhada por relatório de geração."
        items={['Análise da conta e dimensionamento sem custo', 'Estruturas para telhado cerâmico, metálico ou laje', 'Monitoramento de geração pelo celular']}
        img="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=1600&q=80"
        cta="Simular minha economia"
        onCta={goSimular}
        bg="#fff"
        imgFirst
      />

      <SolutionBlock
        id="comercial"
        reveal="up"
        index="02 — Comercial"
        title="Reduza custos operacionais e ganhe competitividade."
        text="Projetos de 20 a 500 kWp para comércio, indústria e prestadores de serviço, com estudo de viabilidade, payback e enquadramento tarifário."
        items={['Estudo de payback e retorno sobre o investimento', 'Geração remota e compensação entre unidades', 'Execução com equipe própria e cronograma definido']}
        img="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1600&q=80"
        cta="Falar com um engenheiro"
        onCta={goSimular}
        bg="var(--gray-50)"
      />

      <SolutionBlock
        id="rural"
        reveal="left"
        index="03 — Rural"
        title="Energia confiável para quem depende de produtividade."
        text="Irrigação, resfriadores, aviários e sala de ordenha exigem energia estável. Projetamos com folga de geração e estruturas preparadas para o campo."
        items={['Usinas de solo e estruturas para galpões', 'Compensação em múltiplas matrículas rurais', 'Linhas de crédito rural para financiamento']}
        img="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1600&q=80"
        cta="Solicitar análise"
        onCta={goSimular}
        bg="#fff"
        imgFirst
      />

      <section data-screen-label="CTA Soluções" style={{ background: 'var(--navy-900)', color: '#fff', padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 data-reveal="up" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.05, letterSpacing: '-.035em', maxWidth: '18ch' }}>
            Não sabe qual solução é a sua? Nós dizemos em 24 horas.
          </h2>
          <div data-reveal="up" data-delay="100">
            <Button variant="secondary" size="lg" onClick={goSimular}>Enviar minha conta de luz</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function SolutionBlock({ id, reveal, index, title, text, items, img, cta, onCta, bg, imgFirst }) {
  const imageBlock = (
    <div data-reveal={reveal} className="sc-hover-zoom-wrap" style={{ position: 'relative', height: 'min(72vh,600px)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--gray-100)' }}>
      <img data-parallax="0.09" className="sc-hover-zoom-img" src={img} alt={title} style={{ position: 'absolute', left: 0, top: '-10%', width: '100%', height: '120%', objectFit: 'cover' }} />
    </div>
  );
  const textBlock = (
    <div data-reveal="up" data-delay="100">
      <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>{index}</span>
      <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4vw,54px)', lineHeight: 1.03, letterSpacing: '-.035em', maxWidth: '14ch' }}>{title}</h2>
      <p style={{ margin: '22px 0 0', fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '50ch' }}>{text}</p>
      <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) => (
          <span key={it} style={{ padding: '14px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: i === items.length - 1 ? '1px solid var(--border-subtle)' : undefined, fontSize: 15, color: 'var(--text-primary)' }}>
            {it}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 30 }}>
        <Button size="md" onClick={onCta}>{cta}</Button>
      </div>
    </div>
  );

  return (
    <section id={id} data-screen-label={index} style={{ background: bg, padding: 'clamp(72px,9vw,130px) clamp(20px,5vw,48px)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(36px,6vw,80px)', alignItems: 'center' }}>
        {imgFirst ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
