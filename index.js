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

app.listen(5000, () => {
  console.log("🚀 Shipping on port 5000")
})