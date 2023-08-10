/* eslint-disable tailwindcss/no-contradicting-classname */
"use client"

import { useEffect, useRef } from "react"
import { Xassida } from "@/types"
import { playerStore } from "@/zustand/playerStore"
import { navbarSelector } from "@/zustand/slices/navbar"
import { useStore } from "@/zustand/store"
import { Download, Pause, Play } from "lucide-react"
import { Virtuoso } from "react-virtuoso"

import { BASE_URL } from "@/lib/api"
import { cn, unslugify } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BismillahVariant } from "@/components/Bismillah"

import Chapter from "./Chapter"
import ChapterSelect from "./ChapterSelect"

interface Props {
  xassida: Xassida
}

const Reader = ({ xassida }: Props) => {
  // add xassida to reading history
  const { visible } = useStore(navbarSelector)
  const virtuoso = useRef(null)
  const audioService = playerStore((store) => store)
  const currentPlaying = audioService.isCurrentPlaying(xassida)

  const handlePlay = () => {
    if (currentPlaying) audioService.pause()
    else audioService.playXassida(xassida)
  }

  return (
    <div>
      <div
        className={cn(
          "animate sticky z-30 flex w-full items-center justify-between bg-background p-1 px-4 shadow-md duration-200 dark:bg-muted",
          visible ? "top-[56px]" : "top-0"
        )}
      >
        <ChapterSelect virtuoso={virtuoso} chapters={xassida.chapters} />
        <div>
          <a
            target="_blank"
            href={`${BASE_URL}pdf/${xassida.id}`}
            rel="noreferrer"
          >
            <Download size={20} />
          </a>
        </div>
      </div>
      <div className="container">
        <header className="flex flex-col items-center justify-center py-3">
          <h3 className="text-2xl capitalize">{unslugify(xassida.name)}</h3>
          <div className="flex w-full flex-col items-center py-4">
            <BismillahVariant />
            <div className="flex w-full items-end justify-end pt-4">
              <Button onClick={handlePlay} variant="outline">
                {currentPlaying ? (
                  <Pause className="mr-2 h-4 w-4" />
                ) : (
                  <Play className="mr-2 h-4 w-4" />
                )}
                <span>{currentPlaying ? "Arreter" : "Demarrer"} Audio</span>
              </Button>
            </div>
          </div>
        </header>
        <div className="font-amiri font-hafs font-lateef font-scheherazade font-warsh">
          <Virtuoso
            ref={virtuoso}
            useWindowScroll
            increaseViewportBy={1000}
            data={xassida.chapters}
            itemContent={(i, chap) => <Chapter chap={chap} />}
          />
        </div>
      </div>
    </div>
  )
}

export default Reader
