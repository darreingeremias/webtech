const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What health-related question do you have?",
    "symptoms": "Please describe your symptoms, and I'll try to help.",
    "appointment": "You can book an appointment using our telemedicine feature.",
    "fever": "A mild fever can be managed with rest and hydration. If it exceeds 102°F (39°C), see a doctor.",
    "cough": "Try warm fluids and rest. If it persists for more than a week, consult a doctor.",
    "headache": "A mild headache can be relieved with hydration and rest. If severe, seek medical advice.",
    "stomach pain": "It could be due to gas, indigestion, or infection. If severe, consult a doctor.",
    "default": "I'm not sure about that. Try asking about symptoms, appointments, or general health tips."
};

function getResponse() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    let userMessage = `<p class="chat-message user-message"><strong>You:</strong> ${userInput}</p>`;
    let botResponse = `<p class="chat-message bot-message"><strong>Bot:</strong> ${responses[userInput] || responses["default"]}</p>`;

    chatBox.innerHTML += userMessage + botResponse;
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
    document.getElementById("user-input").value = ""; // Clear input field
}