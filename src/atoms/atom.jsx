import { atom } from 'recoil'
import { musicData } from "../data/musicData"

export const languageState = atom({
  key: 'language',
  default: 'PL'
})

export const mediumClicked = atom({
  key: 'isMediumClicked',
  default: false
})

export const currentSongState = atom({
  key: 'currentSong',
  default: musicData[0]
})

export const currentSongIndex = atom({
  key: 'currentIndex',
  default: 0
})
