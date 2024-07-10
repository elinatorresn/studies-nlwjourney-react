import { Link2, Plus } from "lucide-react";

export function ImportantLinks(){
  return(
    <div className="space-y-6">
      <h3 className="text-zinc-50 text-xl font-semibold">Links importantes</h3>
      <div className="space-y-5">
        <div className="flex gap-4 items-center justify-between">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/10470001153453534543543543534</a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Regras da casa</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000</a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 text-zinc-200 font-medium rounded-lg px-5 h-11 flex w-full justify-center items-center gap-2 hover:bg-zinc-700">
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  )
}