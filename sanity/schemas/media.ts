import { defineType } from "sanity"

export default defineType({
    name: "media",
    type: "document",
    title: "Media",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "thumbnail",
            type: "object",
            title: "Thumbnail",
            fields: [
                {
                    name: "trending",
                    title: "Trending",
                    type: "object",
                    validation: Rule => [Rule.optional()],
                    fields: [
                        {
                            name: "small",
                            title: "Small",
                            type: "image"
                        },
                        {
                            name: "large",
                            title: "Large",
                            type: "image"
                        },
                    ]
                },
                {
                    name: "regular",
                    title: "Regular",
                    type: "object",
                    validation: Rule => [Rule.optional()],
                    fields: [
                        {
                            name: "small",
                            title: "Small",
                            type: "image"
                        },
                        {
                            name: "medium",
                            title: "medium",
                            type: "image"
                        },
                        {
                            name: "large",
                            title: "large",
                            type: "image"
                        },
                    ]
                },
            ]
        },
        {
            name: "year",
            type: "number",
            title: "Year"
        },
        {
            name: "category",
            type: "string",
            title: "Category"
        },
        {
            name: "rating",
            type: "string",
            title: "Rating"
        },
        {
            name: "isBookmarked",
            type: "boolean",
            title: "Is Bookmarked"
        },
        {
            name: "isTrending",
            type: "boolean",
            title: "Is Trending"
        },
    ]
})