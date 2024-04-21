import { createContext } from "react";

export const categoryContext = createContext<string[]>([]);

export const selectedCategoryContext = createContext<string>("all");