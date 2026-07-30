'use client';

export default function Checkbox({ label, checked, onChange }) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 'var(--radius-sm)',
          flexShrink: 0,
          border: `1px solid ${checked ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--brand-primary)' : 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background var(--duration-fast) var(--ease-standard)',
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M1 6l3.2 3.2L11 2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      {label}
    </label>
  );
}
