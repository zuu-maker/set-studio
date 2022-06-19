export default {
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    {
      name: 'topTitle',
      title: 'Top Hero Title',
      description:'Top Header title in hero div in gray',
      type: 'string',
    },
    {
      name: 'bottomTitle',
      title: 'Bottom Hero Title',
      description:'Bottom Header title in hero div in sky blue',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro',
      description:'Hero intro right below the bottom header title',
      type: 'text',
    },
    {
      name: 'developmentTitle',
      title: 'Development Title',
      description:'Title on the under the service section on the right',
      type: 'string',
    },
    {
      name: 'developmentDescription',
      title: 'Development Description',
      description:'Content right under the development title',
      type: 'text',
    },
  ],
}