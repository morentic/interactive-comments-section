import { createContext } from "react";

type User = {
  username: string;
  image: {
    png: string;
    webp: string;
  };
};

export const UserContext = createContext<User | null>(null);
