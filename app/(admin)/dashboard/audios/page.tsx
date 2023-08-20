import { Separator } from "@/components/ui/separator"
import AudioTab from "@/components/HomePage/Tabs/AudioTab"

import AudioModalForm from "./components/AudioModalForm"

export default function AudioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Les Audios</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Creer un nouveau audio grace au formulaire.
          </p>
          <AudioModalForm />
        </div>
      </div>
      <Separator />
      <AudioTab />
    </div>
  )
}
