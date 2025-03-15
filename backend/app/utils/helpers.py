import os
import uuid
import librosa
from datetime import datetime

def generate_unique_id():
    """Generate a unique ID for the analysis."""
    return str(uuid.uuid4())

def format_time(seconds):
    """Format seconds into MM:SS format."""
    minutes = int(seconds // 60)
    seconds = int(seconds % 60)
    return f"{minutes}:{seconds:02d}"

def get_audio_duration(file_path):
    """Get the duration of an audio file in MM:SS format."""
    try:
        duration, _ = librosa.load(file_path, sr=None, duration=5)  # Just load a small portion to get duration
        duration = librosa.get_duration(y=None, sr=None, filename=file_path)
        return format_time(duration)
    except Exception as e:
        print(f"Error getting audio duration: {e}")
        return "0:00"

def format_date(date=None):
    """Format date as YYYY-MM-DD."""
    if date is None:
        date = datetime.now()
    return date.strftime("%Y-%m-%d")

def clean_filename(filename):
    """Clean and sanitize a filename."""
    return os.path.basename(filename)