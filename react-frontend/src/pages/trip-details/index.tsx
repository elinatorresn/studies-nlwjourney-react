import { Calendar, CircleCheck, CircleDashed, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetailsPage() {
 return (
  <div className="max-w-6xl px-6 py-10 mx-auto gap-3 space-y-8">
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

      <button className="bg-zinc-800 text-zinc-200 font-medium rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">
        Alterar local/data
        <Settings2 className="size-5" />
      </button>
    </div>

    <main className="flex gap-16 px-4">
      <div className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-50 text-3xl font-semibold">Atividades</h2>
          <button className="bg-lime-300 text-lime-950 font-medium rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
            <Plus className="size-5" />
            Cadastrar atividade
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300 font-semibold">17.08</span>
              <span className="text-xs text-zinc-500">Sábado</span>
            </div>
            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
          </div>

          <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300 font-semibold">18.08</span>
              <span className="text-xs text-zinc-500">Domingo</span>
            </div>

            <div className="space-y-2.5">
              <div className="bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300" />
                <span className="text-zinc-100">Corrida de Kart</span>
                <span className="text-sm text-zinc-400 ml-auto">14:00h</span>
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape flex items-center gap-3">
                <CircleDashed className="size-5 text-zinc-400" />
                <span className="text-zinc-100">Academia em grupo</span>
                <span className="text-sm text-zinc-400 ml-auto">21:00h</span>
              </div>
            </div>
            

          </div>
        </div>
      </div>

      <div className="w-80 space-y-6">
        <div>
          <h3 className="text-zinc-50 text-xl font-semibold">Links importantes</h3>
        </div>
      </div>

      
    
    </main>
  </div>
 )
}