import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Quote',
  name: 'quote',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
        title: 'Role',
        name: 'role',
        type: 'string',
    }),
    defineField({
        name: 'Quote',
        title: 'quote',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
          },
        ],
      }), 
    ],
    preview: {
        select: {
          title: 'name',
        },
      },
})
