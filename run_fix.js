const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
  connectionString: 'postgresql://postgres.hqrbbeisvyauzeuqcpgo:hHE1KOlfaxXxZMVH@aws-0-eu-west-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to Supabase...");
    
    const sql = fs.readFileSync('fix_phone.sql', 'utf8');
    console.log("Executing SQL...");
    
    await client.query(sql);
    console.log("SUCCESS: All tables and RLS policies created.");
    
  } catch (error) {
    console.error("ERROR:", error);
  } finally {
    await client.end();
  }
}

run();
