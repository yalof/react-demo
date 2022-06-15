import { create } from "apisauce";

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});

type UserType = {
  username: string;
  password: string;
  email: string;
};
const getPosts = ({
  search = "",
  limit = 10,
  offset = 0,
  ordering = "date",
}) => {
  return API.get("/blog/posts/", { search, limit, offset, ordering });
};
const getMyPostsApi = (token: string) => {
  return API.get(
    "/blog/posts/my_posts/",
    {},
    { headers: { Autorization: `Bearer ${token}` } }
  );
};
const getSinglePost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const registerUserApi = (userData: UserType) => {
  return API.post("/auth/users/", userData);
};

const userActivateApi = (uid: any, token: any) => {
  return API.post("/auth/users/activation/", { uid, token });
};

const loginUserApi = (data: { email: string; password: string }) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserNameInfoApi = (token: string) => {
  return API.get(
    "/auth/users/me",
    {},
    {
      headers: { Authorization: `Bearer ${token}`, accept: "application/json" },
    }
  );
};

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};
const getNewAccessToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};
const addPostApi = (token: string, postData: any) => {
  return API.post("/blog/posts/", postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  getPosts,
  getSinglePost,
  registerUserApi,
  userActivateApi,
  loginUserApi,
  getUserNameInfoApi,
  verifyToken,
  getNewAccessToken,
  getMyPostsApi,
  addPostApi,
};
