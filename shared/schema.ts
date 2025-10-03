import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  nome: varchar('nome', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  telefone: varchar('telefone', { length: 50 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;