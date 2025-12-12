document.getElementById("generate").addEventListener("click", async () => {
  const topic = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.innerHTML = "Sedang membuat artikel...";

  const apiKey = "ISI_API_KEY_KAMU_DI_SINI";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Kamu pembuat artikel profesional." },
        { role: "user", content: `Buat artikel tentang: ${topic}` }
      ]
    })
  });

  const data = await response.json();

  output.innerHTML = data.choices[0].message.content;
});
