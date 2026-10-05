'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, Strikethrough, Code, Heading2, List, ListOrdered, Quote } from 'lucide-react';
import { useEffect } from 'react';

export function RichTextEditor({ 
  value, 
  onChange,
  onBlur
}: { 
  value: string;
  onChange: (val: string) => void;
  onBlur?: () => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      })
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onBlur: () => {
      if (onBlur) onBlur();
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-sm max-w-none focus:outline-none min-h-[300px] h-full',
      },
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value && value !== '') {
      // only update if drastically changed from outside, else let tiptap handle it
      // this prevents cursor jumping on every keystroke
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  const toggle = (chain: any) => chain.run();

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-wrap gap-1 mb-4 p-2 bg-white/5 border border-white/10 rounded-xl shrink-0">
        <button
          onClick={() => toggle(editor.chain().focus().toggleBold())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('bold') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <Bold size={14} />
        </button>
        <button
          onClick={() => toggle(editor.chain().focus().toggleItalic())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('italic') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <Italic size={14} />
        </button>
        <button
          onClick={() => toggle(editor.chain().focus().toggleStrike())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('strike') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <Strikethrough size={14} />
        </button>
        <button
          onClick={() => toggle(editor.chain().focus().toggleCode())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('code') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <Code size={14} />
        </button>
        
        <div className="w-px h-6 bg-white/10 mx-1 self-center" />
        
        <button
          onClick={() => toggle(editor.chain().focus().toggleHeading({ level: 2 }))}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <Heading2 size={14} />
        </button>
        <button
          onClick={() => toggle(editor.chain().focus().toggleBulletList())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('bulletList') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <List size={14} />
        </button>
        <button
          onClick={() => toggle(editor.chain().focus().toggleOrderedList())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('orderedList') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <ListOrdered size={14} />
        </button>
        <button
          onClick={() => toggle(editor.chain().focus().toggleBlockquote())}
          className={`p-1.5 rounded-md transition-colors ${editor.isActive('blockquote') ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
        >
          <Quote size={14} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
}
