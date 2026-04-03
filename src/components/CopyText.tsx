import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyTextProps {
  text: string;
  displayText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CopyText({ text, displayText, icon, className = "" }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className={`group relative flex items-center gap-2 hover:text-accent-primary transition-colors ${className}`}
      title="Copiar para a área de transferência"
    >
      {icon}
      <span>{displayText || text}</span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-500" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-text-muted" />
        )}
      </span>
      
      {/* Tooltip de Confirmação */}
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg-secondary border border-text-primary/10 text-text-primary text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200 z-50">
          Copiado!
        </span>
      )}
    </button>
  );
}
