import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Detalhes from './pages/Detalhes'
import Navbar from './components/Navbar'
import GlobalStyle from './styles/GlobalStyle'

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App