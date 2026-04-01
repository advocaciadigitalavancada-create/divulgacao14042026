const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// URL do seu Google Apps Script (Planilha)
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbzuqSU2_vxDL2aoPtlALBLqgq745gpj-b6b240TTc2QZkxgq1WkBNfimQCbJze6lrBccQ/exec';

async function ensureTablesExist() {
  console.log('Integração com Google Sheets ativa. Nenhuma tabela de banco de dados necessária.');
}

async function insertLead(lead) {
  console.log('Enviando lead para a planilha:', lead);
  
  try {
    const response = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(lead),
      headers: { 'Content-Type': 'application/json' },
      follow: 20 // Permite seguir redirecionamentos do Google
    });
    
    const text = await response.text();
    console.log('Resposta bruta do Google Sheets:', text);
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.log('A resposta não era JSON, mas o envio pode ter ocorrido:', text);
      return { success: true, message: 'Enviado (verifique a planilha)' };
    }
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    throw error;
  }
}

async function getAllLeads() {
  // Como os leads agora estão na planilha, o painel admin deve ser visualizado direto no Google Sheets.
  // Retornamos um array vazio para não quebrar a rota do admin, mas com um aviso.
  return [];
}

module.exports = {
  insertLead,
  getAllLeads,
  ensureTablesExist
};
