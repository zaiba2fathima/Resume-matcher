## 📄 Resume Matcher


A simple web-based Resume Matcher App that allows users to:

Upload their resume and a job description.

Get a similarity score to see how well their resume matches the job role.

Receive feedback on missing keywords or improvements.


## 📌 Features


Resume Upload – Upload resumes in text/PDF format.

Job Description Input – Paste or upload job description.

Match Score – Calculates similarity score between resume and JD.

Keyword Suggestions – Shows missing or weak keywords.

Frontend + Backend – HTML/CSS/JS for UI, Flask (Python) for backend.

## 🛠️ Tech Stack
     

# Frontend:

HTML

CSS

# Backend:

Python

Flask

# Libraries:

scikit-learn (TF-IDF, cosine similarity)

PyPDF2 (for PDF parsing)

## 📂 Project Structure

Resume-matcher/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ ├── uploads/
│ └── venv/
│
├── frontend/
│ ├── index.html
│ └── style.css
│
└── README.md
'''
---

## 🚀 How It Works


1.User uploads resume and job description.

2.Backend processes text → applies TF-IDF + cosine similarity.

3.Generates a match percentage and highlights missing keywords.

4.Results displayed in frontend.

## ⚙️ Installation & Setup
 

1.Clone the repository
git clone https://github.com/zaiba2fathima/Resume-matcher.git
cd Resume-matcher

2.Backend Setup
cd backend
pip install -r requirements.txt

3.Run Flask Server
python app.py
Backend will run on http://127.0.0.1:5000/

4.Frontend
Open frontend/index.html in your browser.

