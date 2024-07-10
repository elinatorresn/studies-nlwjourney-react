import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

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
      <Button type="submit" size="full" variant="gray">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}