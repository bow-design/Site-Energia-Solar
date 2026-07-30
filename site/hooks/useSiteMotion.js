'use client';

import { useEffect } from 'react';

const EASE = 'cubic-bezier(.16,1,.3,1)';
const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function fmt(n, decimals) {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function initMotion(root) {
  if (!root) return () => {};
  const seen = new WeakSet();
  const parallax = [];
  const reduced = prefersReduced();

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        e.target.style.filter = 'none';
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  const counterIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        counterIO.unobserve(el);
        const to = parseFloat(el.dataset.countTo);
        const dec = parseInt(el.dataset.decimals || '0', 10);
        const pre = el.dataset.prefix || '';
        const suf = el.dataset.suffix || '';
        if (reduced) {
          el.textContent = pre + fmt(to, dec) + suf;
          return;
        }
        const dur = 1700;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + fmt(to * eased, dec) + suf;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 }
  );

  function scan() {
    root.querySelectorAll('[data-reveal]').forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      const delay = parseFloat(el.dataset.delay || '0');
      el.style.willChange = 'opacity, transform';
      el.style.transition = `opacity 1000ms ${EASE} ${delay}ms, transform 1000ms ${EASE} ${delay}ms, filter 1000ms ${EASE} ${delay}ms`;
      if (reduced) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) return;
      const kind = el.dataset.reveal;
      el.style.opacity = '0';
      if (kind === 'left') el.style.transform = 'translateX(-48px)';
      else if (kind === 'right') el.style.transform = 'translateX(48px)';
      else if (kind === 'scale') el.style.transform = 'scale(1.05)';
      else if (kind === 'mask') {
        el.style.transform = 'translateY(24px)';
        el.style.filter = 'blur(6px)';
      } else el.style.transform = 'translateY(44px)';
      io.observe(el);
    });

    root.querySelectorAll('[data-count-to]').forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      counterIO.observe(el);
    });

    root.querySelectorAll('[data-parallax]').forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      parallax.push({ el, speed: parseFloat(el.dataset.parallax) || 0.15 });
    });
  }

  function layoutH() {
    root.querySelectorAll('[data-hscroll]').forEach((sec) => {
      const sticky = sec.querySelector('[data-hscroll-sticky]');
      const track = sec.querySelector('[data-hscroll-track]');
      if (!sticky || !track) return;
      const narrow = window.innerWidth < 900 || reduced;
      if (narrow) {
        sec.style.height = 'auto';
        sticky.style.position = 'static';
        sticky.style.height = 'auto';
        track.style.transform = 'none';
        track.style.overflowX = 'auto';
        track.style.scrollSnapType = 'x mandatory';
        track.style.paddingBottom = '24px';
      } else {
        sticky.style.position = 'sticky';
        sticky.style.height = '100vh';
        track.style.overflowX = 'visible';
        const dist = Math.max(0, track.scrollWidth - window.innerWidth + 64);
        sec.dataset.hdist = String(dist);
        sec.style.height = window.innerHeight + dist + 'px';
      }
    });
  }

  function onScroll() {
    const vh = window.innerHeight;
    parallax.forEach(({ el, speed }) => {
      const host = el.parentElement || el;
      const r = host.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const center = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-center * speed).toFixed(2)}px, 0)`;
    });

    root.querySelectorAll('[data-hscroll]').forEach((sec) => {
      const track = sec.querySelector('[data-hscroll-track]');
      const bar = sec.querySelector('[data-hscroll-bar]');
      if (!track) return;
      if (window.innerWidth < 900 || reduced) {
        if (bar) bar.style.transform = 'scaleX(1)';
        return;
      }
      const dist = parseFloat(sec.dataset.hdist || '0');
      const top = sec.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, -top / Math.max(1, dist)));
      track.style.transform = `translate3d(${(-p * dist).toFixed(2)}px,0,0)`;
      if (bar) bar.style.transform = `scaleX(${(0.04 + p * 0.96).toFixed(3)})`;
    });
  }

  let ticking = false;
  const rafScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      onScroll();
    });
  };

  const mo = new MutationObserver(() => {
    scan();
    layoutH();
    rafScroll();
  });
  mo.observe(root, { childList: true, subtree: true });

  scan();
  layoutH();
  onScroll();

  const onResize = () => {
    layoutH();
    rafScroll();
  };
  window.addEventListener('scroll', rafScroll, { passive: true });
  window.addEventListener('resize', onResize);

  return () => {
    mo.disconnect();
    io.disconnect();
    counterIO.disconnect();
    window.removeEventListener('scroll', rafScroll);
    window.removeEventListener('resize', onResize);
  };
}

export default function useSiteMotion() {
  useEffect(() => {
    const stop = initMotion(document.body);
    return () => stop();
  }, []);
}
