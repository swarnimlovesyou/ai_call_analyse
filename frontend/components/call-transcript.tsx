"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface TranscriptEntry {
  speaker: string
  text: string
  time: string
}

interface CallTranscriptProps {
  transcript: TranscriptEntry[]
}

export function CallTranscript({ transcript }: CallTranscriptProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState<string | null>(null)

  const filteredTranscript = transcript.filter((entry) => {
    const matchesSearch = searchTerm === "" || entry.text.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === null || entry.speaker === filter
    return matchesSearch && matchesFilter
  })

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Call Transcript</CardTitle>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search transcript..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant={filter === null ? "default" : "outline"} size="sm" onClick={() => setFilter(null)}>
              All
            </Button>
            <Button variant={filter === "Agent" ? "default" : "outline"} size="sm" onClick={() => setFilter("Agent")}>
              Agent
            </Button>
            <Button
              variant={filter === "Customer" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("Customer")}
            >
              Customer
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredTranscript.map((entry, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-20 flex-shrink-0 text-sm text-gray-500 dark:text-gray-400">{entry.time}</div>
              <div className="flex-1">
                <div
                  className={`font-medium ${entry.speaker === "Agent" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}
                >
                  {entry.speaker}
                </div>
                <div className="mt-1">{entry.text}</div>
              </div>
            </div>
          ))}

          {filteredTranscript.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No transcript entries match your search.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

