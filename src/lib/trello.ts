const TRELLO_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;

export async function createTrelloProjectCard(clientName: string, projectType: string, notes: string) {
  if (!TRELLO_KEY || !TRELLO_TOKEN) {
    console.warn('Trello credentials missing');
    return null;
  }

  try {
    // 1. Get the user's boards
    const boardsRes = await fetch(`https://api.trello.com/1/members/me/boards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`);
    if (!boardsRes.ok) throw new Error('Failed to fetch Trello boards');
    const boards = await boardsRes.json();
    
    if (boards.length === 0) {
      console.warn('No Trello boards found');
      return null;
    }

    // Use the first board (you could filter by name e.g., boards.find(b => b.name === 'Projects'))
    const boardId = boards[0].id;

    // 2. Get lists on that board
    const listsRes = await fetch(`https://api.trello.com/1/boards/${boardId}/lists?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`);
    if (!listsRes.ok) throw new Error('Failed to fetch Trello lists');
    const lists = await listsRes.json();

    if (lists.length === 0) {
      console.warn('No lists found on the Trello board');
      return null;
    }

    // Use the first list (e.g., "To Do" or "New Projects")
    const listId = lists[0].id;

    // 3. Create the Card
    const cardDesc = `**Project Type:** ${projectType || 'General'}\n\n**Notes:**\n${notes || 'No notes provided.'}\n\n_Auto-generated from Command Center_`;
    const cardRes = await fetch(`https://api.trello.com/1/cards?idList=${listId}&name=${encodeURIComponent(`Project: ${clientName}`)}&desc=${encodeURIComponent(cardDesc)}&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`, {
      method: 'POST'
    });
    
    if (!cardRes.ok) throw new Error('Failed to create Trello card');
    const card = await cardRes.json();

    // 4. Create a Checklist on the Card
    const checklistRes = await fetch(`https://api.trello.com/1/checklists?idCard=${card.id}&name=Project%20Phases&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`, {
      method: 'POST'
    });
    const checklist = await checklistRes.json();

    // Add items to checklist
    const items = ['Phase 1: Blueprint', 'Phase 2: Link', 'Phase 3: Architect', 'Phase 4: Stylize', 'Phase 5: Trigger'];
    for (const item of items) {
      await fetch(`https://api.trello.com/1/checklists/${checklist.id}/checkItems?name=${encodeURIComponent(item)}&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`, {
        method: 'POST'
      });
    }

    return card;
  } catch (error) {
    console.error('Trello API Error:', error);
    return null;
  }
}

export async function getTrelloTasks() {
  if (!TRELLO_KEY || !TRELLO_TOKEN) return [];

  try {
    const res = await fetch(`https://api.trello.com/1/members/me/cards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`);
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch tasks', error);
    return [];
  }
}
