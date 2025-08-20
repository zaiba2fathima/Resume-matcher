## 📄 Resume Match Maker with AI Tips

An AI-powered resume matcher where users can upload their Resume and Job Description. The system calculates a match score and then uses Google Gemini AI to generate real-time resume improvement tips


## 📌 Features


Upload Resume and Job Description (PDF/DOCX).

Extracts text and calculates similarity score.

Uses Gemini AI to provide practical resume tips based on the uploaded documents.

Clean frontend with result preview.

## 🛠️ Tech Stack
     

Backend: Python, Flask

Libraries: scikit-learn (TF-IDF, cosine similarity), PyPDF2 (PDF parsing)

Frontend: HTML, CSS

AI Integration: Google Gemini(google-genai SDK)


## 📂 Project Structure
```
Resume-matcher/
│── backend/
│    └── app.py
│── frontend/
│    ├── index.html
│    └── style.css
│── uploads/                
│── requirements.txt
│── README.md
│── venv/
```
---

## 🚀 How It Works


User uploads Resume and Job Description.

Backend extracts text from both files.

Texts are compared using TF-IDF + Cosine Similarity.

A match score (0–100%) is generated.

AI (Gemini) gives real-time tips to improve the resume.

Results (score + tips) are shown on the frontend.

## ⚙️ Installation & Setup
 

1.Clone the repository:
git clone https://github.com/zaiba2fathima/Resume-matcher.git
cd Resume-matcher

2.Create virtual environment:
python -m venv venv
venv\Scripts\activate      

3.Install dependencies:
pip install -r requirements.txt

4.Add Gemini API Key
GEMINI_API_KEY=your_api_key_here

5.Run the app
python backend/app.py
the app will start at 
http://127.0.0.1:5000/

## 📊 Example Output

Match Score: 72%
AI Resume Tips:
{
  "tips": [
    "Add more keywords related to project management found in the JD.",
    "Highlight measurable achievements in previous roles.",
    "Include technical skills such as Python, SQL, and cloud tools.",
    "Reorder experience section to prioritize recent relevant work."
  ]
}

## 🚀 Future Improvements
Add authentication (user accounts).

Store past resume uploads & tips history.

Support multiple job descriptions for one resume.

Deploy on Render/Heroku/Vercel.

