const url = "https://hqrbbeisvyauzeuqcpgo.supabase.co/rest/v1/leads";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxcmJiZWlzdnlhdXpldXFjcGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNTUyNzMsImV4cCI6MjEwNDYzMTI3M30.2jSekV25fYdBzO1r8_9QQawf1LgP93CSRA_0tpwFGFE";

const leads = [
  {
    "business_name": "مكتبة أبي عثمان الجزائري",
    "website_url": "https://www.tiktok.com/@abouothmandz",
    "notes": "Bio: 📚 مكتبة أبي عثمان الجزائري🇩🇿 📖 كتب العلم الشرعي لكل من أراد تعلم دينه 🛒 الكتب المتوفرة👇 واتساب/تيليجرام 0550314451\nPhone: 0550314451",
    "status": "New",
    "niche": "Bookstore"
  },
  {
    "business_name": "مكتبة غيث السلف",
    "website_url": "https://www.tiktok.com/@maktabat.ghaith.asalaf",
    "notes": "Bio: مكتبة جزائرية 🇩🇿( توصيل في الجزائر فقط)\nنعمل على توفير كتب دينية لطلاب العلم \nالحساب الاول تحذف (16k)\nواتساب:0555786250\nPhone: 0555786250",
    "status": "New",
    "niche": "Bookstore"
  },
  {
    "business_name": "مكتبة الهِدايَة",
    "website_url": "https://t.me/kotob_abo_anes",
    "notes": "Bio: متجر إلكتروني و التوصيل متوفر 🇩🇿📚\nالبيع بالجملة و التجزئة 📦\n📞0672157962📞\nPhone: 0672157962\nTikTok: https://www.tiktok.com/@zakisdh",
    "status": "New",
    "niche": "Bookstore"
  },
  {
    "business_name": "dar_elfallah",
    "website_url": "https://wa.me/qr/XXUQWA47AQTUF1",
    "notes": "Bio: متجركم الإلكتروني لبيع الكتب الدينية[أهل السنة و الجماعة] \n📍الجزائر🇩🇿\n+213771328793 WhatsApp 📞\nPhone: +213771328793\nTikTok: https://www.tiktok.com/@dar_elfallah",
    "status": "New",
    "niche": "Bookstore"
  },
  {
    "business_name": "مَـكـتَـبَـةُ دُرر المَـعَارِف",
    "website_url": "https://www.tiktok.com/@durr_al_maarif",
    "notes": "Bio: بَـيـعُ الكُـتُـب السَّـلَـفِـيَّـة 📚🇩🇿🇩🇿🇩🇿\nوَ كُـلُّ مَـا يَـحـتَاجُـهُ طَالِــبُ الـعِلم\n  للإستِفسـار أو الطَّلب :\n0554968661\n0796294317\nPhone: 0554968661",
    "status": "New",
    "niche": "Bookstore"
  },
  {
    "business_name": "Assala Culture",
    "website_url": "https://www.tiktok.com/@assalaculture",
    "notes": "Bio: دار الأصـالة للـثقافة 📚✍🏻\nكل الكتب التي ننشرها متوفرة  للطلب راسلونا على الخاص\nمن تسلى بالكتب لم تفتهُ سلوة 📚🔗\nالمكتبة جزائرية 🇩🇿🇩🇿🇩🇿",
    "status": "New",
    "niche": "Bookstore"
  },
  {
    "business_name": "CARVEX EXPORT",
    "website_url": "https://www.instagram.com/carvexexport/?hl=en",
    "notes": "Bio: Specialists in vehicle export from Europe & China to Algeria. Paperwork, shipping & support included. متخصصون في تصدير السيارات من أوروبا والصين",
    "status": "New",
    "niche": "Car Export"
  }
];

fetch(url, {
  method: 'POST',
  headers: {
    'apikey': anonKey,
    'Authorization': 'Bearer ' + anonKey,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  },
  body: JSON.stringify(leads)
}).then(res => res.json()).then(data => {
  console.log("Success! Inserted " + data.length + " leads.");
}).catch(err => {
  console.error(err);
});
