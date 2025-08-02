interface WorksheetBrandingProps {
  logoUrl?: string
  companyName?: string
  showBranding?: boolean
}

export default function WorksheetBranding({ 
  logoUrl = '/logo.png',
  companyName = 'Curious Cardinals',
  showBranding = true 
}: WorksheetBrandingProps) {
  if (!showBranding) return null

  return (
    <div className="worksheet-branding flex justify-start py-4 mb-6">
      {logoUrl && (
        <img 
          src={logoUrl} 
          alt={`${companyName} logo`}
          className="w-8 h-8 object-contain"
        />
      )}
    </div>
  )
}