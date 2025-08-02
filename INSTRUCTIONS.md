# AI Worksheet Generation Instructions

This document provides instructions for LLMs to generate educational worksheets that will be rendered in a Tiptap Simple Editor. The output should be valid HTML that utilizes all available editor features.

## Available Editor Features

The Tiptap Simple Editor supports the following HTML elements and formatting:

### Text Formatting
- **Bold**: `<strong>text</strong>` or `<b>text</b>`
- **Italic**: `<em>text</em>` or `<i>text</i>`
- **Underline**: `<u>text</u>`
- **Strikethrough**: `<s>text</s>`
- **Code**: `<code>inline code</code>`
- **Superscript**: `<sup>text</sup>`
- **Subscript**: `<sub>text</sub>`

### Headings
Use semantic heading levels:
```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Minor Section</h4>
<h5>Small Heading</h5>
<h6>Smallest Heading</h6>
```

### Text Alignment
```html
<p style="text-align: left">Left aligned text</p>
<p style="text-align: center">Center aligned text</p>
<p style="text-align: right">Right aligned text</p>
<p style="text-align: justify">Justified text</p>
```

### Lists
**Bullet Lists:**
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

**Ordered Lists:**
```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

**Task Lists (Checkboxes):**
```html
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="false">Incomplete task</li>
  <li data-type="taskItem" data-checked="true">Completed task</li>
  <li data-type="taskItem" data-checked="false">Another task</li>
</ul>
```

### Block Elements

**Paragraphs:**
```html
<p>Regular paragraph text.</p>
```

**Blockquotes:**
```html
<blockquote>
  <p>This is a quoted section or important note.</p>
</blockquote>
```

**Code Blocks:**
```html
<pre><code>
function example() {
  console.log("Code example");
}
</code></pre>
```

**Horizontal Rules:**
```html
<hr>
```

### Text Highlighting
```html
<mark>Highlighted text</mark>
<mark style="background-color: #ffff00">Yellow highlight</mark>
<mark style="background-color: #ff6b6b">Red highlight</mark>
<mark style="background-color: #4ecdc4">Teal highlight</mark>
<mark style="background-color: #45b7d1">Blue highlight</mark>
<mark style="background-color: #f9ca24">Orange highlight</mark>
<mark style="background-color: #6c5ce7">Purple highlight</mark>
```

### Links
```html
<a href="https://example.com">External link</a>
<a href="mailto:teacher@school.edu">Email link</a>
<a href="tel:+1234567890">Phone link</a>
```

### Images
```html
<img src="data:image/jpeg;base64,..." alt="Description of image">
```
*Note: For AI generation, you can reference placeholder images or suggest where images should be inserted*

## Worksheet Structure Guidelines

### 1. Header Section
Every worksheet should start with:
```html
<h1>Subject: Topic Name</h1>
<p><strong>Name:</strong> _________________________ <strong>Date:</strong> _________________________</p>
<p><strong>Grade Level:</strong> X <strong>Duration:</strong> X minutes</p>
<hr>
```

### 2. Instructions Section
```html
<h2>Instructions</h2>
<p>Clear, concise instructions for completing the worksheet.</p>
<ul>
  <li>First instruction</li>
  <li>Second instruction</li>
</ul>
```

### 3. Content Sections
Use semantic headings and varied question types:

**Multiple Choice:**
```html
<h3>Question 1: Multiple Choice</h3>
<p>What is 2 + 2?</p>
<ul>
  <li>A) 3</li>
  <li>B) 4</li>
  <li>C) 5</li>
  <li>D) 6</li>
</ul>
<p><strong>Answer:</strong> _______</p>
```

**Fill in the Blanks:**
```html
<h3>Question 2: Fill in the Blanks</h3>
<p>The capital of France is <u>___________</u>.</p>
```

**Short Answer:**
```html
<h3>Question 3: Short Answer</h3>
<p>Explain the water cycle in 2-3 sentences.</p>
<p><strong>Answer:</strong></p>
<p>_________________________________________________________________</p>
<p>_________________________________________________________________</p>
<p>_________________________________________________________________</p>
```

**Task List:**
```html
<h3>Question 4: Checklist</h3>
<p>Check off each step as you complete the experiment:</p>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="false">Gather materials</li>
  <li data-type="taskItem" data-checked="false">Set up workspace</li>
  <li data-type="taskItem" data-checked="false">Record observations</li>
  <li data-type="taskItem" data-checked="false">Clean up</li>
</ul>
```

**Math Problems:**
```html
<h3>Question 5: Math Problem</h3>
<p>Solve for x: 2x + 5 = 13</p>
<p><strong>Work:</strong></p>
<p>_________________________________________________________________</p>
<p>_________________________________________________________________</p>
<p><strong>Answer:</strong> x = _______</p>
```

### 4. Interactive Elements

**Highlighted Important Information:**
```html
<blockquote>
  <p><mark style="background-color: #ffff00"><strong>Important:</strong> Remember to show your work for all calculations.</mark></p>
</blockquote>
```

**Code Examples (for Computer Science/Programming):**
```html
<h3>Code Analysis</h3>
<p>What does this Python function do?</p>
<pre><code>def calculate_area(length, width):
    return length * width</code></pre>
<p><strong>Answer:</strong> _________________________________________________________________</p>
```

## Sample Complete Worksheet

```html
<h1>Mathematics: Fractions and Decimals</h1>
<p><strong>Name:</strong> _________________________ <strong>Date:</strong> _________________________</p>
<p><strong>Grade Level:</strong> 5th Grade <strong>Duration:</strong> 30 minutes</p>
<hr>

<h2>Instructions</h2>
<p>Complete all problems below. Show your work where indicated.</p>
<ul>
  <li>Use pencil for all answers</li>
  <li>Simplify fractions to lowest terms</li>
  <li>Round decimals to two decimal places</li>
</ul>

<h3>Problem 1: Converting Fractions to Decimals</h3>
<p>Convert the following fractions to decimals:</p>
<ol>
  <li>1/2 = _______</li>
  <li>3/4 = _______</li>
  <li>2/5 = _______</li>
</ol>

<h3>Problem 2: Word Problems</h3>
<p>Sarah ate <sup>3</sup>/<sub>8</sub> of a pizza. Her brother ate <sup>1</sup>/<sub>4</sub> of the same pizza.</p>
<p><strong>Question:</strong> How much pizza did they eat together?</p>
<p><strong>Work:</strong></p>
<p>_________________________________________________________________</p>
<p>_________________________________________________________________</p>
<p><strong>Answer:</strong> _______</p>

<h3>Problem 3: Self-Check</h3>
<p>Complete this checklist when you finish:</p>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="false">I showed my work for all problems</li>
  <li data-type="taskItem" data-checked="false">I simplified all fractions</li>
  <li data-type="taskItem" data-checked="false">I checked my decimal calculations</li>
</ul>

<blockquote>
  <p><mark style="background-color: #4ecdc4"><strong>Challenge:</strong> Can you think of a real-world situation where you would use fractions and decimals together?</mark></p>
</blockquote>

<hr>
<p style="text-align: center"><em>Great job! Remember to review your answers before submitting.</em></p>
```

## Output Requirements

When generating worksheets:

1. **Always use valid HTML** that matches the examples above
2. **Include variety** - use different question types, formatting, and features
3. **Make it interactive** - include task lists, fill-in-blanks, and clear answer spaces
4. **Use semantic structure** - proper headings, paragraphs, and lists
5. **Add visual interest** - use highlighting, blockquotes, and text alignment
6. **Include metadata** - name, date, grade level, duration
7. **Provide clear instructions** - students should know exactly what to do
8. **End with encouragement** - positive closing message

## Testing Different Features

To test the full range of editor capabilities, worksheets should include:
- [ ] All heading levels (h1-h6)
- [ ] Bold, italic, underline, strikethrough text
- [ ] Superscript and subscript
- [ ] Code inline and blocks
- [ ] All list types (bullet, ordered, task)
- [ ] Text alignment variations
- [ ] Highlighted text in different colors
- [ ] Blockquotes for important information
- [ ] Links (external, email, phone)
- [ ] Horizontal rules for sections
- [ ] Mixed formatting combinations

This structure ensures the generated content fully utilizes the Tiptap Simple Editor's capabilities while creating engaging, educational worksheets.