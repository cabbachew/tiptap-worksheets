"use client"

import * as React from "react"
import { Button } from "@/components/tiptap-ui-primitive/button"

type WidthSize = 'small' | 'medium' | 'large'

interface WidthToggleProps {
  onWidthChange: (width: WidthSize) => void
  currentWidth: WidthSize
}

const widthOptions: { size: WidthSize; label: string; maxWidth: string }[] = [
  { size: 'small', label: 'S', maxWidth: '800px' },   // Original
  { size: 'medium', label: 'M', maxWidth: '1000px' }, // Medium
  { size: 'large', label: 'L', maxWidth: '1200px' },  // Large
]

export function WidthToggle({ onWidthChange, currentWidth }: WidthToggleProps) {
  const currentIndex = widthOptions.findIndex(option => option.size === currentWidth)
  const safeCurrentIndex = currentIndex === -1 ? 1 : currentIndex // Default to medium if not found
  
  const cycleWidth = () => {
    const nextIndex = (safeCurrentIndex + 1) % widthOptions.length
    onWidthChange(widthOptions[nextIndex].size)
  }

  const currentOption = widthOptions[safeCurrentIndex]

  return (
    <Button
      onClick={cycleWidth}
      aria-label={`Current width: ${currentOption.label}. Click to cycle to next width.`}
      data-style="ghost"
      title={`Editor width: ${currentOption.maxWidth}`}
    >
      <span className="tiptap-button-icon" style={{ fontWeight: 'bold', fontSize: '14px' }}>
        {currentOption.label}
      </span>
    </Button>
  )
}

export { type WidthSize }