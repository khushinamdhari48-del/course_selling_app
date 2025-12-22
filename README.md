🚀 Features Implemented

✔️ Admin can sign up / sign in
✔️ Admin can create, update, delete, and list courses
✔️ Users can sign up / sign in
✔️ Users can view available courses
✔️ Users can purchase courses
✔️ Authentication implemented using JWT
✔️ All application data stored in MongoDB using Mongoose

🧩 Tech Stack Used
Layer	Technology
Backend	Node.js + Express.js
Database	MongoDB (via Mongoose)
Authentication	JSON Web Tokens (JWT)
Dev Tools	nodemon, dotenv

📁 Project Structure (Learning-Oriented)
course_selling_app/
├── config.js        # Environment variables and secrets
├── db.js            # MongoDB connection logic
├── index.js         # Application entry point
├── routes/
│   ├── admin.js     # Admin authentication & course management
│   ├── users.js     # User authentication & purchases
│   └── courses.js   # Course-related routes
├── middleware/
│   └── auth.js      # JWT authentication middleware
├── package.json
└── .gitignore

📥 Installation & Setup
Clone the repository
git clone https://github.com/khushinamdhari48-del/course_selling_app.git
cd course_selling_app

Install dependencies
npm install

Create environment file
touch .env

Add the following to .env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server
npm start

🔌 API Endpoints (Learning Implementation)
⚙️ Admin Routes
Method	Endpoint	Description
POST	/admin/signup	Create a new admin account
POST	/admin/login	Admin authentication
POST	/admin/courses	Create a new course
GET	/admin/courses	Fetch all courses
PUT	/admin/courses/:id	Update course details
DELETE	/admin/courses/:id	Delete a course