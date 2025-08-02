'use client'

import dynamic from 'next/dynamic'

// ORIGINAL TIPTAP SIMPLE UI TEMPLATE - NO CUSTOM FEATURES
// Exact replica of https://template.tiptap.dev/preview/templates/simple
const SimpleUiEditor = dynamic(
  () => import('@/components/SimpleUiEditor').then(mod => ({ default: mod.SimpleUiEditor })),
  { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-96">Loading editor...</div>
  }
)

export default function Home() {
  // Root page = Pure Tiptap Simple UI template, no modifications
  return <SimpleUiEditor />
}
