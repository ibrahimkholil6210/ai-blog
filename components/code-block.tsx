"use client";

import { useEffect, useState } from 'react';
import { getHighlighter } from 'shiki';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  useEffect(() => {
    async function highlight() {
      const highlighter = await getHighlighter({
        theme: 'github-dark',
        langs: [language],
      });

      const html = highlighter.codeToHtml(code, { lang: language });
      setHighlightedCode(html);
    }

    highlight();
  }, [code, language]);

  return (
    <div className="relative rounded-lg overflow-hidden my-6">
      <div className="absolute top-0 right-0 px-4 py-2 rounded-bl bg-muted text-sm">
        {language}
      </div>
      <div 
        className="p-4 bg-[#0d1117] overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlightedCode }} 
      />
    </div>
  );
}