import { Calendar, Tag, X } from "lucide-react"

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}
export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps){
    return(
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
              <button onClick={closeCreateActivityModal}>
                <X className="size-5 text-zinc-400 hover:text-zinc-200" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">Todos convidados podem visualizar as atividades.</p>
          </div>

          <form  className='space-y-5'>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg h-14 px-4 flex items-center flex-1 gap-2">
              <Tag className="size-5 text-zinc-400" />
              <input type= "text" name="activity" placeholder="Qual a atividade?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg h-14 px-4 flex items-center flex-1 gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input type="datetime-local" name="occurs_at" placeholder="Data e horário da atividade" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]" />
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800" />
            <button type="submit" className="bg-lime-300 text-lime-950 font-medium rounded-lg px-5 h-11 flex w-full items-center gap-2 justify-center hover:bg-lime-400">
              Salvar atividade
            </button>
          </form>
        </div>
      </div>
    )
}

