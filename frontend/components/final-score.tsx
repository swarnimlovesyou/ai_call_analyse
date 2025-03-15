import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "@/components/ui/chart"

interface ScoreCategory {
  name: string
  score: number
}

interface FinalScoreData {
  overall: number
  categories: ScoreCategory[]
}

interface FinalScoreProps {
  data: FinalScoreData
}

export function FinalScore({ data }: FinalScoreProps) {
  const scoreColor = getScoreColor(data.overall)

  // Format data for radar chart
  const radarData = data.categories.map((cat) => ({
    subject: cat.name,
    A: cat.score,
    fullMark: 100,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Evaluation Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
              <svg className="w-32 h-32">
                <circle
                  className="text-gray-200 dark:text-gray-700"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
                <circle
                  className={scoreColor}
                  strokeWidth="10"
                  strokeDasharray={`${data.overall * 3.51} 351`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
              </svg>
              <span className="absolute text-3xl font-bold">{data.overall}</span>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">Overall Score</span>
          </div>

          <div className="md:col-span-2 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Score" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {data.categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold">{category.score}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{category.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function getScoreColor(score: number): string {
  if (score >= 90) return "text-green-500"
  if (score >= 70) return "text-amber-500"
  return "text-red-500"
}

