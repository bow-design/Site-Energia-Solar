'use client';

import { useState } from 'react';

export default function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%' }}>
      {label && (
        <span style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--weight-medium)', color: 'var(--text-secondary)' }}>
          {label}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: 'inherit',
          fontSize: 'var(--text-body)',
          padding: '11px 14px',
          borderRadius: 'var(--radius-md)',
          border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--brand-accent)' : 'var(--border-strong)'}`,
          outline: 'none',
          boxShadow: focus ? 'var(--shadow-focus)' : 'none',
          transition: 'box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        }}
      />
      {error && <span style={{ fontSize: 'var(--text-micro)', color: 'var(--danger)' }}>{error}</span>}
    </label>
  );
}
