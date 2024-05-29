import { defineField, defineType } from "sanity";

export default defineType({
  name: "list",
  title: "List",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "mainBody",
      title: "MainBody",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
      ],
    }),
    defineField({
      title: "Items",
      name: "items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "customerReference" }, { type: "employee" }] }],
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
