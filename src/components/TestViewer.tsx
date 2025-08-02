import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import sampleWorksheet from '@/data/sample-worksheet.json'

export default function TestViewer() {
  return (
    <SimpleEditor 
      content={sampleWorksheet}
      editable={false}
      logoUrl="/logo.png"
      companyName="Curious Cardinals"
    />
  )
}