document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const uploadArea = document.getElementById("upload-area")
    const resumeUpload = document.getElementById("resume-upload")
    const fileInfo = document.getElementById("file-info")
    const startBtn = document.getElementById("start-btn")
    const stageUpload = document.getElementById("stage-upload")
    const stageInterview = document.getElementById("stage-interview")
    const stageAnalysis = document.getElementById("stage-analysis")
    const chatMessages = document.getElementById("chat-messages")
    const answerInput = document.getElementById("answer-input")
    const sendAnswer = document.getElementById("send-answer")
    const questionCounter = document.getElementById("question-counter")
    const timer = document.getElementById("timer")
    const restartBtn = document.getElementById("restart-btn")
    const downloadReportBtn = document.getElementById("download-report")
    const detailedFeedback = document.getElementById("detailed-feedback")
    const questionReview = document.getElementById("question-review")

    // State variables
    let resumeFile = null
    let currentQuestion = 0
    let totalQuestions = 0
    let questions = []
    let answers = []
    let interviewStartTime
    let timerInterval
    let analysisData = null

    // Mock data (replace with actual API calls to your backend)
    const mockQuestions = [
        "Tell me about your experience with JavaScript frameworks.",
        "How do you handle responsive design challenges?",
        "Describe a difficult project you worked on and how you overcame obstacles.",
        "What's your approach to debugging complex issues?",
        "How do you stay updated with the latest technologies?",
        "Explain how you would optimize a website's performance.",
        "Tell me about your experience with version control systems.",
        "How do you collaborate with team members on projects?",
        "Describe your experience with database systems.",
        "What are your career goals for the next few years?",
    ]

    const mockAnalysis = {
        overallScore: 85,
        technicalScore: 80,
        communicationScore: 90,
        problemSolvingScore: 85,
        feedback: [
            {
                title: "Strong Technical Foundation",
                content:
                    "You demonstrated good knowledge of JavaScript frameworks and responsive design principles. Your explanation of optimization techniques was particularly strong.",
            },
            {
                title: "Clear Communication",
                content:
                    "You articulated your thoughts clearly and provided concrete examples to support your points. Your responses were well-structured and easy to follow.",
            },
            {
                title: "Areas for Improvement",
                content:
                    "Consider providing more specific metrics when discussing project outcomes. Also, your answers about database experience could be more detailed with specific examples of implementations.",
            },
        ],
        questionReview: [
            {
                question: "Tell me about your experience with JavaScript frameworks.",
                userAnswer:
                    "I have worked extensively with React for the past 3 years, building several production applications. I've also used Vue.js for smaller projects and have some experience with Angular.",
                idealAnswer:
                    "A strong answer would include specific frameworks, years of experience, types of projects built, and challenges overcome. Mentioning understanding of core concepts like virtual DOM, component architecture, and state management would strengthen the response.",
                score: 90,
            },
            {
                question: "How do you handle responsive design challenges?",
                userAnswer:
                    "I typically use a mobile-first approach with CSS flexbox and grid. I test on multiple devices and use media queries for breakpoints.",
                idealAnswer:
                    "An ideal answer would discuss mobile-first methodology, CSS frameworks or custom solutions, testing strategies across devices, and specific challenges encountered and solved in past projects.",
                score: 75,
            },
        ],
    }

    // Event Listeners
    uploadArea.addEventListener("click", () => resumeUpload.click())
    uploadArea.addEventListener("dragover", handleDragOver)
    uploadArea.addEventListener("dragleave", handleDragLeave)
    uploadArea.addEventListener("drop", handleDrop)
    resumeUpload.addEventListener("change", handleFileSelect)
    startBtn.addEventListener("click", startInterview)
    sendAnswer.addEventListener("click", submitAnswer)
    answerInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            submitAnswer()
        }
    })
    restartBtn.addEventListener("click", resetInterview)
    downloadReportBtn.addEventListener("click", downloadReport)

    // Functions
    function handleDragOver(e) {
        e.preventDefault()
        uploadArea.classList.add("dragover")
    }

    function handleDragLeave(e) {
        e.preventDefault()
        uploadArea.classList.remove("dragover")
    }

    function handleDrop(e) {
        e.preventDefault()
        uploadArea.classList.remove("dragover")

        if (e.dataTransfer.files.length) {
            handleFiles(e.dataTransfer.files)
        }
    }

    function handleFileSelect(e) {
        if (e.target.files.length) {
            handleFiles(e.target.files)
        }
    }

    function handleFiles(files) {
        const file = files[0]
        const validTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ]

        if (validTypes.includes(file.type)) {
            resumeFile = file
            fileInfo.textContent = `${file.name} (${formatFileSize(file.size)})`
            startBtn.disabled = false
        } else {
            fileInfo.textContent = "Invalid file type. Please upload a PDF or Word document."
            startBtn.disabled = true
        }
    }

    function formatFileSize(bytes) {
        if (bytes < 1024) return bytes + " bytes"
        else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
        else return (bytes / 1048576).toFixed(1) + " MB"
    }

    function startInterview() {
        // In a real application, you would send the resume to your backend here
        // and get personalized questions based on the resume content

        // For demo purposes, we'll use mock questions
        questions = [...mockQuestions]
        totalQuestions = questions.length
        currentQuestion = 0
        answers = []

        // Switch to interview stage
        stageUpload.classList.remove("active")
        stageInterview.classList.add("active")

        // Start timer
        interviewStartTime = new Date()
        startTimer()

        // Display first question
        displayNextQuestion()
    }

    function startTimer() {
        clearInterval(timerInterval)
        timerInterval = setInterval(updateTimer, 1000)
    }

    function updateTimer() {
        const now = new Date()
        const diff = now - interviewStartTime
        const minutes = Math.floor(diff / 60000)
        const seconds = Math.floor((diff % 60000) / 1000)
        timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }

    function displayNextQuestion() {
        if (currentQuestion < totalQuestions) {
            const question = questions[currentQuestion]
            questionCounter.textContent = `Question ${currentQuestion + 1}/${totalQuestions}`

            // Add bot message with question
            addMessage("bot", question)

            // Scroll to bottom of chat
            scrollChatToBottom()
        } else {
            // End of interview
            finishInterview()
        }
    }

    function addMessage(sender, content) {
        const messageDiv = document.createElement("div")
        messageDiv.className = `message ${sender}`

        const messageContent = document.createElement("div")
        messageContent.className = "message-content"
        messageContent.textContent = content

        messageDiv.appendChild(messageContent)
        chatMessages.appendChild(messageDiv)
    }

    function scrollChatToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight
    }

    function submitAnswer() {
        const answer = answerInput.value.trim()

        if (answer) {
            // Add user message
            addMessage("user", answer)

            // Store answer
            answers.push({
                question: questions[currentQuestion],
                answer: answer,
            })

            // Clear input
            answerInput.value = ""

            // Move to next question
            currentQuestion++

            // Add a small delay before showing next question
            setTimeout(() => {
                displayNextQuestion()
            }, 1000)
        }
    }

    function finishInterview() {
        clearInterval(timerInterval)

        // In a real application, you would send the answers to your backend
        // for analysis and get personalized feedback

        // For demo purposes, we'll use mock analysis data
        analysisData = mockAnalysis

        // Update analysis UI
        updateAnalysisUI()

        // Switch to analysis stage
        stageInterview.classList.remove("active")
        stageAnalysis.classList.add("active")
    }

    function updateAnalysisUI() {
        // Update scores
        document.getElementById("overall-score").textContent = `${analysisData.overallScore}%`
        document.getElementById("overall-score").style.background =
            `conic-gradient(var(--primary-color) 0% ${analysisData.overallScore}%, #e5e7eb ${analysisData.overallScore}% 100%)`

        document.getElementById("technical-score").style.width = `${analysisData.technicalScore}%`
        document.getElementById("technical-score").parentElement.nextElementSibling.textContent =
            `${analysisData.technicalScore}%`

        document.getElementById("communication-score").style.width = `${analysisData.communicationScore}%`
        document.getElementById("communication-score").parentElement.nextElementSibling.textContent =
            `${analysisData.communicationScore}%`

        document.getElementById("problem-solving-score").style.width = `${analysisData.problemSolvingScore}%`
        document.getElementById("problem-solving-score").parentElement.nextElementSibling.textContent =
            `${analysisData.problemSolvingScore}%`

        // Update detailed feedback
        detailedFeedback.innerHTML = "<h3>Detailed Feedback</h3>"
        analysisData.feedback.forEach((item) => {
            const feedbackItem = document.createElement("div")
            feedbackItem.className = "feedback-item"

            const title = document.createElement("h4")
            title.textContent = item.title

            const content = document.createElement("p")
            content.textContent = item.content

            feedbackItem.appendChild(title)
            feedbackItem.appendChild(content)
            detailedFeedback.appendChild(feedbackItem)
        })

        // Update question review
        questionReview.innerHTML = "<h3>Question Review</h3>"
        analysisData.questionReview.forEach((item) => {
            const questionItem = document.createElement("div")
            questionItem.className = "question-item"

            const question = document.createElement("h4")
            question.textContent = item.question

            const score = document.createElement("div")
            score.className = "question-score"
            score.textContent = `Score: ${item.score}%`

            const userAnswerLabel = document.createElement("p")
            userAnswerLabel.textContent = "Your Answer:"

            const userAnswer = document.createElement("div")
            userAnswer.className = "user-answer"
            userAnswer.textContent = item.userAnswer

            const idealAnswerLabel = document.createElement("p")
            idealAnswerLabel.textContent = "Ideal Answer:"

            const idealAnswer = document.createElement("div")
            idealAnswer.className = "ideal-answer"
            idealAnswer.textContent = item.idealAnswer

            questionItem.appendChild(question)
            questionItem.appendChild(score)
            questionItem.appendChild(userAnswerLabel)
            questionItem.appendChild(userAnswer)
            questionItem.appendChild(idealAnswerLabel)
            questionItem.appendChild(idealAnswer)

            questionReview.appendChild(questionItem)
        })
    }

    function resetInterview() {
        // Reset state
        resumeFile = null
        currentQuestion = 0
        totalQuestions = 0
        questions = []
        answers = []
        clearInterval(timerInterval)

        // Clear UI
        fileInfo.textContent = ""
        startBtn.disabled = true
        chatMessages.innerHTML = ""
        answerInput.value = ""

        // Switch to upload stage
        stageAnalysis.classList.remove("active")
        stageUpload.classList.add("active")
    }

    function downloadReport() {
        // In a real application, you would generate a PDF report
        // For demo purposes, we'll just alert
        alert(
            "Report download functionality would be implemented here. This would typically generate a PDF with the interview analysis.",
        )
    }

    // Function to simulate API calls to your backend
    async function callBackendAPI(endpoint, data) {
        // In a real application, this would be an actual API call
        // For demo purposes, we'll simulate responses

        return new Promise((resolve) => {
            setTimeout(() => {
                switch (endpoint) {
                    case "analyze-resume":
                        resolve({ questions: mockQuestions })
                        break
                    case "analyze-answers":
                        resolve(mockAnalysis)
                        break
                    default:
                        resolve({ error: "Unknown endpoint" })
                }
            }, 1000) // Simulate network delay
        })
    }
})

