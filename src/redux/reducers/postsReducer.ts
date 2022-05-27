import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: Card | null;
  selectedImg: string | Array<string> | null;
  cardsList: Card[];
  postsTabs: string;
};
const initialState: PostState = {
  selectedPost: null,
  selectedImg: "",
  cardsList: [],
  postsTabs: "all",
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
    loadData: (state, action) => {
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
  },
});
export const {
  setSelectedPost,
  setSelectedImg,
  loadData,
  setSavePost,
  setLikePost,
  setPostsTabs,
} = postsSlice.actions;

export default postsSlice.reducer;
export const PostsSelectors = {
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
