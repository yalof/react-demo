import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: Card | null;
  selectedImg: string | Array<string> | null;
  cardsList: Card[];
  postsTabs: string;
  selectedPostt: Card | null;
  isAllPostsLoading: boolean;
  isSinglePostLoading: boolean;
  totalAllPostsCount: number;
};
const initialState: PostState = {
  selectedPost: null,
  selectedImg: "",
  cardsList: [],
  postsTabs: "all",
  selectedPostt: null,
  isAllPostsLoading: false,
  isSinglePostLoading: false,
  totalAllPostsCount: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Card | null>) => {
      state.selectedPost = action.payload;
    },
    setSelectedImg: (state, action) => {
      state.selectedImg = action.payload;
    },
    setPosts: (state, action) => {
      state.cardsList = action.payload.map((card: Card) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
    setLikePost: (state: any, action) => {
      const card = state.cardsList.find((c: any) => c.id === action.payload.id);
      if (card) {
        card.likeStatus = action.payload.action;
      }
    },
    setSavePost: (state, action) => {
      const card = state.cardsList.find((c: any) => c.id === action.payload.id);
      if (card) {
        card.saved = action.payload.action === "save";
      }
    },
    setPostsTabs: (state, action) => {
      state.postsTabs = action.payload;
    },
    loadData: (state, action: any) => {},
    loadPost: (state, action: PayloadAction<string>) => {},
    setPost: (state, action: PayloadAction<Card>) => {
      state.selectedPost = action.payload;
    },
    setAllPostsLoading: (state, action) => {
      state.isAllPostsLoading = action.payload;
    },
    setSinglePostLoading: (state, action) => {
      state.isSinglePostLoading = action.payload;
    },
    setTotalAllPostsCount: (state: any, action: any) => {
      state.totalAllPostsCount = action.payload;
    },
  },
});
export const {
  setSelectedPost,
  setSelectedImg,
  setPosts,
  loadData,
  loadPost,
  setPost,
  setSavePost,
  setLikePost,
  setPostsTabs,
  setAllPostsLoading,
  setSinglePostLoading,
  setTotalAllPostsCount,
} = postsSlice.actions;

export default postsSlice.reducer;
export const PostsSelectors = {
  getAllTotalCount: (state: any) => state.posts.totalAllPostsCount,
  getSinglePostLoading: (state: any) => state.posts.isSinglePostLoading,
  getAllPostsLoading: (state: any) => state.posts.isAllPostsLoading,
  getSelectedPostt: (state: any) => state.posts.selectedPostt,
  getSelectedPost: (state: any) => state.posts.selectedPost,
  getSelectedImg: (state: any) => state.posts.selectedImg,
  getPostsTabs: (state: any) => state.posts.postsTabs,
  getCards: (state: any, filter: any) => {
    const cards = state.posts.cardsList;
    switch (filter) {
      case "likePosts":
        return cards.filter((a: any) => a.likeStatus === "like");
      case "dislikePosts":
        return cards.filter((a: any) => a.likeStatus === "dislike");
      case "savePosts":
        return cards.filter((a: any) => a.saved);
      case "allPosts":
        return cards;
      default:
        return cards;
    }
  },
};
