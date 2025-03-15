import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface ComplianceItem {
  check: string
  passed: boolean
  note?: string
}

interface ComplianceData {
  score: number
  items: ComplianceItem[]
}

interface ComplianceCheckProps {
  compliance: ComplianceData
}

export function ComplianceCheck({ compliance }: ComplianceCheckProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RBI Compliance Check</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Compliance Score</h3>
              <span className="text-2xl font-bold">{compliance.score}%</span>
            </div>
            <Progress value={compliance.score} className="h-2" />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Compliance Checklist</h3>
            <div className="space-y-3">
              {compliance.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-md bg-gray-50 dark:bg-gray-800">
                  <div
                    className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
                      item.passed ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"
                    }`}
                  >
                    {item.passed ? (
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.check}</p>
                    {item.note && (
                      <div className="mt-2 flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <p>{item.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

