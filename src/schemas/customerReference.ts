import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customerReference',
  title: 'Reference',
  type: 'document',
  groups: [
      {
          title: "Content",
          name: "content",
          default: true,
      },
      {
          title: "Teaser",
          name: "teaser",
      },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: "content",
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: "content",
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: "content",
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
      group: "content",
    }),
    defineField({
      name: 'mainBody',
      title: 'MainBody',
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
      group: "content",
    }),
    defineField({
      name: 'customerName',
      title: 'Customer name',
      type: 'string',
      group: "content",
    }),
    defineField({
      title: 'Quotes',
      name: 'quoes',
      type: 'array',
      of: [{ type: 'quote' }],
      group: 'content',
    }),
    defineField({
      name: 'teaserImage',
      title: 'Teaser image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: "teaser",
    }), 
    defineField({
      name: 'teaserTitle',
      title: 'Teaser title',
      type: 'string',
      group: "teaser",
    }), 
    defineField({
      name: 'teaserText',
      title: 'Teaser text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
      group: "teaser",
    }),    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'teaserImage',
    },
  },
})
