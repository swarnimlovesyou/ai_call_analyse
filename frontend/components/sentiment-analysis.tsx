import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

interface SentimentData {
  overall: string
  progression: Array<{ time: string; value: number }>
  customer: string
  agent: string
}

interface SentimentAnalysisProps {
  sentiment: SentimentData
}

export function SentimentAnalysis({ sentiment }: SentimentAnalysisProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Overall Sentiment</h3>
            <p className="text-lg font-semibold">{sentiment.overall}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Sentiment Progression</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sentiment.progression}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[-1, 1]} ticks={[-1, -0.5, 0, 0.5, 1]} />
                  <Tooltip
                    formatter={(value: number) => [
                      value > 0
                        ? `Positive (${value.toFixed(1)})`
                        : value < 0
                          ? `Negative (${value.toFixed(1)})`
                          : `Neutral (${value.toFixed(1)})`,
                      "Sentiment",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Customer</h3>
              <p className="text-sm">{sentiment.customer}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Agent</h3>
              <p className="text-sm">{sentiment.agent}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

