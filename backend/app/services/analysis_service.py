from app.services.transcription_service import TranscriptionService
from app.services.sentiment_service import SentimentService
from app.services.compliance_service import ComplianceService
from app.utils.helpers import generate_unique_id, get_audio_duration, format_date, clean_filename

class AnalysisService:
    def __init__(self):
        self.transcription_service = TranscriptionService()
        self.sentiment_service = SentimentService()
        self.compliance_service = ComplianceService()
    
    async def analyze_call(self, file_path, original_filename):
        """
        Perform complete analysis of a call recording.
        
        Steps:
        1. Transcribe audio with speaker diarization
        2. Analyze sentiment and tone
        3. Check compliance with RBI guidelines
        4. Identify key complaints
        5. Calculate final evaluation score
        
        Returns a complete analysis result.
        """
        # Generate a unique ID for this analysis
        analysis_id = generate_unique_id()
        
        # Get audio duration
        duration = get_audio_duration(file_path)
        
        # Get current date
        date = format_date()
        
        # Clean filename
        filename = clean_filename(original_filename)
        
        # Step 1: Transcribe audio
        transcript = self.transcription_service.transcribe(file_path)
        
        # Step 2: Analyze sentiment and tone
        sentiment = self.sentiment_service.analyze_sentiment(transcript)
        tone = self.sentiment_service.analyze_tone(transcript)
        
        # Step 3: Check compliance
        compliance = self.compliance_service.check_compliance(transcript)
        
        # Step 4: Identify key complaints
        key_complaints = self.compliance_service.identify_key_complaints(transcript)
        
        # Step 5: Calculate final score
        final_score = self._calculate_final_score(sentiment, compliance, transcript)
        
        # Compile complete analysis
        analysis = {
            "id": analysis_id,
            "fileName": filename,
            "duration": duration,
            "date": date,
            "transcript": transcript,
            "sentiment": sentiment,
            "tone": tone,
            "keyComplaints": key_complaints,
            "compliance": compliance,
            "finalScore": final_score
        }
        
        return analysis
    
    def _calculate_final_score(self, sentiment, compliance, transcript):
        """
        Calculate final evaluation score based on various factors.
        
        In a real implementation, you would:
        1. Define specific scoring criteria
        2. Weight different factors appropriately
        3. Calculate a comprehensive score
        
        For this example, we'll return mock data.
        """
        # Mock score data
        return {
            "overall": 92,
            "categories": [
                {"name": "Customer Service", "score": 95},
                {"name": "Problem Resolution", "score": 90},
                {"name": "Compliance", "score": compliance["score"]},
                {"name": "Communication", "score": 88}
            ]
        }