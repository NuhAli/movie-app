import { client } from "./image-loader";

export const setBookMarkStatus = async (id: string, state: boolean) => {
  client.patch(id).set({ isBookmarked: state }).commit();
};
