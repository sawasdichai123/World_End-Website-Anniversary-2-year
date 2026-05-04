// Data for all 6 talents in the World End unit.
// Order: 1. T-Reina Ashyra, 2. Mild-R, 3. Kumoku Tsururu, 4. Beta AMI, 5. Debirun, 6. Xonebu X'thulhu
const TALENTS = [
  {
    id: "ashyra",
    no: "01",
    name: "T-REINA ASHYRA",
    romaji: "T-REINA / ASHYRA",
    thName: "ที-เรน่า แอชีร่า",
    sub: "LUMINA",
    disaster: "ภัยพิบัติภูเขาไฟ",
    disasterEn: "VOLCANIC DISASTER",
    instrument: "DRUM",
    instrumentIcon: "◈",
    color: "#ff6b2c",
    glow: "rgba(255,107,44,.28)",
    bg: "linear-gradient(155deg,#3a1208,#1a0904)",
    particle: "ember",
    bio: "แอชีร่า สาวน้อยผู้แสนจะเรียบร้อย พูดน้อย น่ารัก ศูนย์รวมของความสดใสและมากล้นไปด้วยเอเนอจี้แบบ 300% เธอไม่เพียงแค่น่ารักเท่านั้น แต่ยังเต็มเปี่ยมไปด้วยความร่าเริง มุ้งมิ้ง วุ้งวิ้ง คาวาอี้ เธอจะมีแต่รอยยิ้มให้คุณ ไม่ว่าจะยามเช้า สาย บ่าย เย็น หรือก่อนนอน\u2002—\u2002เธอเป็นคนที่มีเสน่ห์อย่างน่าเหลือเชื่อ สามารถทำให้คนรอบข้างรู้สึกดีและมีความสุขเพียงแค่ได้อยู่ใกล้เธอ",
    birthday: "June 12",
    debutDate: "2024.05.23 · 20:00",
    socials: {
      twitter: "twitter.com/AshyraWorldEnd",
      facebook: "facebook.com/AshyraWorldEnd",
      tiktok: "tiktok.com/@ashyraworldend",
    },
  },
  {
    id: "mildr",
    no: "02",
    name: "MILD-R",
    romaji: "MILD-R",
    thName: "มายด์อาร์",
    sub: "PIXELA",
    disaster: "ภัยพิบัติกลายพันธุ์",
    disasterEn: "MUTANT DISASTER",
    instrument: "GUITAR",
    instrumentIcon: "▲",
    color: "#ff5fcf",
    glow: "rgba(255,95,207,.32)",
    bg: "linear-gradient(155deg,#3b0f2f,#160816)",
    particle: "pixel",
    bio: "มายด์อาร์ Mutant มนุษย์กลายพันธุ์ที่จะมารักษาหัวใจคุณแบบ super exclusive แต่เมื่อหลงเข้ามาแล้วจงระวัง เพราะมายมีตาวิเศษเห็นนะ หลังจากออกจากหลอดทดลอง บอกตรงๆว่ามีหลายอารมณ์เกิดขึ้นมากมาย ถ้าเค้ามีร่างกายที่ผิดมนุษย์แบบนี้แล้ว\u2002...\u2002เธอจะยังรักเค้าอยู่มั้ยนะ\u2002...\u2002?",
    birthday: "December 12",
    debutDate: "2024.05.22 · 20:00",
    socials: {
      twitter: "twitter.com/MildRWorldEnd",
      facebook: "facebook.com/MildRWorldEnd",
      tiktok: "tiktok.com/@mildrworldend",
    },
  },
  {
    id: "tsururu",
    no: "03",
    name: "KUMOKU TSURURU",
    romaji: "KUMOKU / TSURURU",
    thName: "คุโมคุ สึรุรุ",
    sub: "LUMINA",
    disaster: "ภัยพิบัติโลกร้อน",
    disasterEn: "CLIMATE DISASTER",
    instrument: "KEYBOARD",
    instrumentIcon: "☁",
    color: "#5aa9ff",
    glow: "rgba(90,169,255,.28)",
    bg: "linear-gradient(155deg,#0b2238,#04101c)",
    particle: "cloud",
    bio: "ท้องฟ้าแปรปรวน ระดับน้ำทะเลสูงขึ้น คลื่นความร้อนกระจายตัว ความแห้งแล้งของพื้นดิน และทั้งหมดนี้ ก่อให้เกิด ตัวแทนแห่งภาวะโลกร้อน ก้อนเมฆตัวน้อย ที่ลอยสูงที่สุ๊ดดดดดดดดดดด ด ด ด ด ด",
    birthday: "September 16",
    debutDate: "2024.05.22 · 18:00",
    socials: {
      twitter: "twitter.com/TsururuWorldEnd",
      facebook: "facebook.com/TsururuWorldEnd",
      tiktok: "tiktok.com/@tsururuworldend",
    },
  },
  {
    id: "ami",
    no: "04",
    name: "BETA AMI",
    romaji: "BETA / AMI",
    thName: "เบต้า เอมิ",
    sub: "LUMINA",
    disaster: "ภัยพิบัติหุ่นยนต์",
    disasterEn: "ROBOT DISASTER",
    instrument: "VIOLIN",
    instrumentIcon: "◉",
    color: "#3fc3ff",
    glow: "rgba(63,195,255,.3)",
    bg: "linear-gradient(155deg,#08314a,#041522)",
    particle: "circuit",
    bio: "ดวงดาวที่เบต้า เอเอ็มไอจากมา คือสถานที่ที่เทคโนโลยีก้าวหน้าจนถึงจุดสูงสุด เหล่าหุ่นยนต์ผู้มีความนึกคิดได้ก่อการปฏิวัติขึ้น เป็นผลให้มีมนุษย์หลงเหลืออยู่น้อยมาก ในโลกอันแสนโหดร้ายใบนั้น ยังมีเอมิผู้ซึ่งรักพวกเขาสุดหัวใจ\u2002—\u2002แค่เพียงเหตุผลสั้นๆ นั้นทำให้เอมิโดนกีดกั้นและเกลียดชังจากทั้งสองฝ่าย ในวันหนึ่งเธอได้บังเอิญช่วยมนุษย์สาวคนนึงไว้ หลังได้เปิดใจคุยกันก็พบความจริงว่า ‘มนุษย์เป็นผู้สร้างหุ่นยนต์ขึ้นมา‘ หัวใจพองโตเมื่อรับรู้ถึงความปรารถนาใหม่ สุดท้ายแล้วเอมิจะสามารถปกป้องและพบเจอเขาคนนั้นไหมนะ?",
    birthday: "July 16",
    debutDate: "2024.05.21 · 18:00",
    socials: {
      twitter: "twitter.com/AMIWorldEnd",
      facebook: "facebook.com/AMIWorldEnd",
      tiktok: "tiktok.com/@amiworldend",
    },
  },
  {
    id: "debirun",
    no: "05",
    name: "DEBIRUN",
    romaji: "DEBIRUN",
    thName: "เดบีรุน",
    sub: "PIXELA",
    disaster: "ภัยพิบัติอุกกาบาต",
    disasterEn: "METEOR DISASTER",
    instrument: "GUITAR",
    instrumentIcon: "✦",
    color: "#123e8a",
    glow: "rgba(18,62,138,.34)",
    bg: "linear-gradient(155deg,#07152f,#02050d)",
    particle: "meteor",
    bio: "เดบีรุน ภัยพิบัติอุกกาบาต ผู้บัญชาการสูงสุดแห่งกองทัพลับเมเทโอรอยด์ ออกเดินทางท่องจักรวาลจัดการกับผู้กระทำความผิดที่เป็นภัยคุกคามต่อทั้งเอกภพ มีพลังดาวตกที่กวาดล้างโลกเพื่อการถือกำเนิดใหม่ และชี้ชะตาทุกสรรพสิ่ง ตอนนี้ได้มาเยือนที่โลกมนุษย์ประเทศไทย แอบมาสำรวจโลกใบนี้อย่างแนบเนียนในร่างเด็กสาวชาวโลก ด้วยการตัดสินใจอันเด็ดเดี่ยวของเดบีรุนจึงได้พาทุกคนย้อนกลับมายังอดีต เป็นวีทูปเบอร์ เพื่อกระจายข่าวสารและประกาศให้ชาวโลกได้ตระหนักถึงภัยพิบัติที่กำลังคลืบคลานเข้ามาก่อนที่จะสายเกินไป เรื่องที่เล่ามาทั้งหมด เป็นจริงแค่ไหนไม่มีใครรู้",
    birthday: "November 20",
    debutDate: "2024.05.23 · 18:00",
    socials: {
      twitter: "twitter.com/DebirunWorldEnd",
      facebook: "facebook.com/DebirunWorldEnd",
      tiktok: "tiktok.com/@debirunworldend",
    },
  },
  {
    id: "xonebu",
    no: "06",
    name: "XONEBU X'THULHU",
    romaji: "XONEBU / X'THULHU",
    thName: "โซเนบุ ซทูลู",
    sub: "LUMINA",
    disaster: "ภัยพิบัติเอเลี่ยน",
    disasterEn: "ALIEN DISASTER",
    instrument: "BASS",
    instrumentIcon: "※",
    displayName: "XONEBU",
    color: "#a96bff",
    glow: "rgba(169,107,255,.3)",
    bg: "linear-gradient(155deg,#29104a,#10061f)",
    particle: "alien",
    bio: "เอเลี่ยนจากซากดวงดาว X01 อันห่างไกล เดินทางมาที่ดาวโลกเพื่อช่วยเหลือและกอบกู้!!! ....ล้อเล่น มาหาอะไรทำเฉยๆ ค่ะ อวกาศมันน่าเบื่อ",
    birthday: "August 28",
    debutDate: "2024.05.21 · 20:00",
    socials: {
      twitter: "twitter.com/XonebuWorldEnd",
      facebook: "facebook.com/XonebuWorldEnd",
      tiktok: "tiktok.com/@xonebuworldend",
    },
  },
];

window.TALENTS = TALENTS;

// Fanart data from Google Sheets
const FANART_SHEET_URL = "REPLACE_WITH_YOUR_APPS_SCRIPT_URL";

function normalizeFanartEntry(row) {
  const w = Number(row.width) || 0;
  const h = Number(row.height) || 0;
  let orientation = "square";
  if (w && h) {
    if (h / w > 1.15) orientation = "portrait";
    else if (w / h > 1.15) orientation = "landscape";
  }
  return {
    artist: row.artist || "",
    contact: row.contact || "",
    submitter: row.submitter || "",
    message: row.message || "",
    imageUrl: row.imageUrl || "",
    width: w,
    height: h,
    orientation,
    sortOrder: Number(row.sortOrder) || 0,
  };
}

async function fetchFanart() {
  const res = await fetch(FANART_SHEET_URL);
  if (!res.ok) throw new Error("Failed to fetch fanart data");
  const json = await res.json();
  const rows = Array.isArray(json) ? json : json.data || [];
  return rows
    .map(normalizeFanartEntry)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

window.fetchFanart = fetchFanart;
