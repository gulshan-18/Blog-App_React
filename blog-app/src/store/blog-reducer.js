import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: { blogs: [] },
  reducers: {
    createBlog(state, action) {
      const ids = state.blogs.map((blog) => blog.id);
      const newId = ids.length === 0 ? 1 : Math.max(...ids) + 1;
      state.blogs.push({
        id: newId,
        title: action.payload.title,
        category: action.payload.category,
        content: action.payload.content,
        like: false,
      });
      localStorage.setItem("store", JSON.stringify(state));
    },
    updateBlog(state, action) {
      const blogIndex = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (blogIndex !== -1) {
        state.blogs[blogIndex] = {
          ...state.blogs[blogIndex],
          title: action.payload.title,
          category: action.payload.category,
          content: action.payload.content,
        };
        localStorage.setItem("store", JSON.stringify(state));
      } else {
        console.log(
          `Cannot Update Blog With ID '${action.payload.id}' Not Found`
        );
      }
    },
    toggleLike(state, action) {
      const blogIndex = state.blogs.findIndex(
        (blog) => blog.id === Number(action.payload.id)
      );
      state.blogs[blogIndex] = {
        ...state.blogs[blogIndex],
        like: !state.blogs[blogIndex].like,
      };
      localStorage.setItem("store", JSON.stringify(state));
    },
    updateStore(state, action) {
      if (action.payload.store) {
        state.blogs = action.payload.store.blogs;
      }
    },
    deleteBlog(state, action) {
      const newBlogs = state.blogs.filter(
        (blog) => Number(action.payload.id) !== blog.id
      );
      if (newBlogs.length !== state.blogs.length) {
        state.blogs = newBlogs;
        localStorage.setItem("store", JSON.stringify(state));
      } else {
        console.log(
          `Cannot Delete Blog With ID '${action.payload.id}' Not Found`
        );
      }
    },
  },
});

export const blogActions = blogSlice.actions;

export default blogSlice;
