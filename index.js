const { exec } = require('child_process');
const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, "public/")))
app.use(express.static(path.join(__dirname, "pages/")))
app.use(express.static(path.join(__dirname, "attached_assets/")))

app.get("/", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build error:', err);
    return;
  }
});
  res.sendFile(path.join(__dirname, "pages/index.html"))
})

app.get("/masterclass", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build error:', err);
    return;
  }
});
  res.sendFile(path.join(__dirname, "pages/masterclass.html"))
})

app.use(express.json())

app.post('/api/leads', (req, res) => {
  const { email, nome } = req.body;
  
  if (!email || !nome) {
    return res.status(400).json({ error: 'Email e nome são obrigatórios' });
  }
  
  console.log('Nova inscrição:', { nome, email, timestamp: new Date() });
  
  res.json({ success: true, message: 'Inscrição realizada com sucesso!' });
});

app.listen(5000, '0.0.0.0', () => {
  console.log("🚀 Shipping on port 5000")
})