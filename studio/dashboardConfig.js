export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6006590efc21bd1539a1a83a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ahtxdu87',
                  apiId: 'a8597c59-7696-4997-b918-fa9678582701'
                },
                {
                  buildHookId: '6006590ea9166e75046326de',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dqctpfxa',
                  apiId: 'c45de1d1-e1fa-42c8-8009-43ef8cc6e424'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oldtimer75/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dqctpfxa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
