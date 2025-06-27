# TaskManager API

## 📝 รายละเอียดโปรเจค
TaskManager API เป็น RESTful API สำหรับจัดการรายการงาน (Todo List) พัฒนาด้วย Node.js, Express และ Prisma ORM

## 🚀 ฟีเจอร์
- CRUD operations สำหรับจัดการ tasks
- ใช้ฐานข้อมูล PostgreSQL ผ่าน Prisma ORM
- RESTful API endpoints
- การจัดการ tasks แบบ async/await

## 🛠 เทคโนโลยีที่ใช้
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

## 📦 โครงสร้างโปรเจค
```
TodoAPIupdate/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   │   └── task.controller.js
│   ├── routes/
│   │   └── task.route.js
│   ├── utils/
│   │   └── prisma.js
│   └── index.js
├── package.json
└── README.md
```

## 🏃‍♂️ การติดตั้งและรัน

1. Clone โปรเจค:
```bash
git clone https://github.com/thanunbenz/TaskManager.git
cd TaskManager
```

2. ติดตั้ง dependencies:
```bash
npm install
```

3. ตั้งค่า environment variables ใน `.env`:
```
DATABASE_URL="postgresql://username:password@localhost:5432/taskmanager"
```

4. รัน Prisma migrations:
```bash
npx prisma migrate dev
```

5. รันเซิร์ฟเวอร์:
```bash
npm run dev
```

## 📡 API Endpoints

### Tasks
- `GET /api/tasks` - ดึงรายการ tasks ทั้งหมด
- `GET /api/tasks/:id` - ดึง task ตาม ID
- `POST /api/tasks` - สร้าง task ใหม่
- `PUT /api/tasks/:id` - อัพเดท task
- `DELETE /api/tasks/:id` - ลบ task

## 👨‍💻 ผู้พัฒนา
Thanun Benz

## 📄 License
MIT License 