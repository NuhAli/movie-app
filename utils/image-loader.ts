import { createClient } from "next-sanity";


export const client = createClient({
    projectId: "tjqwyy5h",
    dataset: "production",
    apiVersion: "2023-01-23",
    useCdn: true,
});