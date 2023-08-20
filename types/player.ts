export type Xassida = {
  id: number
  file: string
}

export enum SeekType {
  Forward = "Forward",
  Backward = "Backward",
  To = "To",
}

export type SeekProps = {
  type?: SeekType
  time: number
}

export interface PlayerActions {
  // player actions
  play: () => void
  pause: () => void
  toggle: () => void
  playXassida: (xassida: Xassida) => void
  seek: ({ type, time }: SeekProps) => void
  isPlaying: () => boolean
  isCurrentPlaying: (xassida: Xassida) => boolean
}

export interface StateActions {
  // setters
  setAudioPlayer: (ref: HTMLAudioElement) => void
  setAudioSrc: (src: string) => void
  setVisible: (val: boolean) => void
  setXassida: (data: Xassida) => void
  setReciterId: (id: number) => void
  setVerseNumber: (num: number) => void
  setAudioData: (data: any) => void
  setVerseCount: (count: number) => void
  setElapsed: (val: number) => void
  setDuration: (val: number) => void
  setDownloadProgress: (val: number) => void
  setPlaybackRate: (rate: number) => void
  setRecitersList: (data: any) => void
}

export interface AudioPlayerContext extends PlayerActions, StateActions {
  audioPlayer: HTMLAudioElement
  visible: boolean
  xassida: Xassida | null
  reciterId: number | null
  verseNumber: number
  audioData: any
  verseCount: number
  elapsed: number
  duration: number
  downloadProgress: number
  playbackRate: number
  recitersList: any
}
