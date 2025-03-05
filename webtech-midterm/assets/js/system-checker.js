function checkSymptoms() {
    let symptom = document.getElementById("symptom-select").value;
    let resultText = "";

    if (symptom === "") {
        resultText = "Please select a symptom.";
    } else {
        const advice = {
            "fever": "A mild fever can be managed with rest and hydration. If it exceeds 102°F (39°C), see a doctor.",
            "cough": "Try warm fluids and rest. If it persists for more than a week, consult a doctor.",
            "fatigue": "Fatigue can be caused by stress or illness. Ensure proper rest and nutrition.",
            "headache": "A mild headache can be relieved with hydration and rest. If severe, seek medical advice.",
            "stomach pain": "It could be due to indigestion or infection. Try eating light meals and staying hydrated."
        };

        resultText = advice[symptom] || "If symptoms persist, consult a healthcare professional.";
    }

    document.getElementById("result").innerHTML = `<p><strong>Result:</strong> ${resultText}</p>`;
}