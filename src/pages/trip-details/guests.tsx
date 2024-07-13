import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { api } from "../../lib/axios";
import { CheckCircle2 } from "lucide-react"

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests(){
const { tripId } = useParams()
const [participants, setParticipants] = useState<Participant[]>([])

useEffect(() => {
  api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
}, [tripId])

  return(
    <div className="space-y-6">
      <h3 className="text-zinc-50 text-xl font-semibold">Convidados</h3>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex gap-4 items-center justify-between">
              <div className="space-y-1.5">
                <span className="block text-zinc-100 font-medium">{participant.name ?? `Convidado ${index}`}</span>
                <span className="block text-sm text-zinc-400 truncate">{participant.email}</span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="size-5 text-lime-400 shrink-0" />
              ): (
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              )}
            </div>
          )
        })}
      </div>
      <Button type="submit" size="full" variant="gray">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}