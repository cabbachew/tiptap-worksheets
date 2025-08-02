"use client"

import * as React from "react"
import { Button } from "@/components/tiptap-ui-primitive/button"
import { ExternalLinkIcon } from "@/components/tiptap-icons/external-link-icon"

interface CopyViewLinkButtonProps {
  isEditMode?: boolean
}

export function CopyViewLinkButton({ isEditMode = false }: CopyViewLinkButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const copyViewLink = async () => {
    try {
      const currentUrl = window.location.href
      const viewUrl = isEditMode 
        ? currentUrl.replace('/test/edit', '/test/view')
        : currentUrl
      
      await navigator.clipboard.writeText(viewUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <Button
      onClick={copyViewLink}
      aria-label={copied ? "Link copied!" : "Copy view-only link"}
      data-style="ghost"
      title={copied ? "Link copied!" : "Copy view-only link"}
    >
      {copied ? (
        <span className="tiptap-button-icon" style={{ fontSize: '14px', fontWeight: 'bold', color: 'green' }}>
          ✓
        </span>
      ) : (
        <ExternalLinkIcon className="tiptap-button-icon" />
      )}
    </Button>
  )
}