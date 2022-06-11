import { create } from "apisauce";

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});
type UserType = {
  username: string;
  password: string;
  email: string;
};
const getPosts = () => {
  return API.get("/blog/posts/my_posts");
};
const getMyPostsApi = () => {
  return API.get("/blog/posts/");
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

const getUserNameInfoApi = (token: any) => {
  return API.get(
    "/auth/users/me",
    {},
    { headers: { Autorization: `Bearer ${token}` } }
  );
};

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};
const getNewAccessToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
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
};
