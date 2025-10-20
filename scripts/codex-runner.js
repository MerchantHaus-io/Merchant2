// scripts/codex-runner.js

import fetch from "node-fetch";

async function runCodex() {
  console.log("🚀 Running Codex automation...");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.CODEX_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-5", // or whichever model you're using
      messages: [
        { role: "system", content: "Run post-processing for MerchantHaus.io build." },
        { role: "user", content: "Optimize and verify deployment assets." }
      ],
    }),
  });

  const result = await response.json();
  console.log("✅ Codex Response:", result.choices?.[0]?.message?.content || result);
}

runCodex().catch(err => {
  console.error("❌ Codex automation failed:", err);
  process.exit(1);
});
