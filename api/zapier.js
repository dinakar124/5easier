export default async function handler(req, res) {
    const zapierURL = "https://hooks.zapier.com/hooks/catch/23773657/u235gbl/";
  
    try {
      const zapierRes = await fetch(zapierURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      const result = await zapierRes.text();
      res.status(200).send(result);
    } catch (err) {
      console.error("Zapier proxy error:", err);
      res.status(500).send("Zapier proxy failed.");
    }
  }
  