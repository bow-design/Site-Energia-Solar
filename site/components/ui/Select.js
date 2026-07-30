'use client';

export default function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%' }}>
      {label && (
        <span style={{ fontSize: 'var(--text-small)', fontWeight: 'var(--weight-medium)', color: 'var(--text-secondary)' }}>
          {label}
        </span>
      )}
      <select
        value={value}
        onChange={onChange}
        style={{
          font: 'inherit',
          fontSize: 'var(--text-body)',
          padding: '11px 14px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-strong)',
          background: 'var(--white)',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
