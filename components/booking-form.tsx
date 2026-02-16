"use client"

import React from "react"
import { CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingForm({ className }: { className?: string }) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  })

  return (
    <div
      className={cn(
        "bg-white p-8 rounded-2xl shadow-2xl relative z-10",
        className,
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Date Picker */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-600">Fechas</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-semibold h-12 border-zinc-200 bg-white hover:bg-slate-50 transition-colors rounded-xl",
                  !date && "text-slate-500",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-amber-600" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "d MMM", { locale: es })} - {format(date.to, "d MMM", { locale: es })}
                    </>
                  ) : (
                    format(date.from, "d MMM", { locale: es })
                  )
                ) : (
                  <span>Seleccionar fechas</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-600">Huéspedes</label>
          <Select defaultValue="2">
            <SelectTrigger className="h-12 border-zinc-200 bg-white hover:bg-slate-50 transition-colors rounded-xl font-semibold">
              <Users className="mr-2 h-4 w-4 text-amber-600" />
              <SelectValue placeholder="Personas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Persona</SelectItem>
              <SelectItem value="2">2 Personas</SelectItem>
              <SelectItem value="3">3 Personas</SelectItem>
              <SelectItem value="4">4 Personas</SelectItem>
              <SelectItem value="5">5 Personas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <Button className="w-full h-12 text-lg font-serif bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold">
            Reservar Ahora
          </Button>
        </div>
      </div>
    </div>
  )
}
