import { atom } from "recoil";
import { musicData } from "../data/musicData";

export const languageState = atom({
  key: "language",
  default: typeof window !== "undefined" && JSON.parse(localStorage.getItem("language")),
});

export const mediumClicked = atom({
  key: "isMediumClicked",
  default: false,
});

export const selectedMediumState = atom({
  key: "selectedMedium",
  default: "Music",
});

export const currentSongState = atom({
  key: "currentSong",
  default: musicData[0],
});

export const currentSongIndex = atom({
  key: "currentIndex",
  default: 0,
});
export const imageState = atom({
  key: "currentImage",
  default: "01.jpg",
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const currentVideoIndex = atom({
  key: "videoIndex",
  default: 0,
});
export const isMenuOpen = atom({
  key: "isMenuToggled",
  default: false,
});

export const musicInFooter = atom({
  key: "isMusicInFooter",
  default: false,
});
export const musicInPlayer = atom({
  key: "isMusicInPlayer",
  default: false,
});
