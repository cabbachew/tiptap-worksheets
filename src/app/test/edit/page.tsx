'use client'

import dynamic from 'next/dynamic'
import sampleWorksheet from '@/data/sample-worksheet2.json'

// Use CustomEditor for prototype worksheet editing functionality
const CustomEditor = dynamic(
  () => import('@/components/CustomEditor').then(mod => ({ default: mod.CustomEditor })),
  { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-96">Loading editor...</div>
  }
)

export default function TestEditPage() {
  return (
    <CustomEditor 
      content={sampleWorksheet}
      editable={true}
      logoUrl="/logo.png"
      companyName="Curious Cardinals"
    />
  )
}
