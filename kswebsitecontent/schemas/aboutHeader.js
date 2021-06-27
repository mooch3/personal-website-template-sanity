export default {
    name: 'about',
    title: 'Page Headers and Subheaders',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
          {
            name: 'header',
            title: 'Header',
            type: 'blockContent',
          },
          {
              name: 'subtitle',
              title: 'Subtitle (Home Page Only)',
              type: 'string'
          },
          {
            name: 'subheader',
            title: 'Subheader (Home Page Only',
            type: 'blockContent',
          },
          {
            name: 'page',
            title: 'Page',
            type: 'string'
          }


    ]
}