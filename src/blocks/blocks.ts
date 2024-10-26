links: fields.blocks(
  {
    // First block option is a link to a Page
    page: {
      label: 'Page',
      schema: fields.relationship({
        label: 'Page',
        collection: 'pages',
      }),
    },
    // Second block option is a link to a URL
    url: {
      label: 'URL',
      schema: fields.text({ label: 'URL' }),
    },
  },
  { label: 'Links' }
),