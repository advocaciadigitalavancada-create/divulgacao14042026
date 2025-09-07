const { exec } = require('child_process');
const path = require("path")
const express = require("express")
const app = express()

// Import database functions
const { insertLead } = require('./server/storage')

app.use(express.static(path.join(__dirname, "public/")))
app.use(express.static(path.join(__dirname, "attached_assets/")))

app.get("/", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build error:', err);
    return;
  }
});
  
  // Adicionar cabeçalhos para evitar cache
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  
  res.sendFile(path.join(__dirname, "pages/index.html"))
})

app.get("/masterclass", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build error:', err);
    return;
  }
});
  
  // Adicionar cabeçalhos para evitar cache
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  
  res.sendFile(path.join(__dirname, "pages/masterclass.html"))
})

app.use(express.json())

app.post('/api/leads', async (req, res) => {
  const { email, nome } = req.body;
  
  if (!email || !nome) {
    return res.status(400).json({ error: 'Email e nome são obrigatórios' });
  }
  
  try {
    const newLead = await insertLead({ nome, email });
    console.log('Nova inscrição salva no banco:', newLead);
    
    res.json({ success: true, message: 'Inscrição realizada com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Shipping on port ${PORT}`)
})