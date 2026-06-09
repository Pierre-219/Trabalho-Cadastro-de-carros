import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
  max-width: 500px;
  margin: 0 auto;
`

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
  color: #f0f0f0;
  border-left: 4px solid #ff4500;
  padding-left: 12px;
`

const Card = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 24px;
`

const Item = styled.p`
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 12px;

  strong {
    color: #ff4500;
    margin-right: 8px;
  }
`

const BotaoVoltar = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  background: transparent;
  border: 1px solid #ff4500;
  color: #ff4500 !important;
  padding: 8px 20px;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #ff4500;
    color: #fff !important;
  }
`

function Detalhes() {
    const { id } = useParams()
    const [carro, setCarro] = useState(null)

    useEffect(() => {
        const carros = JSON.parse(localStorage.getItem('carros') || '[]')
        const encontrado = carros.find(c => c.id === Number(id))
        setCarro(encontrado)
    }, [id])

    if (!carro) return <Container><p>Carro não encontrado.</p></Container>

    return (
        <Container>
            <Titulo>Detalhes do Carro</Titulo>
            <Card>
                <Item><strong>Marca:</strong> {carro.marca}</Item>
                <Item><strong>Modelo:</strong> {carro.modelo}</Item>
                <Item><strong>Ano:</strong> {carro.ano}</Item>
                <Item><strong>Cor:</strong> {carro.cor}</Item>
                <Item><strong>Placa:</strong> {carro.placa}</Item>
            </Card>
            <BotaoVoltar to="/">← Voltar</BotaoVoltar>
        </Container>
    )
}

export default Detalhes