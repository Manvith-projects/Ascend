import google.generativeai as genai
from PyPDF2 import PdfReader
import pandas as pd

def read_file(file_path):
    """
    Reads the content of a Word, PDF, Excel, or CSV file.

    Args:
        file_path (str): The path to the file.

    Returns:
        str: The extracted text content of the file.

    Raises:
        ValueError: If the file format is not supported.
    """
    if file_path.endswith(".pdf"):
        reader = PdfReader(file_path)
        return "\n".join([page.extract_text() for page in reader.pages])
    elif file_path.endswith(".xlsx") or file_path.endswith(".xls"):
        try:
            df = pd.read_excel(file_path)
            return df.to_markdown(index=False)  # Convert DataFrame to Markdown
        except Exception as e:
            raise ValueError(f"Error reading Excel file: {e}")
    elif file_path.endswith(".csv"):
        try:
            df = pd.read_csv(file_path)
            return df.to_markdown(index=False)  # Convert DataFrame to Markdown
        except Exception as e:
            raise ValueError(f"Error reading CSV file: {e}")
    else:
        raise ValueError(f"Unsupported file format: {file_path}")

# Greeting keywords
greeting_keywords = ["hi", "hello", "hey", "greetings", "hii"]

def is_greeting(message):
    """
    Checks if the user input is a greeting.

    Args:
        message (str): The user input.

    Returns:
        bool: True if the input is a greeting, False otherwise.
    """
    return any(word in message.lower() for word in greeting_keywords)

# Load the project document from the specified file
file_path = r"E:\\About_Carer_Horizon.pdf"  # Replace with the actual file path
project_document = read_file(file_path)

# Configure Gemini API with your API key
genai.configure(api_key="AIzaSyAWwbp45qtLqELSaAg1yB3uiTaQITVF-aE")

# Select the Gemini model
model = genai.GenerativeModel("gemini-1.5-flash")

while True:
    # Get user input for the task
    user_input = input("Please enter your question (or type 'quit' to exit): ").strip()

    # Check for termination condition
    if user_input.lower() == "quit":
        print("Exiting chatbot.")
        break

    # Handle greetings
    if is_greeting(user_input):
        print("Hi there! How can I assist you today?")
        continue

    # Construct the prompt for Gemini
    prompt = f"""
    **Project Document:**
    {project_document}

    **Task:**
    {user_input}

    **Instructions:**
    - Only respond to the specific question asked.
    - Do not provide additional or unrelated information.
    - If the information is not directly available in the document, respond with: "The information is not available in the document."
    - Be concise and accurate.
    """

    try:
        # Generate response using Gemini API
        response = model.generate_content(prompt)
        print(response.text.strip())

    except Exception as e:
        print(f"An error occurred: {e}")

print("Have a great day!")
