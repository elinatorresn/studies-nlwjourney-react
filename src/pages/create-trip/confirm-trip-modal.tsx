import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({ closeConfirmTripModal, setOwnerName, setOwnerEmail, createTrip }: ConfirmTripModalProps) {
  return(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400 hover:text-zinc-200" />
            </button>
            
          </div>
          <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-semibold">16 <br /> 
          a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
        </div>

        <form onClick={createTrip} className='space-y-5'>
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg h-14 px-4 flex items-center flex-1 gap-2">
            <User className="size-5 text-zinc-400" />
            <input type= "text" onChange={event => setOwnerName(event.target.value)} name="name" placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg h-14 px-4 flex items-center flex-1 gap-2">
            <Mail className="size-5 text-zinc-400" />
            <input type= "email" onChange={event => setOwnerEmail(event.target.value)} name="email" placeholder="Seu e-mail pessoal" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <Button type="submit" size="full" variant="green">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}