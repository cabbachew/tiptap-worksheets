# Curious Cardinals Worksheet Editor - Implementation Documentation

## Overview

This document tracks all modifications and enhancements made to the Tiptap Simple Editor to create the Curious Cardinals worksheet prototype. The implementation provides view/edit modes, width controls, branding, and sharing functionality while maintaining the clean out-of-the-box experience.

## Base Foundation

- **Starting Point**: Tiptap 3.x Simple Editor template (`npx @tiptap/cli@latest add simple-editor`)
- **Framework**: Next.js 15.4.5 with TypeScript and Tailwind CSS
- **Installation**: 137 files added via official Tiptap CLI

## Key Features Implemented

### 1. Dual Mode System (View/Edit)

**Routes:**
- `/test/edit` - Full editing capabilities
- `/test/view` - Read-only presentation mode  
- `/test` - Redirects to `/test/edit`

**Implementation:**
- Both modes use the same `SimpleEditor` component
- Edit mode: `editable={true}` 
- View mode: `editable={false}`
- No UI differences - identical toolbar appearance

**Files Modified:**
- `src/app/test/edit/page.tsx` - Edit route
- `src/app/test/view/page.tsx` - View route (via TestViewer component)
- `src/components/TestViewer.tsx` - View-only wrapper

### 2. Dynamic Width Control

**Feature:** Three-size width toggle (S/M/L)
- Small: 800px max-width
- Medium: 1000px max-width (default)
- Large: 1200px max-width

**Implementation:**
- `WidthToggle` component with cycling button
- State management in `SimpleEditor` component
- Dynamic styling applied to `EditorContent`

**Files:**
- `src/components/WidthToggle.tsx` - Width toggle component
- Enhanced `SimpleEditor` with width state and styling

### 3. Branding Integration

**Feature:** Logo display in toolbar
- Curious Cardinals logo on far left of toolbar
- Configurable via props (`logoUrl`, `companyName`)
- Favicon integration

**Implementation:**
- Logo rendered in `MainToolbarContent` as first element
- Props-based configuration system
- Favicon set via Next.js metadata API

**Files Modified:**
- `src/components/tiptap-templates/simple/simple-editor.tsx` - Logo in toolbar
- `src/app/layout.tsx` - Favicon configuration
- Logo asset: `/public/logo.png`

### 4. Copy View Link Functionality

**Feature:** Share button for view-only links
- Edit mode: Copies view-only URL (`/test/view`)
- View mode: Copies current view URL
- Visual feedback (✓ checkmark on copy)

**Implementation:**
- `CopyViewLinkButton` component with clipboard API
- `ExternalLinkIcon` from Tiptap icon set
- Dynamic URL generation based on current route

**Files:**
- `src/components/CopyViewLinkButton.tsx` - Copy link component
- Integrated into `MainToolbarContent`

### 5. Theme & UX Improvements

**Light Mode Default:**
- Modified `ThemeToggle` to default to light mode instead of system preference
- Consistent light theme on initial load

**Full Page Layout:**
- Removed container wrappers to match home page implementation
- Clean, distraction-free editing experience

**Files Modified:**
- `src/components/tiptap-templates/simple/theme-toggle.tsx` - Light mode default

### 6. Keyboard Shortcuts Fix

**Issue:** Shortcuts could only remove formatting, not apply it
**Root Cause:** Conflict between `react-hotkeys-hook` and Tiptap's native shortcuts

**Solution:**
- Disabled external hotkeys for basic formatting (bold, italic, underline, strike)
- Let Tiptap handle native shortcuts (Cmd+B, Cmd+I, Cmd+U, Cmd+Shift+S)
- Preserved external hotkeys for advanced marks (code, superscript, subscript)

**Files Modified:**
- `src/components/tiptap-ui/mark-button/use-mark.ts` - Selective hotkey disabling

## Technical Architecture

### Component Hierarchy
```
SimpleEditor (main component)
├── MainToolbarContent
│   ├── Logo (conditional)
│   ├── Standard Tiptap tools
│   ├── WidthToggle
│   ├── CopyViewLinkButton
│   └── ThemeToggle
└── EditorContent (with dynamic width styling)
```

### State Management
- `editorWidth: WidthSize` - Controls editor max-width
- `mobileView: string` - Mobile toolbar state
- `content: any` - Editor JSON content
- `editable: boolean` - Read-only vs edit mode

### Props Interface
```typescript
interface SimpleEditorProps {
  content?: any           // Tiptap JSON content
  onChange?: (content: any) => void  // Content change handler
  editable?: boolean      // Edit vs view mode
  showToolbar?: boolean   // Toolbar visibility
  logoUrl?: string        // Brand logo URL
  companyName?: string    // Brand name for alt text
}
```

## Data Format

**Worksheet Structure:** Tiptap JSON format
- Standardized document structure with metadata
- Square bracket convention for user inputs: `[Your answer here]`
- Highlighting with official Tiptap color variables
- Clean line separation for readability

**Sample Data:** `src/data/sample-worksheet.json`

## Development Workflow

### Adding New Routes
1. Create page component in `src/app/[route]/page.tsx`
2. Import and render `SimpleEditor` with appropriate props
3. Follow existing pattern (no wrapper divs)

### Customizing Toolbar
1. Modify `MainToolbarContent` in `simple-editor.tsx`
2. Add new components to appropriate `ToolbarGroup`
3. Maintain consistent icon usage from Tiptap icon set

### Icon System
Available icons in `src/components/tiptap-icons/`:
- `ExternalLinkIcon` - Used for copy link button
- `BoldIcon`, `ItalicIcon`, etc. - Formatting icons
- `ThemeToggle` icons: `SunIcon`, `MoonStarIcon`

## Configuration

### Environment Setup
- Logo: Place image at `/public/logo.png`
- Company name: Configure via props
- Theme: Defaults to light mode

### Extension Configuration
Current Tiptap extensions:
- StarterKit (with native shortcuts)
- Image upload with FileReader
- TaskList and TaskItem
- TextAlign, Typography, Highlight
- Subscript, Superscript
- Custom HorizontalRule

## Known Limitations & Future Considerations

1. **Mobile Toolbar:** Simplified mobile view exists but not optimized for width/copy features
2. **Image Upload:** Uses data URLs (may need cloud storage for production)
3. **Persistence:** No database integration - content is session-based
4. **Print Styling:** Not optimized for worksheet printing
5. **Accessibility:** Could be enhanced for screen readers

## Testing Strategy

### Manual Testing Checklist
- [ ] Edit mode: All toolbar functions work
- [ ] View mode: Read-only, toolbar visible but non-functional
- [ ] Width toggle: Cycles through S/M/L correctly
- [ ] Copy link: Generates correct URLs for each mode
- [ ] Keyboard shortcuts: Cmd+B, Cmd+I, Cmd+U apply and remove formatting
- [ ] Logo: Displays correctly in toolbar
- [ ] Theme: Defaults to light mode

### Browser Compatibility
- Tested on: Chrome, Safari, Firefox
- Known issues: None currently identified

## Deployment Notes

### Assets Required
- Logo file at `/public/logo.png`
- Favicon automatically uses same logo

### Build Process
- Standard Next.js build (`npm run build`)
- All Tiptap styles compiled via SCSS imports
- No additional build steps required

---

**Last Updated:** January 2025  
**Version:** 1.0  
**Team:** Product & Engineering - Curious Cardinals