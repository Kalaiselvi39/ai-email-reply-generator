
📧 Email Reply Generator

A full-stack AI-powered web application that generates intelligent email replies based on user input and selected tone using the Gemini API.

----------------------------------------------------
🛠️ Tech Stack:
----------------------------------------------------
Frontend  : React.js (Vite)  
Backend   : Spring Boot
Database  : MySQL 
API       : Gemini API (for AI logic)  
Tools     : Postman (API Testing)  
Deployment: Netlify

----------------------------------------------------
🚀 Features:
----------------------------------------------------
✔️ User can input an original email message  
✔️ Select tone: Professional, Casual, Friendly  
✔️ Generate AI-powered smart reply instantly  
✔️ Copy the generated reply with one click  
✔️ Error handling & loading indicators  
✔️ Tested using Postman tool

----------------------------------------------------
⚙️ How to Run the Project Locally
----------------------------------------------------

🖥️ FRONTEND (React.js)  
-------------------------
1. Open terminal  
2. Navigate to /frontend  
3. Install dependencies:  
   > npm install  
4. Start development server:  
   > npm run dev   (for Vite)  
5. Runs on: http://localhost:5173

🖥️ BACKEND (Spring Boot)  
-------------------------
1. Open `backend` folder in IDE (IntelliJ, VS Code)  
2. Update `application.properties` with your DB credentials  
3. Create MySQL/PostgreSQL database: `email_reply_db`  
4. Run the Spring Boot application:  
   > mvn spring-boot:run  
5. Backend runs on: http://localhost:8080  

✍️ Example API (Test with Postman):  
POST http://localhost:8080/api/email/generate  
Body (JSON):  
{
   "emailContent": "I would like to schedule a meeting...",
   "tone": "professional"
}

----------------------------------------------------
🌐 Deployment Instructions
----------------------------------------------------

FRONTEND (React.js)  
-------------------------
1. Build the project:  
   > npm run build  
2. Go to https://netlify.com  
3. Drag and drop the "build" folder to deploy  
4. Get live link: https://yourappname.netlify.app  

----------------------------------------------------
📷 Screenshots
----------------------------------------------------
[ ] Home Page - Email Input  
[ ] Tone Dropdown  
[ ] Loading Indicator  
[ ] Generated Reply with Copy Button  

----------------------------------------------------
👤 Author
----------------------------------------------------
Name    : Kalaiselvi S  
Role    : Full Stack Developer (React + Java Spring Boot)  
GitHub  : https://github.com/Kalaiselvi39  
LinkedIn: https://www.linkedin.com/in/kalaiselvi-s/  

----------------------------------------------------
📄 License
----------------------------------------------------
This project is licensed under the MIT License - see LICENSE file for details.
