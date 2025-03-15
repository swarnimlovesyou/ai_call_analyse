import os
import librosa
import soundfile as sf
import numpy as np
from app.config import UPLOAD_DIR

class AudioService:
    @staticmethod
    async def save_upload(file_content, filename):
        """Save uploaded audio file to disk."""
        file_path = os.path.join(UPLOAD_DIR, filename)
        with open(file_path, "wb") as f:
            f.write(file_content)
        return file_path
    
    @staticmethod
    def preprocess_audio(file_path):
        """Preprocess audio for analysis."""
        try:
            # Load audio file
            audio, sr = librosa.load(file_path, sr=None)
            
            # Resample if needed
            if sr != 16000:
                audio = librosa.resample(audio, orig_sr=sr, target_sr=16000)
                sr = 16000
            
            # Normalize audio
            audio = librosa.util.normalize(audio)
            
            # Save preprocessed audio
            preprocessed_path = file_path.replace('.', '_preprocessed.')
            sf.write(preprocessed_path, audio, sr)
            
            return preprocessed_path
        except Exception as e:
            print(f"Error preprocessing audio: {e}")
            return file_path