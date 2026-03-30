const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const { pgTable, serial, varchar, timestamp } = require('drizzle-orm/pg-core');
const { desc } = require('drizzle-orm');

// Define schema directly in JS
const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  nome: varchar('nome', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  telefone: varchar('telefone', { length: 50 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString, {
  ssl: connectionString && !connectionString.includes('localhost') ? 'require' : false
});
const db = drizzle(client);

// Função para garantir que a tabela existe (Auto-migração simples)
async function ensureTablesExist() {
  try {
    console.log('Verificando/Criando tabelas no banco de dados...');
    // Comando SQL direto para criar a tabela se não existir
    await client`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telefone VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;
    console.log('Estrutura de banco de dados verificada com sucesso!');
  } catch (error) {
    console.error('Erro ao verificar/criar tabelas:', error);
  }
}

async function insertLead(lead) {
  const result = await db.insert(leads).values(lead).returning();
  return result[0];
}

async function getAllLeads() {
  return await db.select().from(leads).orderBy(desc(leads.created_at));
}

module.exports = {
  insertLead,
  getAllLeads,
  ensureTablesExist,
  db
};
