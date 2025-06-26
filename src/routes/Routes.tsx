import { PageNotFound } from "../pages/404page.tsx";
import { Root } from "../pages/Root.tsx";
import { PostDetail } from "../pages/PostDetail";
import { UserList } from "../pages/UserList";
import { UserProfile } from "../pages/UserProfile";

export default [
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/posts/:id",
    lazy: async () => {
      return { Component: PostDetail };
    },
  },
  {
    path: "/users",
    lazy: async () => {
      return { Component: UserList };
    },
  },
  {
    path: "/users/:id",
    lazy: async () => {
      return { Component: UserProfile };
    },
  },
  {
    path: "*",
    Component: PageNotFound,
  },
];
