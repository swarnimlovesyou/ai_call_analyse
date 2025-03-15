"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, X, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function FileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (file: File) => {
    setError(null)

    // Check file type
    const validTypes = ["audio/mpeg", "audio/mp3", "audio/wav"]
    if (!validTypes.includes(file.type)) {
      setError("Please upload an MP3 or WAV file")
      return
    }

    // Check file size (50MB max)
    if (file.size > 50 * 1024 * 1024) {
      setError("File size exceeds 50MB limit")
      return
    }

    setFile(file)
  }

  const handleRemoveFile = () => {
    setFile(null)
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return 95
        }
        return prev + 5
      })
    }, 300)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))

      clearInterval(interval)
      setUploadProgress(100)

      toast({
        title: "Upload successful",
        description: "Your file has been uploaded and is being processed.",
      })

      // Simulate processing time before redirect
      setTimeout(() => {
        router.push("/results/sample-result")
      }, 1500)
    } catch (error) {
      clearInterval(interval)
      setIsUploading(false)
      setError("Upload failed. Please try again.")
    }
  }

  return (
    <div className="w-full space-y-6">
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center ${
            isDragging ? "border-primary bg-primary/5" : "border-gray-300 dark:border-gray-700"
          } transition-colors duration-200 cursor-pointer`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Upload your call recording</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drag and drop your MP3 file here, or click to browse
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">MP3 or WAV format, max 50MB</p>
            </div>
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".mp3,.wav,audio/mpeg,audio/wav"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleRemoveFile} disabled={isUploading}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {isUploading && (
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {error && (
        <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      <Button className="w-full" disabled={!file || isUploading} onClick={handleUpload}>
        {isUploading ? "Uploading..." : "Analyze Call"}
      </Button>
    </div>
  )
}

