# Usar uma imagem leve do Node.js
FROM node:18-slim

# Criar diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências (apenas produção)
RUN npm install --omit=dev

# Copiar o restante dos arquivos do projeto
COPY . .

# O Render/GCP define a porta via variável de ambiente PORT
ENV PORT=8080
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
