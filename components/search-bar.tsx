"use client"

import { useState } from "react"
import { Search, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Command, CommandEmpty, CommandGroup,  CommandItem, CommandList } from "@/components/ui/command"

// Sample destinations - you can replace these with your actual destinations
const destinations = [
  { id: 1, name: "Mount Cameroon", region: "South West" },
  { id: 2, name: "Limbe Wildlife Centre", region: "South West" },
  { id: 3, name: "Korup National Park", region: "South West" },
  { id: 4, name: "Kribi Beach", region: "South" },
  { id: 5, name: "Waza National Park", region: "Far North" },
  { id: 6, name: "Dja Faunal Reserve", region: "East" },
]

export default function SearchBar() {
  const [date, setDate] = useState<Date>()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Where to?" 
            className="pl-9 text-white placeholder-white bg-green-700" 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setSearchOpen(true)
            }}
            onFocus={() => setSearchOpen(true)}
          />
          {searchOpen && searchQuery && (
            <div className="absolute mt-2 w-full rounded-md border bg-white shadow-lg">
              <Command>
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Destinations">
                    {filteredDestinations.map((destination) => (
                      <CommandItem
                        key={destination.id}
                        onSelect={() => {
                          setSearchQuery(destination.name)
                          setSearchOpen(false)
                        }}
                        className="cursor-pointer p-2 hover:bg-green-50"
                      >
                        <Search className="mr-2 h-4 w-4" />
                        <div>
                          <div className="font-medium">{destination.name}</div>
                          <div className="text-sm text-gray-500">{destination.region}</div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          )}
        </div>

        <div className="relative">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal bg-green-700 text-white hover:bg-green-800">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus className="bg-black text-white"
               fromDate={new Date()} />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Select>
            <SelectTrigger className="bg-green-700 text-white hover:bg-green-800">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Travelers" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Traveler</SelectItem>
              <SelectItem value="2">2 Travelers</SelectItem>
              <SelectItem value="3">3 Travelers</SelectItem>
              <SelectItem value="4">4+ Travelers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-green-700 hover:bg-green-800">Search Tours</Button>
      </div>
    </div>
  )
}
