# GitHub Copilot Repository Custom Instructions

## Control Origins Corporate Website - PUG & Bootstrap 5

This file provides custom instructions for GitHub Copilot when working on the Control Origins corporate website project.

## Technology Stack Preferences

Use PUG template engine for all HTML templating, with proper indentation (2 spaces) and semantic structure.

Use Bootstrap 5 utility classes and components exclusively for styling, avoiding custom CSS unless absolutely necessary.

All PUG templates should use extends/block inheritance pattern with a base layout template.

Implement mixins for reusable components like article cards, navigation elements, and form components.

## Code Standards

### PUG Template Conventions

- Use 2-space indentation consistently
- Use semantic HTML5 elements: `article`, `section`, `header`, `footer`, `nav`
- Implement proper template inheritance with `extends` and `block` patterns
- Use interpolation syntax `#{variable}` for dynamic content
- Use buffered code `=` for escaped output, unbuffered `!=` for HTML content

### Critical PUG Formatting Rules (Error Prevention)

- **NEVER concatenate elements on the same line** - Each PUG element must be on its own line
- **Maintain consistent indentation** - PUG is extremely sensitive to indentation inconsistencies
- **Always include proper spacing between sections** - Add blank lines between major sections
- **Check for missing newlines** - Especially after text content or pipe (`|`) operators
- **Validate nested structures** - Ensure proper parent-child relationships with correct indentation
- **Test build after major edits** - Run `npm run build:pug` frequently to catch errors early

### Common PUG Formatting Errors to Avoid

```pug
// ❌ WRONG: Missing newline after ul element
ul.list-group.list-group-flush                    li.list-group-item Content

// ✅ CORRECT: Proper newline and indentation
ul.list-group.list-group-flush
  li.list-group-item Content

// ❌ WRONG: Missing indentation for nested elements
.card-body                          h6.card-title
  i.bi.bi-icon.me-2
  | Title Text

// ✅ CORRECT: Proper indentation structure
.card-body
  h6.card-title
    i.bi.bi-icon.me-2
    | Title Text

// ❌ WRONG: Text content merged with next element
p.
  Some content text            section#next-section.mb-5

// ✅ CORRECT: Proper spacing between elements
p.
  Some content text

section#next-section.mb-5
```

### PUG Build Validation Process

1. After significant changes, immediately run `npm run build:pug`
2. If build fails, check for:
    - Inconsistent indentation (usually 2-space increments)
    - Missing newlines between elements
    - Incorrectly nested structures
    - Mixed tabs and spaces
3. Use consistent 2-space indentation throughout
4. Validate that all opening elements have proper closing structure

### Bootstrap 5 Implementation

- Prioritize utility classes over custom CSS: `mb-4`, `py-3`, `text-primary`
- Use responsive utilities: `d-none d-md-block`, `col-12 col-lg-8`
- Apply consistent spacing using Bootstrap's spacing scale
- Use semantic color classes: `bg-primary`, `text-muted`, `border-secondary`
- Implement mobile-first responsive design approach

### File Structure

```
views/
├── layout/base.pug
├── pages/
├── components/
└── mixins/
```

## Content Architecture

Create templates for professional business technology content with proper SEO structure.

Implement service metadata structure with title, description, category, and business value fields.

Design responsive layouts suitable for business technology solutions, regulatory compliance content, and strategic sourcing information.

Include professional company sections highlighting Control Origins' expertise in Microsoft Azure, ASP.NET, and enterprise solutions.

## Professional Branding Requirements

Maintain clean, professional design aesthetic suitable for business technology consulting.

Use typography hierarchy that enhances readability for technical business content.

Include integration points for LinkedIn and professional social media for Control Origins.

Design layouts that showcase technology expertise, regulatory compliance solutions, and business transformation credentials.

## SEO and Performance

Generate proper meta tag structure in PUG templates using mixins.

Use semantic HTML5 elements for better search engine understanding.

Implement lazy loading for images and optimize Bootstrap bundle size.

Create clean, descriptive URL structures for services and business solutions.

## Accessibility Standards

Follow WCAG guidelines for color contrast and semantic markup.

Implement proper heading hierarchy (h1-h6) for screen readers.

Include alt text for images and proper form labels.

Ensure keyboard navigation support for all interactive elements.

## Service & Solution Management

Design templates that support business service descriptions and solution overviews.

Create consistent service card components for solution showcase pages.

Implement category and industry filtering functionality for business solutions.

Support various content types including service descriptions, case studies, and business value propositions.

## Example Code Patterns

When generating PUG templates, follow this structure:

```pug
extends layout/base

block content
  main.container.py-4
    section.row
      .col-12.col-lg-8
        header.mb-4
          h1.display-4= title
          .text-muted= description
        .service-content!= content
      aside.col-12.col-lg-4
        // Sidebar content for related services
```

When creating Bootstrap components, use utility classes:

```pug
.card.shadow-sm
  .card-body
    h5.card-title= service.title
    p.card-text.text-muted= service.description
    a.btn.btn-primary(href=service.url) Learn More
```

## Content Context

This is a professional corporate website for Control Origins, a business technology consulting company.

Target audience includes enterprise clients, IT decision makers, and organizations needing regulatory compliance solutions.

Content focuses on business technology solutions, regulatory compliance expertise, strategic sourcing, and Microsoft technology stack capabilities.

All code and design decisions should reflect corporate professionalism and enterprise-level technical competence.

## Debugging and Error Prevention

### PUG Error Patterns and Solutions

#### Error: "Inconsistent indentation. Expecting either X or Y spaces/tabs"

**Cause**: Mixed indentation levels or improper nesting structure
**Solution**:

- Use exactly 2 spaces per indentation level
- Never mix tabs and spaces
- Ensure parent-child relationships are properly indented
- Use a code editor with visible whitespace to detect issues

#### Error: Elements concatenated on same line

**Cause**: Missing newlines between PUG elements
**Common locations**:

- After `ul.list-group` before first `li` item
- After text content (using `|` operator) before next element
- After `block` declarations before content
- Between `section` elements

**Prevention checklist**:

- [ ] Each PUG element starts on its own line
- [ ] Proper blank lines between major sections
- [ ] No text content merged with element declarations
- [ ] Table of contents lists have proper newlines
- [ ] All accordion items are properly separated

### Pre-commit Validation Steps

1. **Visual inspection**: Check for proper indentation alignment
2. **Build test**: Run `npm run build:pug` before committing
3. **Content review**: Ensure no missing content in sections
4. **Structure validation**: Verify all sections have complete content

### Content Completeness Checklist

When creating comprehensive business pages, ensure all sections contain:

- [ ] Proper heading structure with professional business focus
- [ ] Complete service descriptions (no empty sections)
- [ ] All solution components have full descriptions and value propositions
- [ ] Business value sections have clear ROI and benefits
- [ ] Case studies and testimonials are complete and properly formatted
- [ ] All service cards have complete titles, descriptions, and call-to-action elements

### Emergency Debug Commands

```bash
# Quick PUG syntax check
npm run build:pug

# Full build to catch all errors
npm run build

# Clean and rebuild if caching issues
npm run clean && npm run build
```

### Advanced PUG Patterns for Business Pages

#### Service Overview Structure

```pug
// Service overview section pattern
section#service-overview.mb-5
  .container
    .row
      .col-12.col-lg-8
        h2.h3.mb-4
          i.bi.bi-gear.me-2
          | Service Overview
        p.lead Business value proposition here.

        .row.g-3
          .col-md-6
            .card.border-primary
              .card-body
                h6.card-title
                  i.bi.bi-check-circle.me-2
                  | Key Benefit
                p.card-text Detailed benefit description
```

#### Solution Cards Pattern

```pug
// Solution showcase pattern
.row.g-4
  .col-md-6.col-lg-4
    .card.h-100.shadow-sm
      .card-header.bg-primary.text-white
        h5.card-title.mb-0
          i.bi.bi-shield-check.me-2
          | Regulatory Compliance
      .card-body.d-flex.flex-column
        p.card-text.flex-grow-1 Ensure regulatory compliance with industry standards.
        .mt-auto
          a.btn.btn-outline-primary(href='/regulatory-compliance') Learn More
```

#### Business Process Accordion

```pug
// Business process breakdown
.accordion#businessProcess
  .accordion-item
    h3.accordion-header#headingDiscovery
      button.accordion-button(
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#collapseDiscovery'
        aria-expanded='true'
        aria-controls='collapseDiscovery'
      )
        i.bi.bi-search.me-2
        | Discovery Phase
    .accordion-collapse.collapse.show#collapseDiscovery(
      aria-labelledby='headingDiscovery'
      data-bs-parent='#businessProcess'
    )
      .accordion-body
        p.
          Comprehensive assessment of current business processes and technology stack.
        ul.list-unstyled
          li.mb-2
            i.bi.bi-check-lg.text-success.me-2
            | Business requirement analysis
          li.mb-2
            i.bi.bi-check-lg.text-success.me-2
            | Technology stack evaluation
```
