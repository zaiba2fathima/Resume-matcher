// File upload handling
function handleFileSelect(input, infoElement) {
  const file = input.files[0];
  if (file) {
    infoElement.innerHTML = `
      <div class="file-selected">
        <i class="fas fa-check-circle"></i>
        <span>${file.name}</span>
        <small>${(file.size / 1024).toFixed(1)} KB</small>
      </div>
    `;
  } else {
    infoElement.innerHTML = 'No file chosen';
  }
}

// Initialize file input handlers
document.getElementById('resume').addEventListener('change', (e) => {
  handleFileSelect(e.target, document.getElementById('resumeInfo'));
});

document.getElementById('jd').addEventListener('change', (e) => {
  handleFileSelect(e.target, document.getElementById('jdInfo'));
});

// Close modal
function closeModal() {
  document.getElementById("resultModal").style.display = "none";
}

// Form submission
document.getElementById("uploadForm").onsubmit = async (e) => {
  e.preventDefault();

  const loadingOverlay = document.getElementById('loadingOverlay');
  const matchScoreElem = document.getElementById('matchScore');
  const scoreLabelElem = document.getElementById('scoreLabel');
  const scoreDescElem = document.querySelector(".score-label p");
  const resumePreviewElem = document.getElementById('resumePreview');
  const jdPreviewElem = document.getElementById('jdPreview');
  const aiTipsSection = document.getElementById("aiTipsSection");
  const tipsGridElem = document.getElementById("tipsGrid");

  // Show loading
  loadingOverlay.style.display = 'flex';

  const formData = new FormData(e.target);

  try {
    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Server error occurred.');
    }

    const result = await response.json();

    // 1. Match Score
    const score = parseFloat(result.match_score);
    matchScoreElem.textContent = score.toFixed(2);

    // 2. Score Label
    let label = "Needs Improvement";
    let description = "Your resume needs significant improvements for this position.";
    if (score >= 80) {
      label = "Excellent Match";
      description = "Your resume aligns perfectly with this position!";
    } else if (score >= 60) {
      label = "Good Match";
      description = "Your resume has good alignment with this position.";
    } else if (score >= 40) {
      label = "Fair Match";
      description = "Your resume has some alignment but could be improved.";
    }
    scoreLabelElem.textContent = label;
    scoreDescElem.textContent = description;

    // 3. Previews
    resumePreviewElem.textContent = result.resume_text || "No preview available.";
    jdPreviewElem.textContent = result.job_description_text || "No preview available.";

    // 4. AI Tips
    tipsGridElem.innerHTML = "";
    if (result.ai_tips && Array.isArray(result.ai_tips) && result.ai_tips.length > 0) {
      result.ai_tips.forEach((tip, index) => {
        const tipCard = document.createElement("div");
        tipCard.className = "tip-card";
        tipCard.innerHTML = `
          <div class="tip-number">${index + 1}</div>
          <div class="tip-content">
            <p>${tip}</p>
          </div>
        `;
        tipsGridElem.appendChild(tipCard);
      });
      aiTipsSection.style.display = "block";
    } else {
      tipsGridElem.innerHTML = `
        <div class="tip-card no-tips">
          <div class="tip-number"><i class="fas fa-info-circle"></i></div>
          <div class="tip-content"><p>AI tips are currently unavailable.</p></div>
        </div>
      `;
      aiTipsSection.style.display = "block";
    }

    
    const modal = document.getElementById("resultModal");
    modal.style.display = "flex";

  } catch (error) {
    alert("An error occurred: " + error.message);
    console.error("Fetch error:", error);
  } finally {
    loadingOverlay.style.display = 'none';
  }
};
