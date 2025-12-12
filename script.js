const generateBtn = document.getElementById('generateBtn');
const topicInput = document.getElementById('topic');
const outputDiv = document.getElementById('output');

generateBtn.addEventListener('click', async () => {
  const topic = topicInput.value.trim();
  if (!topic) {
    alert('Masukkan topik artikel dulu!');
    return;
  }

  outputDiv.textContent = "Sedang menghasilkan artikel... ⏳";

  try {
    // Ganti URL ini dengan endpoint serverless yang memanggil OpenAI API
    const response = await fetch('https://your-backend-api.example.com/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: topic })
    });

    const data = await response.json();
    outputDiv.textContent = data.text || "Tidak ada hasil dari AI.";
  } catch (error) {
    console.error(error);
    outputDiv.textContent = "Terjadi kesalahan. Cek console.";
  }
});
