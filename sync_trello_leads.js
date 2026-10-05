const TRELLO_API_KEY = 'c053ff231020c12a6fece5724b32aa60';
const TRELLO_TOKEN = 'dbf3692545f59afd4fd3171faaea4b11e9dcb4afbd849bb7a68e67dda371283e';
const BOARD_ID = '9jXSNE8k';
const SUPABASE_URL = 'https://hqrbbeisvyauzeuqcpgo.supabase.co/rest/v1/leads';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxcmJiZWlzdnlhdXpldXFjcGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNTUyNzMsImV4cCI6MjEwNDYzMTI3M30.2jSekV25fYdBzO1r8_9QQawf1LgP93CSRA_0tpwFGFE';

async function run() {
  try {
    // 1. Fetch Trello Cards from the board
    console.log('Fetching cards from Trello...');
    const trelloRes = await fetch(`https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`);
    if (!trelloRes.ok) throw new Error('Failed to fetch Trello cards: ' + await trelloRes.text());
    const cards = await trelloRes.json();
    
    console.log(`Found ${cards.length} cards in Trello.`);
    if (cards.length === 0) return;

    // 2. Format as leads
    const leads = cards.map(card => {
      return {
        business_name: card.name,
        contact_email: 'trello@example.com',
        website_url: card.url,
        notes: card.desc || 'Imported from Trello',
        status: 'New',
        niche: 'Unknown'
      };
    });

    // 3. Insert into Supabase
    console.log('Inserting leads into Supabase...');
    const supabaseRes = await fetch(SUPABASE_URL, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(leads)
    });

    if (!supabaseRes.ok) {
      console.error('Failed to insert into Supabase:', await supabaseRes.text());
    } else {
      console.log('Successfully inserted Trello cards as leads into Supabase. HTTP Status:', supabaseRes.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

run();
