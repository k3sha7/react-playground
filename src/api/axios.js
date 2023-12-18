import axios from "axios"

export const api = axios.create({
  baseURL: "https://api.unsplash.com/",
});

export const getPostPage = async ({pageParams = 0}) => {
  console.log(pageParams, "pageParams");
  const res = await api.get(
    `/search/photos?page=${pageParams}&per_page=500&query=office&client_id=LmD7DzuIf15DYvXvrq6NdNhHiF4aYNpHsdF9ijVY_yg`
  );
  return res.data
}