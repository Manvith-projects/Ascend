async function uploadResume(file) {
    const formData = new FormData();
    formData.append("file", file);
    console.log("Uploading file:", file.name); // Debugging

    try {
        const response = await fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            body: formData,
        });

        console.log("Response status:", response.status);

        const data = await response.json();
        console.log("Server response:", data);

        if (data.resume_text) {
            resumeText = data.resume_text;
            startInterview();
        } else {
            document.getElementById("file-info").textContent = "Error processing resume.";
        }
    } catch (error) {
        console.error("Error uploading file:", error);
    }
}


async function fetchQuestion() {
    try {
        const response = await fetch("http://127.0.0.1:5000/ask-question", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ resume_text: resumeText }),
        });

        const data = await response.json();
        if (data.question) {
            currentQuestion = data.question;
            chatMessages.innerHTML += `<p><strong>Interviewer:</strong> ${currentQuestion}</p>`;
        }
    } catch (error) {
        console.error("Error fetching question:", error);
    }
}

async function submitAnswer() {
    const userAnswer = answerInput.value.trim();
    if (!userAnswer) return;

    chatMessages.innerHTML += `<p><strong>You:</strong> ${userAnswer}</p>`;

    try {
        const response = await fetch("http://127.0.0.1:5000/evaluate-answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                resume_text: resumeText,
                question: currentQuestion,
                answer: userAnswer,
            }),
        });

        const data = await response.json();
        if (data.evaluation) {
            chatMessages.innerHTML += `<p><strong>Interviewer:</strong> ${data.evaluation}</p>`;
        }

        answerInput.value = "";
        fetchQuestion(); // Fetch next question
    } catch (error) {
        console.error("Error submitting answer:", error);
    }
}
