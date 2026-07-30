'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Row of image panels. Hovering one grows it and shrinks its siblings,
 * with a calm easing — matches the "abrir maior a que o mouse está em
 * cima" request for the Soluções section.
 */
export default function HoverExpandPanels({ items }) {
  const [hovered, setHovered] = useState(-1);

  return (
    <div
      style={{
        marginTop: 'clamp(40px,5vw,64px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        background: 'var(--gray-200)',
      }}
    >
      {items.map((item, i) => {
        const isHovered = hovered === i;
        const isOtherHovered = hovered !== -1 && hovered !== i;
        return (
          <Link
            key={item.href}
            href={item.href}
            data-reveal="up"
            data-delay={i * 120}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
            className="sc-panel"
            style={{
              position: 'relative',
              display: 'block',
              height: 'min(78vh,660px)',
              overflow: 'hidden',
              background: 'var(--navy-900)',
              color: '#fff',
              flexGrow: isHovered ? 2.15 : isOtherHovered ? 0.78 : 1,
              flexShrink: 1,
              flexBasis: 0,
              minWidth: 220,
              transition: 'flex-grow 2400ms cubic-bezier(.22,1,.36,1)',
              willChange: 'flex-grow',
            }}
          >
            <img
              src={item.img}
              alt={item.alt}
              style={{
                position: 'absolute',
                left: 0,
                top: '-8%',
                width: '100%',
                height: '116%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                filter: isOtherHovered ? 'saturate(.75) brightness(.85)' : 'none',
                transition: 'transform 2400ms cubic-bezier(.22,1,.36,1), filter 2400ms cubic-bezier(.22,1,.36,1)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg,rgba(4,14,24,.12) 40%,rgba(4,14,24,.82) 100%)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: 'clamp(24px,3vw,40px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                opacity: isOtherHovered ? 0.55 : 1,
                transition: 'opacity 900ms var(--ease-standard)',
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,.66)' }}>
                {item.index}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,2.6vw,36px)', letterSpacing: '-.03em', lineHeight: 1 }}>
                {item.title}
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,.82)',
                  maxWidth: '30ch',
                  maxHeight: isHovered ? 100 : 0,
                  opacity: isHovered ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 900ms var(--ease-standard), opacity 900ms var(--ease-standard)',
                }}
              >
                {item.desc}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
