import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

interface KeyComplaintsProps {
  complaints: string[]
}

export function KeyComplaints({ complaints }: KeyComplaintsProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Key Complaints
        </CardTitle>
      </CardHeader>
      <CardContent>
        {complaints.length > 0 ? (
          <ul className="space-y-3">
            {complaints.map((complaint, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400">
                  {index + 1}
                </div>
                <span>{complaint}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No key complaints identified.</p>
        )}
      </CardContent>
    </Card>
  )
}

