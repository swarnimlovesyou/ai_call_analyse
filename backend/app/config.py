import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# API Settings
API_HOST = os.getenv("API_HOST", "0.0.0.0")
API_PORT = int(os.getenv("API_PORT", 8000))
DEBUG = os.getenv("DEBUG", "False").lower() == "true"

# File Upload Settings
UPLOAD_DIR = os.getenv("UPLOAD_DIR", "uploads")
MAX_UPLOAD_SIZE = int(os.getenv("MAX_UPLOAD_SIZE", 52428800))  # 50MB

# Model Settings
SENTIMENT_MODEL = os.getenv("SENTIMENT_MODEL", "distilbert-base-uncased-finetuned-sst-2-english")

# Create uploads directory if it doesn't exist
os.makedirs(UPLOAD_DIR, exist_ok=True)