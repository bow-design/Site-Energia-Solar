'use client';

import { useState } from 'react';
import useSiteMotion from '../../hooks/useSiteMotion';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Checkbox from '../../components/ui/Checkbox';

const FAIXAS = [
  { value: '250-400', label: 'R$ 250 a R$ 400', avg: 325 },
  { value: '400-700', label: 'R$ 400 a R$ 700', avg: 550 },
  { value: '700-1200', label: 'R$ 700 a R$ 1.200', avg: 950 },
  { value: '1200-2500', label: 'R$ 1.200 a R$ 2.500', avg: 1850 },
  { value: '2500+', label: 'Acima de R$ 2.500', avg: 4200 },
];

const TIPOS = [
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'rural', label: 'Rural' },
];

function brl(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

export default function ContatoPage() {
  useSiteMotion();
  const [nome, setNome] = useState('');
  const [fone, setFone] = useState('');
  const [cidade, setCidade] = useState('');
  const [tipo, setTipo] = useState('residencial');
  const [faixa, setFaixa] = useState('400-700');
  const [aceite, setAceite] = useState(true);
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const errNome = touched && !nome.trim() ? 'Informe seu nome' : '';
  const errFone = touched && fone.trim().length < 8 ? 'Informe um telefone válido' : '';
  const errCidade = touched && !cidade.trim() ? 'Informe a cidade' : '';

  const f = FAIXAS.find((x) => x.value === faixa) || FAIXAS[1];
  const mes = Math.round(f.avg * 0.9);
  const saudacao = (nome.trim().split(' ')[0] || 'Tudo certo') + ', é isso que o sol pode fazer pela sua conta.';

  const submit = () => {
    const ok = nome.trim() && fone.trim().length >= 8 && cidade.trim() && aceite;
    if (!ok) {
      setTouched(true);
      return;
    }
    setSent(true);
  };

  return (
    <>
      <section data-screen-label="Cabeçalho Contato" style={{ background: '#fff', padding: 'calc(68px + clamp(48px,7vw,96px)) clamp(20px,5vw,48px) clamp(32px,4vw,56px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Contato</span>
          <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5.4vw,74px)', lineHeight: 1, letterSpacing: '-.04em', maxWidth: '16ch' }}>
            A próxima conta de energia pode ser diferente.
          </h1>
          <p style={{ margin: '22px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '58ch' }}>
            Envie os dados abaixo e retornamos em até 24 horas úteis com uma estimativa de economia para o seu perfil de consumo.
          </p>
        </div>
      </section>

      <section id="simulador" data-screen-label="Simulador" style={{ background: '#fff', padding: '0 clamp(20px,5vw,48px) clamp(72px,9vw,120px)', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
          <div style={{ background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'clamp(24px,3vw,44px)' }}>
            {!sent ? (
              <div>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-.025em' }}>Simular minha economia</h2>
                <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>Leva menos de um minuto. Sem compromisso.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18, marginTop: 28 }}>
                  <Input label="Nome completo" placeholder="Como podemos te chamar?" value={nome} onChange={(e) => setNome(e.target.value)} error={errNome} />
                  <Input label="Telefone / WhatsApp" placeholder="(48) 90000-0000" value={fone} onChange={(e) => setFone(e.target.value)} error={errFone} />
                  <Input label="Cidade" placeholder="Onde fica o imóvel?" value={cidade} onChange={(e) => setCidade(e.target.value)} error={errCidade} />
                  <Select label="Tipo de imóvel" options={TIPOS} value={tipo} onChange={(e) => setTipo(e.target.value)} />
                  <Select label="Valor médio da conta de luz" options={FAIXAS.map((x) => ({ value: x.value, label: x.label }))} value={faixa} onChange={(e) => setFaixa(e.target.value)} />
                </div>
                <div style={{ marginTop: 22 }}>
                  <Checkbox label="Autorizo o contato da SC Energia Solar sobre este pedido." checked={aceite} onChange={(e) => setAceite(e.target.checked)} />
                </div>
                <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                  <Button size="lg" onClick={submit}>Ver minha economia</Button>
                  <span style={{ fontSize: 12.5, color: 'var(--text-secondary)', maxWidth: '34ch' }}>
                    Ou envie sua conta pelo WhatsApp <a href="https://wa.me/5548999990000" style={{ color: 'var(--brand-accent)' }}>(48) 99999-0000</a>.
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <span style={{ fontSize: 11, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--brand-accent)' }}>Estimativa preliminar</span>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-.025em', lineHeight: 1.15 }}>{saudacao}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 1, background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <div style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1, letterSpacing: '-.04em', color: 'var(--navy-900)' }}>{brl(mes)}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Economia estimada por mês</span>
                  </div>
                  <div style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1, letterSpacing: '-.04em', color: 'var(--navy-900)' }}>{brl(mes * 12 * 25)}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Em 25 anos de operação</span>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  Número preliminar, calculado sobre a faixa informada e uma média de 90% de compensação. O valor exato sai depois da análise dos últimos 12 meses da sua conta — é o próximo passo que faremos com você.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <Button size="md" onClick={() => window.open('https://wa.me/5548999990000', '_blank')}>Enviar minha conta agora</Button>
                  <Button variant="secondary" size="md" onClick={() => { setSent(false); setTouched(false); }}>Refazer simulação</Button>
                </div>
              </div>
            )}
          </div>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px,2.4vw,30px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Telefone</span>
              <a href="tel:+554830000000" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(19px,1.8vw,24px)', letterSpacing: '-.02em' }}>(48) 3000-0000</a>
              <a href="https://wa.me/5548999990000" style={{ fontSize: 15, color: 'var(--brand-accent)' }}>WhatsApp (48) 99999-0000</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 'clamp(20px,2.4vw,30px)', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>E-mail</span>
              <a href="mailto:contato@scenergiasolar.com.br" style={{ fontSize: 16 }}>contato@scenergiasolar.com.br</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 'clamp(20px,2.4vw,30px)', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Escritório</span>
              <span style={{ fontSize: 16, lineHeight: 1.6 }}>Rua das Palmeiras, 250 — Centro<br />Florianópolis · SC</span>
              <span style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>Segunda a sexta, 8h às 18h</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 'clamp(20px,2.4vw,30px)', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Instagram</span>
              <a href="https://www.instagram.com/scenergiasolar" style={{ fontSize: 16 }}>@scenergiasolar</a>
            </div>
          </aside>
        </div>
      </section>

      <section data-screen-label="Cobertura" style={{ background: 'var(--gray-50)', padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Área de cobertura</span>
              <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.4vw,46px)', lineHeight: 1.05, letterSpacing: '-.035em', maxWidth: '16ch' }}>
                Atendemos todo o estado de Santa Catarina.
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '38ch' }}>
              Equipe própria no litoral, vale e planalto. Projetos fora do estado sob consulta.
            </p>
          </div>
          <div style={{ marginTop: 'clamp(28px,3.5vw,44px)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', background: '#fff' }}>
            <iframe
              src="/mapa-cobertura.html"
              title="Mapa da área de cobertura da SC Energia Solar em Santa Catarina"
              loading="lazy"
              style={{ display: 'block', width: '100%', height: 'clamp(360px,52vh,520px)', border: 0 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
