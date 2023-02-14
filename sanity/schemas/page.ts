import { defineType } from "sanity"

export default defineType({
    name: "page",
    type: "document",
    title: "Page",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "slug",
            type: "string",
            title: "Slug"
        },
        {
            name: "items",
            title: "Items",
            type: "object",
            fields: [
                {
                    name: "rail",
                    title: "Rail",
                    type: "object",
                    validation: Rule => [Rule.optional()],
                    fields: [
                        {
                            name: "railHeading",
                            title: "Rail Heading",
                            type: "string"
                        },
                        {
                            name: "railItems",
                            title: "Rail Items",
                            type: 'array',
                            of: [{type: 'media'}]
                        },
                    ]
                },
                {
                    name: "grid",
                    title: "Grid",
                    type: "object",
                    validation: Rule => [Rule.required()],
                    fields: [
                        {
                            name: "gridHeading",
                            title: "Grid Heading",
                            type: "string"
                        },
                        {
                            name: "gridItems",
                            title: "Grid Items",
                            type: "media"
                        },
                    ]
                },
                {
                    name: "secondGrid",
                    title: "Second Grid",
                    type: "object",
                    validation: Rule => [Rule.optional()],
                    fields: [
                        {
                            name: "gridHeading",
                            title: "Grid Heading",
                            type: "string"
                        },
                        {
                            name: "gridItems",
                            title: "Grid Items",
                            type: "media"
                        },
                    ]
                },
            ]
        }   
    ]
})