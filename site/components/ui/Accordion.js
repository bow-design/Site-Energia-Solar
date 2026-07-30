'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(-1);

  return (
    <div>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(-1)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '18px 4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                font: 'inherit',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--weight-semibold)',
                color: hoverIdx === i ? 'var(--brand-accent)' : 'var(--text-primary)',
                transition: 'color var(--duration-normal) var(--ease-standard)',
              }}
            >
              {it.q}
              <span
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  transition: 'transform var(--duration-normal) var(--ease-standard)',
                  fontSize: 22,
                  color: 'var(--text-secondary)',
                  flexShrink: 0,
                  marginLeft: 16,
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 320ms var(--ease-calm)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p style={{ padding: '0 4px 18px', color: 'var(--text-secondary)' }}>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
