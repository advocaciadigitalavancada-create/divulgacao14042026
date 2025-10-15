const { exec } = require('child_process');
const path = require("path")
const express = require("express")
const app = express()

const { insertLead, getAllLeads } = require('./server/storage')

app.use(express.static(path.join(__dirname, "public/")))
app.use(express.static(path.join(__dirname, "attached_assets/")))

app.get("/", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build error:', err);
    return;
  }
});
  
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
  
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  
  res.sendFile(path.join(__dirname, "pages/masterclass.html"))
})

app.get("/admin", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build error:', err);
    return;
  }
});
  
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  
  res.sendFile(path.join(__dirname, "pages/admin.html"))
})

app.use(express.json())

app.get('/api/leads', async (req, res) => {
  try {
    const leads = await getAllLeads();
    res.json({ success: true, leads });
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.post('/api/leads', async (req, res) => {
  const { email, nome, telefone } = req.body;
  
  if (!email || !nome) {
    return res.status(400).json({ error: 'Email e nome são obrigatórios' });
  }
  
  try {
    const leadData = { nome, email };
    if (telefone) {
      leadData.telefone = telefone;
    }
    
    const newLead = await insertLead(leadData);
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
