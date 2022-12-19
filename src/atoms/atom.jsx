import { atom } from 'recoil'

export const languageState = atom({
  key: 'language',
  default: 'PL'
})

export const mediumClicked = atom({
  key: 'isMediumClicked',
  default: false
})
