// src/App.tsx
import Navbar from './components/layout/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer /> 
      <ScrollToTopButton />
    </div>
  );
}

export default App;