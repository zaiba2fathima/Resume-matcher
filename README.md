## 📄 Resume Matcher


An AI-powered tool that helps job seekers match their resumes with job descriptions by calculating a match score and suggesting missing keywords/skills.


## 📌 Features


✅ Upload resume (PDF) and job description (text)

✅ Uses TF-IDF + Cosine Similarity to calculate similarity

✅ Highlights missing keywords from job description

✅ Provides a match percentage

✅ Simple web interface with Flask backend + HTML/CSS frontend

## 🛠️ Tech Stack
     

Backend: Python, Flask

Libraries: scikit-learn (TF-IDF, cosine similarity), PyPDF2 (PDF parsing)

Frontend: HTML, CSS

Other: Virtual Environment (venv)


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


User uploads resume and job description

Backend processes text → applies TF-IDF + Cosine Similarity

Generates:

✅ Match Percentage

✅ List of Missing Keywords

Displays results on web page

## ⚙️ Installation & Setup
 

1.Clone the repository:
git clone https://github.com/zaiba2fathima/Resume-matcher.git
cd Resume-matcher

2.Create virtual environment:
python -m venv venv
venv\Scripts\activate      

3.Install dependencies:
pip install -r requirements.txt

4.Run the app
python backend/app.py

5.Open in browser:
http://127.0.0.1:5000/

## 🚀 Future Improvements

Integrate GPT-based keyword suggestions

Improve UI/UX with React

Add support for multiple file formats (DOCX, TXT)

Deploy on Render/Heroku

