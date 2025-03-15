import { FileUploader } from "@/components/file-uploader"

export default function UploadPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col items-center space-y-6 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upload Call Recording</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Upload an MP3 file of your customer care call to analyze sentiment, compliance, and more.
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <FileUploader />
      </div>

      <div className="mt-12 space-y-6 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Supported File Types</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-medium text-primary">MP3</span>
            </div>
            <div>
              <h3 className="font-medium">MP3 Audio Files</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Standard audio format for call recordings</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-medium text-primary">WAV</span>
            </div>
            <div>
              <h3 className="font-medium">WAV Audio Files</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">High-quality uncompressed audio format</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-blue-50 p-4 dark:bg-blue-950">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">File Requirements</h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maximum file size: 50MB</li>
                  <li>Recommended duration: 2-15 minutes</li>
                  <li>Clear audio quality for best results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

