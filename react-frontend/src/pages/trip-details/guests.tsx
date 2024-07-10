import { CircleDashed, UserCog } from "lucide-react";

export function Guests(){
  return(
    <div className="space-y-6">
      <h3 className="text-zinc-50 text-xl font-semibold">Convidados</h3>
      <div className="space-y-5">
        <div className="flex gap-4 items-center justify-between">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Jessica White</span>
            <span className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Jessica White</span>
            <span className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 text-zinc-200 font-medium rounded-lg px-5 h-11 flex w-full justify-center items-center gap-2 hover:bg-zinc-700">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  )
}