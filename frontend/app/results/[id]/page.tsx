import { CallTranscript } from "@/components/call-transcript"
import { SentimentAnalysis } from "@/components/sentiment-analysis"
import { ComplianceCheck } from "@/components/compliance-check"
import { ToneAnalysis } from "@/components/tone-analysis"
import { KeyComplaints } from "@/components/key-complaints"
import { FinalScore } from "@/components/final-score"
import { Button } from "@/components/ui/button"
import { Download, Share2, Check, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would normally come from an API call based on the ID
const getSampleData = () => {
  return {
    id: "sample-result",
    fileName: "customer_support_call_12345.mp3",
    duration: "8:42",
    date: "2023-05-15",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for calling customer support. My name is Sarah. How may I assist you today?",
        time: "0:00",
      },
      {
        speaker: "Customer",
        text: "Hi Sarah, I'm calling about a transaction on my account that I don't recognize.",
        time: "0:08",
      },
      {
        speaker: "Agent",
        text: "I understand your concern. For security purposes, could you please verify your account by providing your full name and date of birth?",
        time: "0:15",
      },
      {
        speaker: "Customer",
        text: "Sure, my name is John Smith and my date of birth is January 15, 1980.",
        time: "0:25",
      },
      {
        speaker: "Agent",
        text: "Thank you for verifying your information, Mr. Smith. Now, could you tell me more about the transaction you're concerned about?",
        time: "0:35",
      },
      {
        speaker: "Customer",
        text: "There's a charge for Rs. 5,999 from an online store I've never heard of. I didn't make this purchase.",
        time: "0:45",
      },
      {
        speaker: "Agent",
        text: "I'm sorry to hear that. Let me check your recent transactions. Could you tell me when you noticed this charge?",
        time: "0:58",
      },
      { speaker: "Customer", text: "I just saw it today when I checked my account online.", time: "1:08" },
      {
        speaker: "Agent",
        text: "I see the transaction you're referring to. It was processed yesterday. In situations like this, we need to file a dispute and block your card to prevent any further unauthorized transactions.",
        time: "1:15",
      },
      { speaker: "Customer", text: "Yes, please do that. I'm worried about my account security.", time: "1:30" },
      {
        speaker: "Agent",
        text: "I completely understand your concern. I'll initiate the dispute process right away and issue a temporary credit while we investigate. I'll also block your current card and arrange for a new one to be sent to you.",
        time: "1:38",
      },
      { speaker: "Customer", text: "That sounds good. How long will it take to get the new card?", time: "2:00" },
      {
        speaker: "Agent",
        text: "Your new card should arrive within 5-7 business days. Is the address on your account still current?",
        time: "2:05",
      },
      { speaker: "Customer", text: "Yes, that's correct.", time: "2:15" },
      {
        speaker: "Agent",
        text: "Perfect. I've processed the dispute, blocked your card, and ordered a new one. You'll receive a confirmation email shortly with all the details. Is there anything else I can help you with today?",
        time: "2:20",
      },
      { speaker: "Customer", text: "No, that's all. Thank you for your help.", time: "2:40" },
      {
        speaker: "Agent",
        text: "You're welcome, Mr. Smith. Thank you for your patience. If you have any other questions, please don't hesitate to call us back. Have a great day!",
        time: "2:45",
      },
    ],
    sentiment: {
      overall: "Neutral to Positive",
      progression: [
        { time: "0:00", value: 0.2 },
        { time: "0:30", value: -0.3 },
        { time: "1:00", value: -0.5 },
        { time: "1:30", value: -0.2 },
        { time: "2:00", value: 0.4 },
        { time: "2:30", value: 0.6 },
      ],
      customer: "Initially Concerned, Later Satisfied",
      agent: "Consistently Professional and Empathetic",
    },
    tone: {
      customer: [
        { type: "Concern", percentage: 45 },
        { type: "Frustration", percentage: 15 },
        { type: "Relief", percentage: 30 },
        { type: "Satisfaction", percentage: 10 },
      ],
      agent: [
        { type: "Empathy", percentage: 35 },
        { type: "Professionalism", percentage: 40 },
        { type: "Reassurance", percentage: 25 },
      ],
    },
    keyComplaints: ["Unauthorized transaction of Rs. 5,999", "Account security concern"],
    compliance: {
      score: 95,
      items: [
        { check: "Identity verification", passed: true },
        { check: "Proper greeting and introduction", passed: true },
        { check: "Followed dispute protocol", passed: true },
        { check: "Explained next steps clearly", passed: true },
        { check: "Maintained customer privacy", passed: true },
        { check: "Offered additional assistance", passed: true },
        { check: "Proper closing", passed: true },
        {
          check: "Did not collect unnecessary information",
          passed: false,
          note: "Asked for DOB when account number would have been sufficient",
        },
      ],
    },
    finalScore: {
      overall: 92,
      categories: [
        { name: "Customer Service", score: 95 },
        { name: "Problem Resolution", score: 90 },
        { name: "Compliance", score: 95 },
        { name: "Communication", score: 88 },
      ],
    },
  }
}

export default function ResultsPage({ params }: { params: { id: string } }) {
  const data = getSampleData()

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Call Analysis Results</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {data.fileName} • {data.duration} • {data.date}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-1 md:col-span-2">
          <FinalScore data={data.finalScore} />
        </div>
        <div>
          <KeyComplaints complaints={data.keyComplaints} />
        </div>
      </div>

      <Tabs defaultValue="transcript" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment & Tone</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="transcript" className="mt-6">
          <CallTranscript transcript={data.transcript} />
        </TabsContent>
        <TabsContent value="sentiment" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SentimentAnalysis sentiment={data.sentiment} />
            <ToneAnalysis tone={data.tone} />
          </div>
        </TabsContent>
        <TabsContent value="compliance" className="mt-6">
          <ComplianceCheck compliance={data.compliance} />
        </TabsContent>
        <TabsContent value="recommendations" className="mt-6">
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Excellent handling of customer concern</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The agent showed appropriate empathy and took immediate action to resolve the issue.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center dark:bg-amber-900">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium">Improve identity verification process</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Use account number or other identifiers instead of date of birth for verification.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900">
                    <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Consider offering digital card options</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Provide information about digital card options that can be used immediately while waiting for the
                      physical card.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

