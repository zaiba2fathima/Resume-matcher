from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# -------- Function to Extract Text ----------
def extract_text(file_path):
    text = ""
    if file_path.endswith(".pdf"):
        import pdfplumber
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                if page.extract_text():
                    text += page.extract_text() + " "
    elif file_path.endswith(".docx"):
        import docx
        doc = docx.Document(file_path)
        text = " ".join([para.text for para in doc.paragraphs])
    elif file_path.endswith(".txt"):
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    else:
        text = "Unsupported file format"
    return text


# -------- Function to Calculate Similarity ----------
def calculate_similarity(resume_text, jd_text):
    vectorizer = TfidfVectorizer(stop_words="english")
    tfidf_matrix = vectorizer.fit_transform([resume_text, jd_text])
    score = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
    return round(score * 100, 2)  # percentage


# -------- Upload Route ----------
@app.route("/upload", methods=["POST"])
def upload_file():
    if "resume" not in request.files or "job_description" not in request.files:
        return jsonify({"error": "Please upload both resume and job description"}), 400

    resume = request.files["resume"]
    jd = request.files["job_description"]

    resume_path = os.path.join(UPLOAD_FOLDER, resume.filename)
    jd_path = os.path.join(UPLOAD_FOLDER, jd.filename)

    resume.save(resume_path)
    jd.save(jd_path)

    # Extract text
    resume_text = extract_text(resume_path)
    jd_text = extract_text(jd_path)

    # Similarity score
    score = calculate_similarity(resume_text, jd_text)

    return jsonify({
        "message": "Files uploaded and analyzed successfully!",
        "resume_file": resume.filename,
        "job_description_file": jd.filename,
        "resume_text": resume_text[:300],   # preview
        "job_description_text": jd_text[:300],
        "match_score": f"{score}%"
    })


if __name__ == "__main__":
    app.run(port=5000, debug=True)