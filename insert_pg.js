const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres.hqrbbeisvyauzeuqcpgo:hHE1KOlfaxXxZMVH@aws-0-eu-west-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

const leads = [
  {
    business_name: 'مكتبة أبي عثمان الجزائري',
    contact_email: 'unknown@example.com',
    website_url: 'https://www.tiktok.com/@abouothmandz',
    notes: 'Bio: 📚 مكتبة أبي عثمان الجزائري🇩🇿 📖 كتب العلم الشرعي لكل من أراد تعلم دينه 🛒 الكتب المتوفرة👇 واتساب/تيليجرام 0550314451\nPhone: 0550314451',
    status: 'New',
    niche: 'Bookstore'
  },
  {
    business_name: 'مكتبة غيث السلف',
    contact_email: 'unknown@example.com',
    website_url: 'https://www.tiktok.com/@maktabat.ghaith.asalaf',
    notes: 'Bio: مكتبة جزائرية 🇩🇿( توصيل في الجزائر فقط)\nنعمل على توفير كتب دينية لطلاب العلم \nالحساب الاول تحذف (16k)\nواتساب:0555786250\nPhone: 0555786250',
    status: 'New',
    niche: 'Bookstore'
  },
  {
    business_name: 'مكتبة الهِدايَة',
    contact_email: 'unknown@example.com',
    website_url: 'https://t.me/kotob_abo_anes',
    notes: 'Bio: متجر إلكتروني و التوصيل متوفر 🇩🇿📚\nالبيع بالجملة و التجزئة 📦\n📞0672157962📞\nPhone: 0672157962\nTikTok: https://www.tiktok.com/@zakisdh',
    status: 'New',
    niche: 'Bookstore'
  },
  {
    business_name: 'dar_elfallah',
    contact_email: 'unknown@example.com',
    website_url: 'https://wa.me/qr/XXUQWA47AQTUF1',
    notes: 'Bio: متجركم الإلكتروني لبيع الكتب الدينية[أهل السنة و الجماعة] \n📍الجزائر🇩🇿\n+213771328793 WhatsApp 📞\nPhone: +213771328793\nTikTok: https://www.tiktok.com/@dar_elfallah',
    status: 'New',
    niche: 'Bookstore'
  },
  {
    business_name: 'مَـكـتَـبَـةُ دُرر المَـعَارِف',
    contact_email: 'unknown@example.com',
    website_url: 'https://www.tiktok.com/@durr_al_maarif',
    notes: 'Bio: بَـيـعُ الكُـتُـب السَّـلَـفِـيَّـة 📚🇩🇿🇩🇿🇩🇿\nوَ كُـلُّ مَـا يَـحـتَاجُـهُ طَالِــبُ الـعِلم\n  للإستِفسـار أو الطَّلب :\n0554968661\n0796294317\nPhone: 0554968661',
    status: 'New',
    niche: 'Bookstore'
  },
  {
    business_name: 'Assala Culture',
    contact_email: 'unknown@example.com',
    website_url: 'https://www.tiktok.com/@assalaculture',
    notes: 'Bio: دار الأصـالة للـثقافة 📚✍🏻\nكل الكتب التي ننشرها متوفرة  للطلب راسلونا على الخاص\nمن تسلى بالكتب لم تفتهُ سلوة 📚🔗\nالمكتبة جزائرية 🇩🇿🇩🇿🇩🇿',
    status: 'New',
    niche: 'Bookstore'
  },
  {
    business_name: 'CARVEX EXPORT',
    contact_email: 'unknown@example.com',
    website_url: 'https://www.instagram.com/carvexexport/?hl=en',
    notes: 'Bio: Specialists in vehicle export from Europe & China to Algeria. Paperwork, shipping & support included. متخصصون في تصدير السيارات من أوروبا والصين',
    status: 'New',
    niche: 'Car Export'
  }
];

async function run() {
  try {
    await client.connect();
    
    let count = 0;
    for (const lead of leads) {
      const query = `
        INSERT INTO leads (business_name, contact_email, website_url, notes, status, niche)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
      const values = [lead.business_name, lead.contact_email, lead.website_url, lead.notes, lead.status, lead.niche];
      await client.query(query, values);
      count++;
    }
    console.log("Successfully inserted", count, "leads.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

run();
