# IT 412 Final Project

A modern, responsive Node.js web application built with Express.js featuring a clean sage-green design.

## 📋 Project Requirements Met

✅ **File Structure**
- `server.js` - Main Express server entry point
- `public/style.css` - Modern styling with sage green theme and transparency
- `package.json` - Dependencies and scripts

✅ **Functionality**
- Root route displays:
  - Full name: **Maricar Esto Panganiban**
  - Class section: **BA 4101**  
  - Inspirational quote: *Never be afraid to try something new, life gets boring when you stay within the limit of what you already know.- Anonymous*

✅ **Interface Design**
- Modern, centered responsive layout
- Sage green color scheme with transparency effects
- Clean Poppins font family
- Space for profile image at the top

✅ **Deployment Ready**
- Proper start script: `"node server.js"`
- PORT environment variable support for Render/Heroku compatibility

✅ **Code Quality**
- Well-organized, commented code
- Clear separation of server logic and styling

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation & Running

1. **Install dependencies:**
```bash
npm install
```

2. **Start the application:**
```bash
npm start
```
The app will run on port 3000 by default.

3. **Custom port (if needed):**
```bash
PORT=3001 npm start
```

4. **Visit your application:**
Open your browser to `http://localhost:3000` (or your chosen port)

## 🖼️ Adding Your Profile Image

To add your profile image:

1. Save your image in the `public` folder (e.g., `public/profile.jpg`)
2. In `server.js`, uncomment and edit line 33:
```html
<img src="/profile.jpg" alt="${fullName}" class="profile-image">
```

## 🌐 Deployment to Render

1. Connect your GitHub repository to Render
2. Use these settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - Render will automatically use the PORT environment variable

## 📁 Project Structure

```
IT-412-Final-Project/
├── server.js              # Main Express server
├── package.json           # Project config & dependencies
├── public/
│   └── style.css         # Styling with sage green theme
└── README.md             # This file
```

## 🎨 Customization

- **Name/Quote:** Edit variables in `server.js` or set environment variables
- **Colors:** Modify CSS variables in `style.css`
- **Layout:** Adjust styles in `public/style.css`

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3 (with modern features like backdrop-filter)
- **Font:** Google Fonts (Poppins)
- **Design:** Responsive, mobile-first approach

---
*Created for IT 412 Final Project by Maricar Esto Panganiban*
