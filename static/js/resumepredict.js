document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.querySelector(".upload-box");
    const fileInput = document.getElementById("fileInput");
    const progressBarInner = document.querySelector(".progress-bar-inner");
    const uploadedImagesContainer = document.getElementById("uploaded-images");
    const analyzeButton = document.getElementById("analyze-button");
    const loading = document.getElementById("loading");
    const jobResults = document.getElementById("job-results");

    // Prevent default drag behaviors
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when item is dragged over it
    ["dragenter", "dragover"].forEach((eventName) => {
        dropArea.addEventListener(
            eventName,
            () => dropArea.classList.add("dragover"),
            false
        );
    });

    ["dragleave", "drop"].forEach((eventName) => {
        dropArea.addEventListener(
            eventName,
            () => dropArea.classList.remove("dragover"),
            false
        );
    });

    dropArea.addEventListener("drop", handleDrop, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        [...files].forEach((file) => {
            console.log("File:", file);
            console.log("File type:", file.type);
            if (validateFile(file)) {
                uploadFile(file);
            } else {
                alert("Only Word and PDF files are allowed.");
            }
        });
    }

    function validateFile(file) {
        const validTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        const isValid = validTypes.includes(file.type);
        console.log("Is valid file type:", isValid);
        return isValid;
    }

    function uploadFile(file) {
        const url = "/upload"; // Backend endpoint for file upload
        const formData = new FormData();
        formData.append("file", file);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.upload.addEventListener("progress", (e) => {
            const percent = (e.loaded / e.total) * 100;
            progressBarInner.style.width = `${percent}%`;
        });

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log("File uploaded successfully");
                try {
                    const response = JSON.parse(xhr.responseText);
                    const filePath = response.filePath; // Backend should return filePath
                    addUploadedFile(filePath);
                } catch (error) {
                    console.error("Invalid JSON response from server:", xhr.responseText);
                }
            } else {
                console.error("File upload failed:", xhr.statusText);
                alert("File upload failed. Please try again.");
            }
        };

        xhr.onerror = function () {
            console.error("Upload error occurred");
            alert("An error occurred during upload. Please check your network.");
        };

        xhr.send(formData);
    }

    function addUploadedFile(filePath) {
        const uploadedFile = document.createElement("div");
        uploadedFile.classList.add("uploaded-file");
        uploadedFile.dataset.path = filePath;
        uploadedFile.innerHTML = `<p>Uploaded: ${filePath}</p>`;
        uploadedImagesContainer.appendChild(uploadedFile);
    }

    function handleBackendProcessing(filePath) {
        loading.style.display = "flex";

        fetch("/process-file", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ filePath }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Backend processing result:", data);
                jobResults.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch((error) => {
                console.error("Error processing file:", error);
                jobResults.innerHTML =
                    '<p style="color: red;">Error processing file. Please try again.</p>';
            })
            .finally(() => {
                loading.style.display = "none";
            });
    }

    document.querySelector(".upload-button").addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => handleFiles(fileInput.files));

    analyzeButton.addEventListener("click", () => {
        const uploadedFile = document.querySelector(".uploaded-file");
        if (uploadedFile) {
            const filePath = uploadedFile.dataset.path;
            handleBackendProcessing(filePath);
        } else {
            alert("Please upload a file first.");
        }
    });
});
