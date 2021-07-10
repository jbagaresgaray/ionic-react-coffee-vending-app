import { isPlatform } from "@ionic/react";

const width = window.innerWidth;
const height = window.innerHeight;

export const SPACING = 10;
export const ITEM_SIZE = isPlatform("ios") ? width * 0.72 : width * 0.74;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.65;

export const COLOR_COFFEE = "#482b0a";
