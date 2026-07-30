'use client';

import { useState } from 'react';

const sizeStyles = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-small)' },
  md: { padding: '12px 22px', fontSize: 'var(--text-body)' },
  lg: { padding: '15px 28px', fontSize: 'var(--text-body-lg)' },
};

const variantStyles = {
  primary: { background: 'var(--action-bg)', color: 'var(--action-fg)', border: '1px solid var(--action-bg)' },
  secondary: { background: 'var(--action-secondary-bg)', color: 'var(--action-secondary-fg)', border: '1px solid var(--action-secondary-border)' },
  accent: { background: 'var(--brand-accent)', color: 'var(--white)', border: '1px solid var(--brand-accent)' },
  ghost: { background: 'transparent', color: 'var(--action-secondary-fg)', border: '1px solid transparent' },
};

const hoverBgByVariant = {
  primary: 'var(--action-bg-hover)',
  secondary: 'var(--gray-100)',
  accent: 'var(--navy-700)',
  ghost: 'var(--gray-100)',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  style,
}) {
  const [hover, setHover] = useState(false);
  const v = variantStyles[variant] || variantStyles.primary;
  const hoverBg = hoverBgByVariant[variant];

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: `background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)`,
        opacity: disabled ? 0.45 : 1,
        transform: hover && !disabled ? 'translateY(-2px)' : 'none',
        boxShadow: hover && !disabled ? 'var(--shadow-md)' : 'none',
        ...sizeStyles[size],
        ...v,
        ...(hover && !disabled ? { background: hoverBg } : {}),
        ...style,
      }}
    >
      {children}
    </button>
  );
}
