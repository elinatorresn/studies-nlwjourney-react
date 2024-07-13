import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { api } from "../../lib/axios";
import { format } from 'date-fns'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader(){
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])

  const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL"))
    : null

  return(
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center justify-between shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100 flex-1">{trip?.destination}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{displayedDate}</span>
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      <Button size="default" variant="gray">
        Alterar local/data
        <Settings2 className="size-5" />
      </Button>
    </div>
  )
}