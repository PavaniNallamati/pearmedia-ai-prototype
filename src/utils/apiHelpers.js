export const getEnhancedPrompt = async (input) => {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Enhance this prompt creatively" },
          { role: "user", content: input },
        ],
      }),
    });

    const data = await res.json();
    return data.choices[0].message.content;
  } catch {
    return input;
  }
};

export const generateImage = async (prompt) => {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    }),
  });

  const data = await res.json();
  return data.data[0].url;
};

export const analyzeImage = async (base64) => {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: "Describe objects, colors, and style" },
              {
                inline_data: {
                  mime_type: "image/png",
                  data: base64,
                },
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
  });
