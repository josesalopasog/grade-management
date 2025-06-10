import Dashboard from '../Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function App() {

  return (
    <>
      <main>
        <Header />
        <Dashboard />
        <Footer />
      </main>
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </>
  )
}

export default App
