'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';

const LINKS = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'solucoes', href: '/solucoes', label: 'Soluções' },
  { key: 'projetos', href: '/projetos', label: 'Projetos' },
  { key: 'como', href: '/#como-funciona', label: 'Como Funciona' },
  { key: 'sobre', href: '/sobre', label: 'Sobre' },
  { key: 'contato', href: '/contato', label: 'Contato' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const overlay = !pathname.startsWith('/contato');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !overlay || scrolled;
  const activeKey =
    pathname === '/' ? 'home' :
    pathname.startsWith('/solucoes') ? 'solucoes' :
    pathname.startsWith('/projetos') ? 'projetos' :
    pathname.startsWith('/sobre') ? 'sobre' :
    pathname.startsWith('/contato') ? 'contato' : '';

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          height: 68,
          padding: '0 clamp(18px,4vw,44px)',
          color: solid ? 'var(--gray-900)' : '#fff',
          background: solid ? 'rgba(255,255,255,.78)' : 'transparent',
          backdropFilter: solid ? 'var(--blur-glass)' : 'none',
          WebkitBackdropFilter: solid ? 'var(--blur-glass)' : 'none',
          borderBottom: `1px solid ${solid ? 'rgba(8,27,46,.08)' : 'transparent'}`,
          transition:
            'background 320ms cubic-bezier(.4,0,.2,1), color 320ms cubic-bezier(.4,0,.2,1), border-color 320ms, box-shadow 320ms',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0, color: 'inherit' }}>
          <Image
            src="/assets/logo-mark.png"
            alt="Empresa Solar"
            width={28}
            height={14}
            style={{
              height: 28,
              width: 'auto',
              filter: solid ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 320ms cubic-bezier(.4,0,.2,1)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 10.5,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              lineHeight: 1,
              color: 'inherit',
              whiteSpace: 'nowrap',
            }}
          >
            Energia Solar
          </span>
        </Link>

        <div className="sc-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.2vw,30px)' }}>
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="sc-nav-link"
              data-active={activeKey === l.key}
              style={{
                fontSize: 13,
                fontWeight: activeKey === l.key ? 700 : 500,
                letterSpacing: '.01em',
                color: 'inherit',
                padding: '8px 2px',
                opacity: activeKey === l.key ? 1 : 0.88,
                transition: 'opacity 200ms',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span className="sc-navcta" style={{ display: 'inline-flex' }}>
            <Button
              variant={solid ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => { window.location.href = '/contato#simulador'; }}
            >
              Simular economia
            </Button>
          </span>
          <button
            className="sc-burger"
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 20 }}>
              <span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 2 }} />
              <span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 2 }} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(255,255,255,.97)',
            backdropFilter: 'var(--blur-glass)',
            WebkitBackdropFilter: 'var(--blur-glass)',
            display: 'flex',
            flexDirection: 'column',
            padding: '22px clamp(18px,6vw,44px) 40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 46 }}>
            <Image src="/assets/logo-mark.png" alt="Empresa Solar" width={26} height={13} style={{ height: 26, width: 'auto' }} />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              style={{ width: 40, height: 40, border: 'none', background: 'transparent', fontSize: 26, lineHeight: 1, color: 'var(--gray-900)', cursor: 'pointer' }}
            >
              ×
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 38 }}>
            {LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px,8vw,40px)',
                  fontWeight: 800,
                  letterSpacing: '-.03em',
                  color: 'var(--gray-900)',
                  padding: '10px 0',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href="/contato#simulador"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 52,
                borderRadius: 'var(--radius-pill)',
                background: 'var(--action-bg)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Simular minha economia
            </a>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '.02em' }}>
              (48) 3000-0000 · contato@scenergiasolar.com.br
            </span>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 1040px) {
          .sc-navlinks { display: none !important; }
          .sc-burger { display: inline-flex !important; }
        }
        @media (max-width: 560px) {
          .sc-navcta { display: none !important; }
        }
      `}</style>
    </>
  );
}
