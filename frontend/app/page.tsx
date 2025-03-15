import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileAudio, BarChart3, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI Call Analyzer for Customer Care
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload your customer care calls and get instant insights with our advanced AI analysis.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/upload">
                  <Button className="h-11 px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" className="h-11 px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered call analyzer provides comprehensive insights for customer care calls
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <FileAudio className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Call Transcription</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Accurate transcription with speaker separation for clear conversation analysis
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sentiment Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Detect positive, neutral, and negative sentiments throughout the call
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Compliance Check</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Verify if agents followed RBI guidelines during customer interactions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple Process, Powerful Insights
                </h2>
                <ul className="grid gap-6">
                  <li className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Upload Your Call Recording</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Simply upload an MP3 file of your customer care call
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">AI Analysis</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Our AI processes the call for transcription, sentiment, and compliance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Review Detailed Results</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Get comprehensive insights with actionable recommendations
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/upload">
                    <Button className="h-11 px-8">
                      Try It Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Call Analysis Dashboard"
                  className="rounded-lg object-cover border shadow-md"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

