'use client'

import dynamic from 'next/dynamic'
import sampleWorksheet from '@/data/sample-worksheet2.json'

// Use CustomEditor in view-only mode for prototype worksheet viewing functionality
const CustomEditor = dynamic(
  () => import('@/components/CustomEditor').then(mod => ({ default: mod.CustomEditor })),
  { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-96">Loading viewer...</div>
  }
)

export default function TestViewPage() {
  return (
    <CustomEditor 
      content={sampleWorksheet}
      editable={false}
      logoUrl="/logo.png"
      companyName="Curious Cardinals"
    />
  )
}