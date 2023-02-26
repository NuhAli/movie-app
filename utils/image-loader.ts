import { createClient } from "next-sanity";


export const client = createClient({
    projectId: "tjqwyy5h",
    dataset: "production",
    apiVersion: "2023-01-23",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: process.env.NODE_ENV === "production",
});