import { VisualSpecs } from '../ai/openaiService'

export class CSSGenerator {
  static generateCSS(visualSpecs: VisualSpecs): string {
    const { colorPalette, typography, layout, background } = visualSpecs

    return `
/* Generated Document Styles */
.ai-document {
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: ${layout.spacing};
  font-family: ${typography.bodyFont};
  font-size: ${typography.bodySize};
  line-height: 1.6;
  color: ${colorPalette.text};
  background: ${background.value};
  border-radius: ${layout.borderRadius};
}

.ai-document h1,
.ai-document h2,
.ai-document h3,
.ai-document h4,
.ai-document h5,
.ai-document h6 {
  font-family: ${typography.headingFont};
  color: ${colorPalette.primary};
  margin-bottom: calc(${layout.spacing} * 0.5);
  margin-top: calc(${layout.spacing} * 1.5);
  line-height: 1.2;
}

.ai-document h1 {
  font-size: ${typography.headingSize};
  border-bottom: 2px solid ${colorPalette.accent};
  padding-bottom: calc(${layout.spacing} * 0.25);
}

.ai-document h2 {
  font-size: calc(${typography.headingSize} * 0.8);
  color: ${colorPalette.secondary};
}

.ai-document h3 {
  font-size: calc(${typography.headingSize} * 0.65);
}

.ai-document p {
  margin-bottom: calc(${layout.spacing} * 0.75);
  text-align: justify;
}

.ai-document ul,
.ai-document ol {
  margin-bottom: calc(${layout.spacing} * 0.75);
  padding-left: calc(${layout.spacing} * 1.5);
}

.ai-document li {
  margin-bottom: calc(${layout.spacing} * 0.25);
}

.ai-document table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${layout.spacing};
  background: ${colorPalette.background};
  border-radius: ${layout.borderRadius};
  overflow: hidden;
}

.ai-document th,
.ai-document td {
  padding: calc(${layout.spacing} * 0.5);
  text-align: left;
  border-bottom: 1px solid ${colorPalette.accent}33;
}

.ai-document th {
  background: ${colorPalette.primary};
  color: white;
  font-weight: bold;
  font-family: ${typography.headingFont};
}

.ai-document tr:nth-child(even) {
  background: ${colorPalette.background}80;
}

.ai-document blockquote {
  border-left: 4px solid ${colorPalette.accent};
  padding-left: ${layout.spacing};
  margin-left: 0;
  margin-right: 0;
  margin-bottom: ${layout.spacing};
  font-style: italic;
  background: ${colorPalette.background}40;
  padding: calc(${layout.spacing} * 0.75);
  border-radius: 0 ${layout.borderRadius} ${layout.borderRadius} 0;
}

.ai-document .highlight {
  background: ${colorPalette.accent}30;
  padding: 2px 4px;
  border-radius: calc(${layout.borderRadius} * 0.5);
}

.ai-document .section-divider {
  border: none;
  border-top: 2px solid ${colorPalette.accent}50;
  margin: calc(${layout.spacing} * 2) 0;
}

@media print {
  .ai-document {
    max-width: none;
    background: white;
    box-shadow: none;
  }
}
    `.trim()
  }

  static generateInlineStyles(visualSpecs: VisualSpecs): Record<string, React.CSSProperties> {
    const { colorPalette, typography, layout } = visualSpecs

    return {
      document: {
        maxWidth: layout.maxWidth,
        margin: '0 auto',
        padding: layout.spacing,
        fontFamily: typography.bodyFont,
        fontSize: typography.bodySize,
        lineHeight: 1.6,
        color: colorPalette.text,
        borderRadius: layout.borderRadius,
      },
      h1: {
        fontFamily: typography.headingFont,
        fontSize: typography.headingSize,
        color: colorPalette.primary,
        borderBottom: `2px solid ${colorPalette.accent}`,
        paddingBottom: 'calc(' + layout.spacing + ' * 0.25)',
        marginBottom: 'calc(' + layout.spacing + ' * 0.5)',
        marginTop: 'calc(' + layout.spacing + ' * 1.5)',
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: typography.headingFont,
        fontSize: 'calc(' + typography.headingSize + ' * 0.8)',
        color: colorPalette.secondary,
        marginBottom: 'calc(' + layout.spacing + ' * 0.5)',
        marginTop: 'calc(' + layout.spacing + ' * 1.5)',
        lineHeight: 1.2,
      },
      p: {
        marginBottom: 'calc(' + layout.spacing + ' * 0.75)',
        textAlign: 'justify' as const,
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse' as const,
        marginBottom: layout.spacing,
        background: colorPalette.background,
        borderRadius: layout.borderRadius,
        overflow: 'hidden',
      },
      th: {
        padding: 'calc(' + layout.spacing + ' * 0.5)',
        background: colorPalette.primary,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: typography.headingFont,
      },
      td: {
        padding: 'calc(' + layout.spacing + ' * 0.5)',
        borderBottom: `1px solid ${colorPalette.accent}33`,
      },
    }
  }
}