import NotesPage from "./pages/NotesPage";
import NotProvider from "./context/NoteContext";

function App() {
  return (
    <div id="app">
      <NotProvider>
        <NotesPage />
      </NotProvider>
    </div>
  );
}

export default App;
