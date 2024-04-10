import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'start',
  title: 'Start',
  type: 'document',
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
    },
    {
      title: 'Header',
      name: 'header',
    },
    {
      title: 'Footer',
      name: 'footer',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 96,
      },
      group: 'content',
    }),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}, {type: 'customerReference'}]}],
      group: 'content',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'header',
    }),
    defineField({
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}, {type: 'list'}]}],
      group: 'header',
    }),
    defineField({
      name: 'column1',
      title: 'Left column',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
        {
          title: 'Image',
          type: 'image',
        },
      ],
      group: 'footer',
    }),
    defineField({
      name: 'column2',
      title: 'Middle column',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
        {
          title: 'Image',
          type: 'image',
        },
      ],
      group: 'footer',
    }),
    defineField({
      name: 'column3',
      title: 'Right column',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
        {
          title: 'Image',
          type: 'image',
        },
      ],
      group: 'footer',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
