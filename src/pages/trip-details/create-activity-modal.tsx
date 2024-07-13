import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from "../../lib/axios";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}
export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps){
  const { tripId } = useParams()

  async function CreateActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at
    })

    window.document.location.reload()
  }
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

          <form onSubmit={CreateActivity} className='space-y-5'>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg h-14 px-4 flex items-center flex-1 gap-2">
              <Tag className="size-5 text-zinc-400" />
              <input type= "text" name="title" placeholder="Qual a atividade?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg h-14 px-4 flex items-center flex-1 gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input type="datetime-local" name="occurs_at" placeholder="Data e horário da atividade" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]" />
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800" />
            
            <Button type="submit" size="full" variant="green">
              Salvar atividade
            </Button>
          </form>
        </div>
      </div>
    )
}

