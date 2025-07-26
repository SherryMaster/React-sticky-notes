# Sticky Notes App

A modern, interactive sticky notes application built with React and powered by Appwrite for backend services. Create, organize, and manage your digital sticky notes with drag-and-drop functionality, customizable colors, and real-time synchronization.

![Sticky Notes App](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.0.4-green) ![Appwrite](https://img.shields.io/badge/Appwrite-18.1.1-red)

## ✨ Features

### 🎨 **Visual & Interactive**

- **Drag & Drop**: Move notes freely around the canvas with smooth mouse interactions
- **Color Themes**: Choose from 4 beautiful color schemes (Yellow, Green, Blue, Purple)
- **Auto-Resize**: Text areas automatically expand as you type
- **Z-Index Management**: Click any note to bring it to the front
- **Grid Background**: Clean, professional grid-based workspace

### 📝 **Note Management**

- **Create Notes**: Add new sticky notes with a single click
- **Real-time Editing**: Type directly in notes with auto-save functionality
- **Debounced Saving**: Intelligent saving system that waits 2 seconds after typing stops
- **Delete Notes**: Remove unwanted notes with confirmation
- **Persistent Positioning**: Notes remember their exact position on the canvas

### 🔐 **User Authentication**

- **Secure Login/Register**: Email and password authentication via Appwrite
- **User Sessions**: Persistent login sessions across browser restarts
- **Personal Workspace**: Each user sees only their own notes
- **Welcome Message**: Personalized greeting with user's name

### 💾 **Data Management**

- **Cloud Storage**: All notes stored securely in Appwrite database
- **Real-time Sync**: Changes are automatically saved to the cloud
- **Cross-Device Access**: Access your notes from any device
- **Data Persistence**: Notes are never lost, even if you close the browser

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Appwrite account and project setup

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SherryMaster/React-sticky-notes.git
   cd sticky-notes
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory with your Appwrite configuration:

   ```env
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_NOTES_ID=your_collection_id
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to start using the app.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AddButton.jsx   # Button to create new notes
│   ├── Color.jsx       # Color picker component
│   ├── Controls.jsx    # Side panel with controls
│   ├── DeleteButton.jsx # Delete note functionality
│   └── NoteCard.jsx    # Individual sticky note component
├── context/            # React Context providers
│   ├── AuthContext.jsx # Authentication state management
│   └── NoteContext.jsx # Notes state management
├── pages/              # Main application pages
│   ├── LoginPage.jsx   # Authentication page
│   └── NotesPage.jsx   # Main notes workspace
├── appwrite/           # Backend configuration
│   ├── config.js       # Appwrite client setup
│   └── database.js     # Database operations
├── assets/             # Static assets
│   └── colors.json     # Color theme definitions
├── icons/              # SVG icon components
├── utils.js            # Utility functions
├── index.css           # Global styles
└── main.jsx            # Application entry point
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Backend Service**: Appwrite 18.1.1
- **Styling**: CSS3 with custom properties
- **State Management**: React Context API
- **Authentication**: Appwrite Auth
- **Database**: Appwrite Database
- **Development**: ESLint for code quality

## 📱 Usage

### Creating Your First Note

1. Register for a new account or log in
2. Click the **+** button in the left control panel
3. Start typing in the new note that appears
4. Your note will auto-save after 2 seconds of inactivity

### Customizing Notes

- **Change Colors**: Select a color from the control panel, then click on any note
- **Move Notes**: Click and drag any note to reposition it
- **Resize Content**: Text areas automatically expand as you type
- **Delete Notes**: Click the trash icon in the note header

### Managing Your Workspace

- **Focus Notes**: Click any note to bring it to the front
- **Logout**: Use the logout button in the top-right corner
- **Persistent State**: Your notes and their positions are saved automatically

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌟 Key Features Explained

### Intelligent Auto-Save

The app implements a debounced saving mechanism that waits for 2 seconds after you stop typing before saving to the database. This reduces API calls while ensuring your work is never lost.

### Drag & Drop System

Each note can be freely moved around the canvas. The app calculates proper positioning and prevents notes from being dragged outside the viewport boundaries.

### Color Management

Four carefully selected color themes provide visual organization. Colors are stored as JSON objects containing header, body, and text colors for consistent theming.

### Z-Index Management

When you click on a note, it automatically comes to the front while other notes are pushed back, creating a natural layering system.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Backend powered by [Appwrite](https://appwrite.io/)
- Icons and UI inspired by modern design principles
