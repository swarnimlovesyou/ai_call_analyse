from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from datetime import datetime

class TranscriptEntry(BaseModel):
    speaker: str
    text: str
    time: str

class SentimentPoint(BaseModel):
    time: str
    value: float

class SentimentData(BaseModel):
    overall: str
    progression: List[SentimentPoint]
    customer: str
    agent: str

class ToneEntry(BaseModel):
    type: str
    percentage: float

class ToneData(BaseModel):
    customer: List[ToneEntry]
    agent: List[ToneEntry]

class ComplianceItem(BaseModel):
    check: str
    passed: bool
    note: Optional[str] = None

class ComplianceData(BaseModel):
    score: float
    items: List[ComplianceItem]

class ScoreCategory(BaseModel):
    name: str
    score: float

class FinalScoreData(BaseModel):
    overall: float
    categories: List[ScoreCategory]

class AnalysisResponse(BaseModel):
    id: str
    fileName: str
    duration: str
    date: str
    transcript: List[TranscriptEntry]
    sentiment: SentimentData
    tone: ToneData
    keyComplaints: List[str]
    compliance: ComplianceData
    finalScore: FinalScoreData

class ErrorResponse(BaseModel):
    detail: str