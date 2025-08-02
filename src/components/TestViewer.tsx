'use client'

import dynamic from 'next/dynamic'

// Dynamically import SimpleEditor to avoid SSR hydration issues
const SimpleEditor = dynamic(
  () => import('@/components/tiptap-templates/simple/simple-editor').then(mod => ({ default: mod.SimpleEditor })),
  { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-96">Loading editor...</div>
  }
)

interface TestViewerProps {
  content?: any
}

export default function TestViewer({ content }: TestViewerProps) {
  return (
    <SimpleEditor
      content={content}
      editable={false}
      logoUrl="/logo.png"
      companyName="Curious Cardinals"
    />
  );
}
