# AI Worksheet Generation Instructions

This document provides instructions for LLMs to generate educational worksheets that will be rendered in a Tiptap Simple Editor. The output should be in **Tiptap JSON format** that can utilize the available editor features as appropriate for the content.

## Output Format: Tiptap JSON

You must output worksheets in **Tiptap JSON format**. This is a structured document format that represents the content as nodes and marks.

### Basic JSON Structure
```json
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 1 },
      "content": [{ "type": "text", "text": "Heading Text" }]
    },
    {
      "type": "paragraph",
      "content": [{ "type": "text", "text": "Paragraph text" }]
    }
  ]
}
```

## Available Editor Features

The Tiptap Simple Editor supports the following content types and formatting:

### Text Formatting
Text can have various marks applied:

**Bold text:**
```json
{
  "type": "text",
  "marks": [{ "type": "bold" }],
  "text": "Bold text"
}
```

**Italic text:**
```json
{
  "type": "text",
  "marks": [{ "type": "italic" }],
  "text": "Italic text"
}
```

**Highlighted text (for user input areas):**
```json
{
  "type": "text",
  "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }],
  "text": "[Your answer here]"
}
```

**Multiple marks:**
```json
{
  "type": "text",
  "marks": [
    { "type": "bold" },
    { "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-green)" } }
  ],
  "text": "[Bold highlighted text]"
}
```

### Headings
Use heading nodes with level attributes:
```json
{
  "type": "heading",
  "attrs": { "level": 1 },
  "content": [{ "type": "text", "text": "Main Title" }]
}
```

Available levels: 1, 2, 3, 4, 5, 6

### Text Alignment
```json
{
  "type": "paragraph",
  "attrs": { "textAlign": "center" },
  "content": [{ "type": "text", "text": "Center aligned text" }]
}
```

Available alignments: "left", "center", "right", "justify"

### Lists
**Bullet Lists:**
```json
{
  "type": "bulletList",
  "content": [
    {
      "type": "listItem",
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "First item" }]
        }
      ]
    }
  ]
}
```

**Ordered Lists:**
```json
{
  "type": "orderedList",
  "content": [
    {
      "type": "listItem",
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "First step" }]
        }
      ]
    }
  ]
}
```

**Task Lists (Checkboxes):**
```json
{
  "type": "taskList",
  "content": [
    {
      "type": "taskItem",
      "attrs": { "checked": false },
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Incomplete task" }]
        }
      ]
    }
  ]
}
```

### Block Elements

**Blockquotes:**
```json
{
  "type": "blockquote",
  "content": [
    {
      "type": "paragraph",
      "content": [{ "type": "text", "text": "This is a quoted section or important note." }]
    }
  ]
}
```

**Code Blocks:**
```json
{
  "type": "codeBlock",
  "attrs": { "language": "javascript" },
  "content": [{ "type": "text", "text": "function example() {\n  console.log(\"Code example\");\n}" }]
}
```

**Horizontal Rules:**
```json
{
  "type": "horizontalRule"
}
```

### Available Highlight Colors
Use these CSS variables for consistent highlighting:
- `var(--tt-color-highlight-gray)` - Gray highlight
- `var(--tt-color-highlight-brown)` - Brown highlight  
- `var(--tt-color-highlight-orange)` - Orange highlight
- `var(--tt-color-highlight-yellow)` - Yellow highlight (recommended for user input areas)
- `var(--tt-color-highlight-green)` - Green highlight
- `var(--tt-color-highlight-blue)` - Blue highlight
- `var(--tt-color-highlight-purple)` - Purple highlight
- `var(--tt-color-highlight-pink)` - Pink highlight
- `var(--tt-color-highlight-red)` - Red highlight

## User Input Convention

Use square brackets with highlighted text to indicate where users should fill in content:
```json
{
  "type": "text",
  "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }],
  "text": "[Your answer here]"
}
```

**Common user input patterns:**
- `[Your answer here]` - General answer field
- `[Student name]` - Name field
- `[Fill in the blank]` - Fill-in-the-blank response
- `[Write your explanation here]` - Extended response area

## Worksheet Structure Guidelines

### 1. Header Section
Every worksheet should start with:
```json
{
  "type": "heading",
  "attrs": { "level": 1 },
  "content": [{ "type": "text", "text": "Subject: Topic Name" }]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Name: " },
    { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Student Name]" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Date: " },
    { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Today's Date]" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Grade Level: " },
    { "type": "text", "text": "[X]" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Duration: " },
    { "type": "text", "text": "[X] minutes" }
  ]
},
{
  "type": "horizontalRule"
}
```

### 2. Instructions Section
Clear instructions help students understand expectations and improve completion rates.

### 3. Content Sections
Use semantic headings and varied question types. **Important: Keep answer areas on separate lines for clean formatting.**

**Short Answer Pattern:**
```json
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Question:" },
    { "type": "text", "text": " Explain the water cycle in 2-3 sentences." }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Answer:" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Write your explanation here]" }
  ]
}
```

**Math Problem Pattern:**
```json
{
  "type": "paragraph",
  "content": [
    { "type": "text", "text": "Solve for x: 2x + 5 = 13" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Work:" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Show your work here]" }
  ]
},
{
  "type": "paragraph",
  "content": [
    { "type": "text", "marks": [{ "type": "bold" }], "text": "Answer:" },
    { "type": "text", "text": " x = " },
    { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Final answer]" }
  ]
}
```

### 4. Interactive Elements

**Challenge Questions (use blockquotes for special sections):**
```json
{
  "type": "blockquote",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            { "type": "bold" },
            { "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-green)" } }
          ],
          "text": "Challenge:"
        },
        {
          "type": "text",
          "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-green)" } }],
          "text": " Can you think of a real-world example?"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }],
          "text": "[Write your example here]"
        }
      ]
    }
  ]
}
```

## Sample Complete Worksheet

The complete worksheet should follow this JSON structure (see the full example in `/src/data/sample-worksheet.json`):

```json
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 1 },
      "content": [{ "type": "text", "text": "Mathematics: Fractions and Decimals" }]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "marks": [{ "type": "bold" }], "text": "Name: " },
        { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Student Name]" }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "marks": [{ "type": "bold" }], "text": "Date: " },
        { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Today's Date]" }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "marks": [{ "type": "bold" }], "text": "Grade Level: " },
        { "type": "text", "text": "5th Grade" }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "marks": [{ "type": "bold" }], "text": "Duration: " },
        { "type": "text", "text": "30 minutes" }
      ]
    },
    {
      "type": "horizontalRule"
    },
    {
      "type": "orderedList",
      "content": [
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                { "type": "text", "text": "1/2 = " },
                { "type": "text", "marks": [{ "type": "highlight", "attrs": { "color": "var(--tt-color-highlight-yellow)" } }], "text": "[Your answer]" }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "taskList",
      "content": [
        {
          "type": "taskItem",
          "attrs": { "checked": false },
          "content": [
            {
              "type": "paragraph",
              "content": [{ "type": "text", "text": "I showed my work for all problems" }]
            }
          ]
        }
      ]
    }
  ]
}
```

## Formatting Guidelines

**Clean Line Separation:** Keep different elements on separate lines for better readability:
- Put user input areas `[like this]` on their own paragraph nodes
- Separate question text from answer areas
- Use distinct paragraphs for labels like "Question:", "Answer:", "Work:"
- Avoid cramming multiple elements into single text nodes

## Output Requirements

When generating worksheets in **Tiptap JSON format**:

1. **Always use valid JSON** that follows the Tiptap document structure
2. **Use square bracket convention** - All user input areas should use highlight marks with `[Descriptive instruction]` text
3. **Use clean line separation** - Keep different elements on separate paragraph nodes for readability
4. **Use appropriate features** - select formatting and elements that enhance the educational content
5. **Use semantic structure** - proper headings, paragraphs, and lists as JSON nodes
6. **Include clear instructions** - students should know exactly what to do
7. **Use official highlight colors** - utilize the provided CSS variables (especially `var(--tt-color-highlight-yellow)` for input areas)
8. **Include metadata** - name, date, grade level, duration in header (each on separate lines)
9. **End with encouragement** - positive closing message

## Available Features Reference

The editor supports these features (use as appropriate for your content):
- **Text formatting**: Bold, italic, strikethrough, code, superscript, subscript
- **Structure**: All heading levels, paragraphs, bullet/ordered/task lists
- **Visual elements**: Text alignment, highlighting, blockquotes, horizontal rules
- **Interactive**: Task lists with checkboxes, links
- **Code blocks**: For programming/technical subjects

**Note**: You don't need to use all features in every worksheet. Choose the elements that best serve the educational content and learning objectives.