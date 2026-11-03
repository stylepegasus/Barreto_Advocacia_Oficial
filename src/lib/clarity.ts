export function initClarity(clarityId?: string) {
  const cleanId = typeof clarityId === 'string' ? clarityId.trim() : '';
  if (!cleanId) return;
  if (typeof window === 'undefined') return;

  if (document.querySelector(`script[data-clarity-id="${cleanId}"]`)) return;

  const injectClarity = () => {
    if (document.querySelector(`script[data-clarity-id="${cleanId}"]`)) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.dataset.clarityId = cleanId;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${cleanId}");
    `;
    document.head.appendChild(script);
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(injectClarity, { timeout: 3000 });
  } else {
    setTimeout(injectClarity, 1500);
  }
}
