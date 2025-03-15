import re

class ComplianceService:
    def __init__(self):
        # Define RBI compliance rules
        self.compliance_rules = [
            {
                "name": "Identity verification",
                "check": lambda transcript: self._check_identity_verification(transcript)
            },
            {
                "name": "Proper greeting and introduction",
                "check": lambda transcript: self._check_greeting(transcript)
            },
            {
                "name": "Followed dispute protocol",
                "check": lambda transcript: self._check_dispute_protocol(transcript)
            },
            {
                "name": "Explained next steps clearly",
                "check": lambda transcript: self._check_next_steps(transcript)
            },
            {
                "name": "Maintained customer privacy",
                "check": lambda transcript: self._check_privacy(transcript)
            },
            {
                "name": "Offered additional assistance",
                "check": lambda transcript: self._check_additional_assistance(transcript)
            },
            {
                "name": "Proper closing",
                "check": lambda transcript: self._check_closing(transcript)
            },
            {
                "name": "Did not collect unnecessary information",
                "check": lambda transcript: self._check_unnecessary_info(transcript)
            }
        ]
    
    def check_compliance(self, transcript):
        """
        Check compliance with RBI guidelines.
        
        In a real implementation, you would:
        1. Define specific rules based on RBI guidelines
        2. Check each rule against the transcript
        3. Calculate a compliance score
        
        For this example, we'll use simple pattern matching for some rules
        and return mock data for others.
        """
        compliance_items = []
        
        # Check each compliance rule
        for rule in self.compliance_rules:
            result, note = rule["check"](transcript)
            compliance_items.append({
                "check": rule["name"],
                "passed": result,
                "note": note if not result else None
            })
        
        # Calculate compliance score
        passed_count = sum(1 for item in compliance_items if item["passed"])
        compliance_score = (passed_count / len(compliance_items)) * 100
        
        return {
            "score": round(compliance_score),
            "items": compliance_items
        }
    
    def _check_identity_verification(self, transcript):
        """Check if agent verified customer identity."""
        for entry in transcript:
            if entry["speaker"] == "Agent" and re.search(r"verify|verification|identity|confirm", entry["text"], re.IGNORECASE):
                return True, None
        return False, "No identity verification detected"
    
    def _check_greeting(self, transcript):
        """Check if agent provided proper greeting and introduction."""
        if transcript and transcript[0]["speaker"] == "Agent":
            text = transcript[0]["text"].lower()
            if "thank you" in text and "my name is" in text:
                return True, None
        return False, "No proper greeting or introduction"
    
    def _check_dispute_protocol(self, transcript):
        """Check if agent followed dispute protocol."""
        # Mock implementation - in a real system, you would check for specific protocol steps
        return True, None
    
    def _check_next_steps(self, transcript):
        """Check if agent explained next steps clearly."""
        # Mock implementation
        return True, None
    
    def _check_privacy(self, transcript):
        """Check if agent maintained customer privacy."""
        # Mock implementation
        return True, None
    
    def _check_additional_assistance(self, transcript):
        """Check if agent offered additional assistance."""
        for entry in transcript:
            if entry["speaker"] == "Agent" and re.search(r"anything else|help you with|assist you", entry["text"], re.IGNORECASE):
                return True, None
        return False, "No offer of additional assistance"
    
    def _check_closing(self, transcript):
        """Check if agent provided proper closing."""
        if transcript and transcript[-1]["speaker"] == "Agent":
            text = transcript[-1]["text"].lower()
            if "thank you" in text and ("have a" in text or "good day" in text):
                return True, None
        return False, "No proper closing"
    
    def _check_unnecessary_info(self, transcript):
        """Check if agent collected unnecessary information."""
        for entry in transcript:
            if entry["speaker"] == "Agent" and "date of birth" in entry["text"].lower():
                return False, "Asked for DOB when account number would have been sufficient"
        return True, None
    
    def identify_key_complaints(self, transcript):
        """
        Identify key complaints from transcript.
        
        In a real implementation, you would:
        1. Use NLP techniques to identify complaints
        2. Categorize and prioritize complaints
        
        For this example, we'll use simple pattern matching and return mock data.
        """
        complaints = []
        
        # Look for common complaint indicators
        for entry in transcript:
            if entry["speaker"] == "Customer":
                text = entry["text"].lower()
                
                # Check for transaction issues
                if re.search(r"transaction|charge|purchase", text) and re.search(r"don't recognize|didn't make|unauthorized", text):
                    # Extract amount if present
                    amount_match = re.search(r"rs\.?\s*(\d+[,\d]*)", text, re.IGNORECASE)
                    if amount_match:
                        complaints.append(f"Unauthorized transaction of Rs. {amount_match.group(1)}")
                    else:
                        complaints.append("Unauthorized transaction")
                
                # Check for security concerns
                if re.search(r"security|worried|concerned", text):
                    complaints.append("Account security concern")
        
        # If no complaints were detected, use mock data
        if not complaints:
            complaints = [
                "Unauthorized transaction of Rs. 5,999",
                "Account security concern"
            ]
        
        return complaints