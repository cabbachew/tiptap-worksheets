import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import sampleWorksheet from '@/data/sample-worksheet.json'

export default function TestEditPage() {
  return (
    <SimpleEditor 
      content={sampleWorksheet}
      editable={true}
      logoUrl="/logo.png"
      companyName="Curious Cardinals"
    />
  )
}