import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "@/components/ui/chart"

interface ToneData {
  customer: Array<{ type: string; percentage: number }>
  agent: Array<{ type: string; percentage: number }>
}

interface ToneAnalysisProps {
  tone: ToneData
}

export function ToneAnalysis({ tone }: ToneAnalysisProps) {
  const customerColors = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d"]
  const agentColors = ["#a4de6c", "#d0ed57", "#ffc658", "#ff8042"]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Tone Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Customer Tone</h3>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tone.customer} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="type" type="category" width={100} />
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                  <Bar dataKey="percentage" nameKey="type" radius={[0, 4, 4, 0]}>
                    {tone.customer.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={customerColors[index % customerColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Agent Tone</h3>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tone.agent} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="type" type="category" width={100} />
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                  <Bar dataKey="percentage" nameKey="type" radius={[0, 4, 4, 0]}>
                    {tone.agent.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={agentColors[index % agentColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

