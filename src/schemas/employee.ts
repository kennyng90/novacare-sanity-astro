import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'FirstName',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'LastName',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.firstName} ${doc.lastName}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'showContactInformation',
      title: 'Show contact information',
      type: 'boolean',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub (username)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      ],
    }),
    defineField({
      name: 'blog',
      title: 'Blog id',
      type: 'string',
    }),
  ],
  preview: {
    select: {
        firstName: 'firstName',
        lastName: 'lastName',
        role: 'role',
        image: 'image',
    },
    prepare(selection) {
        const { firstName, lastName, role, image} = selection;
        return {
            title: firstName + ` ` + lastName,
            subtitle: role,
            media: image
        };
    },
  },
})
