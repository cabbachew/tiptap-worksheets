// CUSTOM EDITOR FOR TEST ROUTES - PROTOTYPE WITH CUSTOM FEATURES
// This is the enhanced version with logo, width controls, sharing, light theme
// DO NOT USE FOR ROOT PAGE - USE SimpleUiEditor FOR THAT
// Used for: /test/edit and /test/view routes

"use client"

import * as React from "react"
import { EditorContent, EditorContext, useEditor } from "@tiptap/react"

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit"
import { Image } from "@tiptap/extension-image"
import { TaskItem, TaskList } from "@tiptap/extension-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Selection } from "@tiptap/extensions"

// --- UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button"
import { Spacer } from "@/components/tiptap-ui-primitive/spacer"
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar"

// --- Tiptap Node ---
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension"
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension"
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss"
import "@/components/tiptap-node/code-block-node/code-block-node.scss"
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss"
import "@/components/tiptap-node/list-node/list-node.scss"
import "@/components/tiptap-node/image-node/image-node.scss"
import "@/components/tiptap-node/heading-node/heading-node.scss"
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss"

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu"
import { ImageUploadButton } from "@/components/tiptap-ui/image-upload-button"
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu"
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button"
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button"
import {
  ColorHighlightPopover,
  ColorHighlightPopoverContent,
  ColorHighlightPopoverButton,
} from "@/components/tiptap-ui/color-highlight-popover"
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "@/components/tiptap-ui/link-popover"
import { MarkButton } from "@/components/tiptap-ui/mark-button"
import { TextAlignButton } from "@/components/tiptap-ui/text-align-button"
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button"

// --- Icons ---
import { ArrowLeftIcon } from "@/components/tiptap-icons/arrow-left-icon"

// --- Custom Components ---
import { WidthToggle, type WidthSize } from "@/components/WidthToggle"
import { CopyViewLinkButton } from "@/components/CopyViewLinkButton"
import { HighlighterIcon } from "@/components/tiptap-icons/highlighter-icon"
import { LinkIcon } from "@/components/tiptap-icons/link-icon"

// --- Hooks ---
import { useIsMobile } from "@/hooks/use-mobile"
import { useWindowSize } from "@/hooks/use-window-size"
import { useCursorVisibility } from "@/hooks/use-cursor-visibility"
import { useScrolling } from "@/hooks/use-scrolling"

// --- Components ---
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle"

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils"

// --- Styles ---
import "@/components/tiptap-templates/simple/simple-editor.scss"

// VIEW-ONLY TOOLBAR: Logo left, width/share/theme right
const ViewOnlyToolbarContent = ({
  showLogo = false,
  logoUrl,
  companyName,
  editorWidth,
  onWidthChange,
}: {
  showLogo?: boolean
  logoUrl?: string
  companyName?: string
  editorWidth: WidthSize
  onWidthChange: (width: WidthSize) => void
}) => {
  return (
    <>
      {showLogo && logoUrl && (
        <ToolbarGroup>
          <img 
            src={logoUrl} 
            alt={`${companyName} logo`}
            className="w-6 h-6 object-contain"
          />
        </ToolbarGroup>
      )}
      
      <Spacer />
      
      <ToolbarGroup>
        <WidthToggle currentWidth={editorWidth} onWidthChange={onWidthChange} />
        <CopyViewLinkButton isEditMode={false} />
        <ThemeToggle />
      </ToolbarGroup>
    </>
  )
}

// MAIN TOOLBAR: Logo left, editing tools center, width/share/theme right
const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
  showLogo = false,
  logoUrl,
  companyName,
  editorWidth,
  onWidthChange,
  isEditMode = true,
}: {
  onHighlighterClick: () => void
  onLinkClick: () => void
  isMobile: boolean
  showLogo?: boolean
  logoUrl?: string
  companyName?: string
  editorWidth: WidthSize
  onWidthChange: (width: WidthSize) => void
  isEditMode?: boolean
}) => {
  return (
    <>
      {showLogo && logoUrl && (
        <ToolbarGroup>
          <img 
            src={logoUrl} 
            alt={`${companyName} logo`}
            className="w-6 h-6 object-contain"
          />
        </ToolbarGroup>
      )}
      
      <Spacer />

      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu
          types={["bulletList", "orderedList", "taskList"]}
          portal={isMobile}
        />
        <BlockquoteButton />
        <CodeBlockButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
      </ToolbarGroup>

      <Spacer />

      {isMobile && <ToolbarSeparator />}

      <ToolbarGroup>
        <WidthToggle currentWidth={editorWidth} onWidthChange={onWidthChange} />
        <CopyViewLinkButton isEditMode={isEditMode} />
        <ThemeToggle />
      </ToolbarGroup>
    </>
  )
}

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link"
  onBack: () => void
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
)

interface CustomEditorProps {
  content?: any
  onChange?: (content: any) => void
  editable?: boolean
  showToolbar?: boolean
  logoUrl?: string
  companyName?: string
}

// CUSTOM EDITOR - PROTOTYPE WITH ALL CUSTOM FEATURES
export function CustomEditor({ 
  content,
  onChange,
  editable = true,
  showToolbar = true,
  logoUrl,
  companyName
}: CustomEditorProps = {}) {
  const isMobile = useIsMobile()
  const windowSize = useWindowSize()
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main")
  const [editorWidth, setEditorWidth] = React.useState<WidthSize>("medium")
  const toolbarRef = React.useRef<HTMLDivElement>(null)

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editable,
    content,
    onUpdate: onChange ? ({ editor }) => onChange(editor.getJSON()) : undefined,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Custom worksheet content area, start typing to edit.",
        class: "simple-editor",
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
  })

  const isScrolling = useScrolling()
  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  })

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main")
    }
  }, [isMobile, mobileView])

  return (
    <div className="simple-editor-wrapper">
      <EditorContext.Provider value={{ editor }}>
        {showToolbar && (
          <Toolbar
            ref={toolbarRef}
            style={{
              ...(isScrolling && isMobile
                ? { opacity: 0, transition: "opacity 0.1s ease-in-out" }
                : {}),
              ...(isMobile
                ? {
                    bottom: `calc(100% - ${windowSize.height - rect.y}px)`,
                  }
                : {}),
            }}
          >
            {!editable ? (
              <ViewOnlyToolbarContent
                showLogo={!!logoUrl}
                logoUrl={logoUrl}
                companyName={companyName}
                editorWidth={editorWidth}
                onWidthChange={setEditorWidth}
              />
            ) : mobileView === "main" ? (
              <MainToolbarContent
                onHighlighterClick={() => setMobileView("highlighter")}
                onLinkClick={() => setMobileView("link")}
                isMobile={isMobile}
                showLogo={!!logoUrl}
                logoUrl={logoUrl}
                companyName={companyName}
                editorWidth={editorWidth}
                onWidthChange={setEditorWidth}
                isEditMode={editable}
              />
            ) : (
              <MobileToolbarContent
                type={mobileView === "highlighter" ? "highlighter" : "link"}
                onBack={() => setMobileView("main")}
              />
            )}
          </Toolbar>
        )}

        <EditorContent
          editor={editor}
          role="presentation"
          className="simple-editor-content"
          style={{
            maxWidth: editorWidth === 'small' ? '800px' : editorWidth === 'medium' ? '1000px' : '1200px',
            margin: '0 auto',
            padding: '2rem'
          }}
        />
      </EditorContext.Provider>
    </div>
  )
}