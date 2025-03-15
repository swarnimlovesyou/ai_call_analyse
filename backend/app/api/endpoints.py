from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from fastapi.responses import JSONResponse
from typing import List

from app.models.schemas import AnalysisResponse, ErrorResponse
from app.services.audio_service import AudioService
from app.services.analysis_service import AnalysisService
from app.config import MAX_UPLOAD_SIZE

router = APIRouter()

@router.post("/analyze", response_model=AnalysisResponse, responses={400: {"model": ErrorResponse}, 500: {"model": ErrorResponse}})
async def analyze_call(file: UploadFile = File(...)):
    """
    Upload and analyze a call recording.
    
    - **file**: MP3 or WAV audio file of the call recording
    
    Returns a complete analysis including:
    - Transcript with speaker separation
    - Sentiment analysis
    - Tone analysis
    - Key complaints
    - Compliance check
    - Final evaluation score
    """
    try:
        # Validate file type
        if file.content_type not in ["audio/mpeg", "audio/mp3", "audio/wav"]:
            raise HTTPException(status_code=400, detail="File must be an MP3 or WAV audio file")
        
        # Read file content
        file_content = await file.read()
        
        # Check file size
        if len(file_content) > MAX_UPLOAD_SIZE:
            raise HTTPException(status_code=400, detail=f"File size exceeds the maximum limit of {MAX_UPLOAD_SIZE // (1024 * 1024)}MB")
        
        # Save uploaded file
        audio_service = AudioService()
        file_path = await audio_service.save_upload(file_content, file.filename)
        
        # Preprocess audio
        preprocessed_path = audio_service.preprocess_audio(file_path)
        
        # Analyze call
        analysis_service = AnalysisService()
        result = await analysis_service.analyze_call(preprocessed_path, file.filename)
        
        return result
    
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during analysis: {str(e)}")

@router.get("/health")
async def health_check():
    """
    Health check endpoint to verify the API is running.
    """
    return {"status": "ok"}