const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const { pgTable, serial, varchar, timestamp } = require('drizzle-orm/pg-core');

// Define schema directly in JS
const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  nome: varchar('nome', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  telefone: varchar('telefone', { length: 50 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString);
const db = drizzle(client);

async function insertLead(lead) {
  const result = await db.insert(leads).values(lead).returning();
  return result[0];
}

async function getAllLeads() {
  return await db.select().from(leads);
}

module.exports = {
  insertLead,
  getAllLeads,
  db
};