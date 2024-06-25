export const FullWindowCode = (language: string, codeString: string) => {
  const newWindow = window.open('code preview', '_blank')

  if (newWindow) {
    newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Code Viewer</title>
            <style>
              body {
                margin: 0;
                font-family: sans-serif;
                background: #2e3440;
                color: #d8dee9;
                padding: 20px;
              }
              pre {
                background: #2e3440;
                color: #d8dee9;
                overflow: auto;
                padding: 1em;
                border-radius: 5px;
              }
              code[class*="language-"],
              pre[class*="language-"] {
                color: #d8dee9;
                background: none;
                font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
                text-align: left;
                white-space: pre;
                word-spacing: normal;
                word-break: normal;
                word-wrap: normal;
                line-height: 1.5;
                tab-size: 4;
                hyphens: none;
              }
              .token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata {
                color: #636f88;
              }
              .token.punctuation {
                color: #d8dee9;
              }
              .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
                color: #b48ead;
              }
              .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
                color: #a3be8c;
              }
              .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
                color: #d8dee9;
              }
              .token.atrule, .token.attr-value, .token.keyword {
                color: #81a1c1;
              }
              .token.function {
                color: #88c0d0;
              }
              .token.regex, .token.important, .token.variable {
                color: #ebcb8b;
              }
              .token.important, .token.bold {
                font-weight: bold;
              }
              .token.italic {
                font-style: italic;
              }
            </style>
          </head>
          <body>
            <pre><code class="language-${language}">${codeString}</code></pre>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-${language}.min.js"></script>
            <script>
              document.addEventListener('DOMContentLoaded', (event) => {
                Prism.highlightAll();
              });
            </script>
          </body>
          </html>
        `)
    newWindow.document.close()
  }
}
