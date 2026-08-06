export function initClarity(clarityId?: string) {
  if (!clarityId) return;
  if (typeof window === 'undefined') return;

  // Don't inject if it already exists
  if (document.querySelector(`script[data-clarity-id="${clarityId}"]`)) return;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.dataset.clarityId = clarityId;
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  `;

  document.head.appendChild(script);
}
