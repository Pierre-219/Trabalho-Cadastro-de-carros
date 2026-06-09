import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: #1a1a1a;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ff4500;
    margin: 0;
    width: 100%;
`

const Logo = styled.h2`
    color: #ff4500;
    font-size: 1.4rem;
`

const Links = styled.div`
    display: flex;
    gap: 24px;

    a {
        color: #f0f0f0;
        font-weight: 500;
        transition: color 0.2s;
    }

    a:hover {
        color: #ff4500;
    }
`

function Navbar() {
    return (
        <Nav>
            <Logo>Cadastro de Carros</Logo>
            <Links>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar Carro</Link>
            </Links>
        </Nav>
    )
}

export default Navbar