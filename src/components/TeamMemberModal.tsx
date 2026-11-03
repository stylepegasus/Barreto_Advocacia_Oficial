import { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  alt: string;
  description?: string;
  experience: string;
  education: string;
  areas?: string;
  cases: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  titleId?: string;
}

export function TeamMemberModal({
  member,
  onClose,
  titleId = 'team-member-modal-title',
}: TeamMemberModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const bioScrollRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const backdropStartRef = useRef<{ isBackdrop: boolean; x: number; y: number } | null>(null);
  const closeBtnTouchRef = useRef<{ x: number; y: number } | null>(null);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    onCloseRef.current();
  }, []);

  useEffect(() => {
    if (!member) {
      isClosingRef.current = false;
      return;
    }

    isClosingRef.current = false;

    const savedScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;
    const activeTrigger = document.activeElement as HTMLElement | null;
    const rootEl = document.getElementById('root');

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverscroll = document.body.style.overscrollBehavior;
    const prevRootPointerEvents = rootEl ? rootEl.style.pointerEvents : '';
    const prevRootAriaHidden = rootEl ? rootEl.getAttribute('aria-hidden') : null;
    const prevRootInert = rootEl ? rootEl.inert : false;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    if (rootEl) {
      rootEl.inert = true;
      rootEl.setAttribute('aria-hidden', 'true');
      rootEl.style.pointerEvents = 'none';
    }

    if (bioScrollRef.current) {
      bioScrollRef.current.scrollTop = 0;
    }

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus({ preventScroll: true });
    }, 10);

    const handleTouchMove = (e: TouchEvent) => {
      const bioEl = bioScrollRef.current;
      const target = e.target as Node | null;
      if (bioEl && target && bioEl.contains(target)) {
        if (bioEl.scrollHeight > bioEl.clientHeight) {
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus({ preventScroll: true });
          }
        } else {
          if (document.activeElement === last || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault();
            first.focus({ preventScroll: true });
          }
        }
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, true);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown, true);

      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overscrollBehavior = prevBodyOverscroll;

      if (rootEl) {
        rootEl.inert = prevRootInert;
        if (prevRootAriaHidden === null) {
          rootEl.removeAttribute('aria-hidden');
        } else {
          rootEl.setAttribute('aria-hidden', prevRootAriaHidden);
        }
        rootEl.style.pointerEvents = prevRootPointerEvents;
      }

      if (Math.abs(window.scrollY - savedScrollY) > 1) {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior });
      }

      if (
        activeTrigger &&
        typeof activeTrigger.focus === 'function' &&
        document.contains(activeTrigger)
      ) {
        activeTrigger.focus({ preventScroll: true });
      }
    };
  }, [member, handleClose]);

  if (!member || typeof document === 'undefined') {
    return null;
  }

  const mobileTitleId = `${titleId}-mobile`;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
      style={{
        paddingTop: 'max(0.75rem, env(safe-area-inset-top))',
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        paddingLeft: 'max(0.75rem, env(safe-area-inset-left))',
        paddingRight: 'max(0.75rem, env(safe-area-inset-right))',
      }}
      onPointerDown={(e) => {
        backdropStartRef.current = {
          isBackdrop: e.target === e.currentTarget,
          x: e.clientX,
          y: e.clientY,
        };
      }}
      onClick={(e) => {
        e.stopPropagation();
        const start = backdropStartRef.current;
        backdropStartRef.current = null;
        if (
          e.target === e.currentTarget &&
          (!start ||
            (start.isBackdrop &&
              Math.hypot(e.clientX - start.x, e.clientY - start.y) < 16))
        ) {
          handleClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={member.name}
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl mx-auto apple-glass apple-glass-modal apple-glass-static overflow-hidden flex flex-col md:flex-row max-h-[88vh] max-h-[88dvh] sm:max-h-[90vh] sm:max-h-[90dvh]"
      >
        {/* Foto do integrante — sem vidro sobreposto */}
        <div className="w-full md:w-2/5 h-52 sm:h-64 md:h-auto max-h-[38vh] md:max-h-none relative shrink-0">
          <picture>
            <source
              srcSet={member.img.replace(/\.(png|jpe?g)$/i, '.webp')}
              type="image/webp"
            />
            <img
              src={member.img}
              alt={member.alt}
              className="w-full h-full object-cover object-top md:object-center select-none"
              loading="eager"
              decoding="async"
              width="600"
              height="800"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent md:hidden pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-14 md:hidden text-left pointer-events-none">
            <h3
              id={mobileTitleId}
              className="text-xl sm:text-2xl font-serif font-bold text-white"
            >
              {member.name}
            </h3>
          </div>
        </div>

        {/* Biografia rolável */}
        <div
          ref={bioScrollRef}
          tabIndex={0}
          className="w-full md:w-3/5 p-5 sm:p-6 md:p-8 overflow-y-auto min-h-0 flex-1 overscroll-contain text-left focus:outline-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="hidden md:block mb-5 pr-12">
            <h3
              id={titleId}
              className="text-3xl font-serif font-bold text-text-primary mb-2"
            >
              {member.name}
            </h3>
            <p className="text-accent-primary font-medium text-sm">
              {member.role}
            </p>
          </div>
          <div className="md:hidden mb-4">
            <p className="text-accent-primary font-medium text-xs sm:text-sm">
              {member.role}
            </p>
          </div>

          {member.description && (
            <p className="text-text-secondary text-sm leading-relaxed mb-6 pb-5 border-b border-text-primary/10">
              {member.description}
            </p>
          )}

          <div className="space-y-5">
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-accent-primary" />
                Experiência
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {member.experience}
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-accent-primary" />
                Formação
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {member.education}
              </p>
            </div>

            {member.areas && (
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-accent-primary" />
                  Áreas de Atuação
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.areas}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-accent-primary" />
                Casos de Destaque
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {member.cases}
              </p>
            </div>
          </div>
        </div>

        {/* Botão Fechar (X) — Último filho no DOM do modal, fora da área de scroll, área mínima 44x44px */}
        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Fechar perfil"
          title="Fechar"
          className="modal-close-btn"
          onTouchStart={(e) => {
            e.stopPropagation();
            const touch = e.touches[0];
            if (touch) {
              closeBtnTouchRef.current = { x: touch.clientX, y: touch.clientY };
            }
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            const touch = e.changedTouches[0];
            const start = closeBtnTouchRef.current;
            closeBtnTouchRef.current = null;
            if (
              touch &&
              start &&
              Math.hypot(touch.clientX - start.x, touch.clientY - start.y) < 30
            ) {
              if (e.cancelable) e.preventDefault();
              handleClose();
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        >
          <X className="w-5 h-5 pointer-events-none shrink-0" aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

