import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){
  return(
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center justify-between shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input type="text" placeholder="Florianópolis, Brasil" className="bg-transparent placeholder-zinc-100 outline-none flex-1" />
      </div>
      
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input type="text" placeholder="17 a 23 de Agosto" className="bg-transparent placeholder-zinc-100 w-40 outline-none" />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      <Button size="default" variant="gray">
        Alterar local/data
        <Settings2 className="size-5" />
      </Button>
    </div>
  )
}