# Google Sheets + Apps Script Setup

## Step 1: สร้าง Google Sheet

1. ไปที่ [Google Sheets](https://sheets.google.com) แล้วสร้าง Spreadsheet ใหม่
2. ตั้งชื่อ Sheet แรกว่า `fanart`
3. ใส่ Header Row (แถวที่ 1) ตามนี้:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| artist | contact | submitter | message | imageUrl | width | height | sortOrder |

4. กรอกข้อมูล fanart ตั้งแต่แถวที่ 2 เป็นต้นไป

### ตัวอย่างข้อมูล

| artist | contact | submitter | message | imageUrl | width | height | sortOrder |
|--------|---------|-----------|---------|----------|-------|--------|-----------|
| ArtistA | @artist_a | คุณ A | รักสาว ๆ WE มากค่ะ | https://i.imgur.com/xxx.png | 1200 | 1600 | 1 |
| ArtistB | twitter.com/artistb | คุณ B | สุขสันต์ครบรอบ 2 ปี! | https://i.imgur.com/yyy.jpg | 1920 | 1080 | 2 |

### หมายเหตุเรื่อง Image URL

- ใช้ลิงก์รูปที่เข้าถึงได้โดยตรง (direct link)
- แนะนำ host รูปผ่าน Imgur, Google Drive (public), หรือ Discord CDN
- ถ้าใช้ Google Drive ให้แปลง URL เป็น direct link:
  - URL ปกติ: `https://drive.google.com/file/d/FILE_ID/view`
  - Direct link: `https://lh3.googleusercontent.com/d/FILE_ID`

---

## Step 2: สร้าง Apps Script

1. ใน Google Sheet ไปที่เมนู **Extensions > Apps Script**
2. ลบโค้ดเดิมทิ้ง แล้ววางโค้ดนี้:

```javascript
function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("fanart");
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var rows = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    // ข้ามแถวที่ไม่มี imageUrl
    if (!row[4]) continue;

    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = row[j];
    }
    rows.push(obj);
  }

  return ContentService
    .createTextOutput(JSON.stringify(rows))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. กด **Save** (Ctrl+S) แล้วตั้งชื่อโปรเจกต์ตามต้องการ เช่น `WE Fanart API`

---

## Step 3: Deploy เป็น Web App

1. กดปุ่ม **Deploy > New deployment**
2. กดไอคอนเฟือง เลือก **Web app**
3. ตั้งค่า:
   - **Description**: `Fanart JSON endpoint`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. กด **Deploy**
5. กด **Authorize access** แล้วอนุญาตสิทธิ์ที่ขอ
6. **คัดลอก URL** ที่ได้ (จะมีรูปแบบ `https://script.google.com/macros/s/XXXXXXX/exec`)

---

## Step 4: ใส่ URL ในเว็บ

เปิดไฟล์ `src/data.jsx` แล้วแทนที่ URL:

```javascript
// เปลี่ยนจาก:
const FANART_SHEET_URL = "REPLACE_WITH_YOUR_APPS_SCRIPT_URL";

// เป็น URL จริงที่ได้จาก Step 3:
const FANART_SHEET_URL = "https://script.google.com/macros/s/XXXXXXX/exec";
```

---

## Step 5: ทดสอบ

1. เปิดเว็บไซต์ในเบราว์เซอร์
2. เลื่อนไปที่เซคชัน **FANART WE 2 ANNIVERSARY**
3. ตรวจสอบว่ารูปแสดงผลถูกต้อง กดดูรูปใหญ่ได้

---

## การอัปเดตข้อมูลภายหลัง

- เพิ่มแถวใหม่ใน Google Sheet ได้เลย
- เว็บจะดึงข้อมูลล่าสุดทุกครั้งที่โหลดหน้า
- ไม่ต้อง deploy ใหม่ ข้อมูลอัปเดตอัตโนมัติ

---

## การ Re-deploy (ถ้าแก้ Apps Script)

ถ้าแก้โค้ดใน Apps Script ต้อง deploy version ใหม่:

1. **Deploy > Manage deployments**
2. กดไอคอนดินสอ (Edit)
3. เปลี่ยน **Version** เป็น `New version`
4. กด **Deploy**

URL เดิมจะยังใช้ได้ ไม่ต้องเปลี่ยนในเว็บ
