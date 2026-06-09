import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
`

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
  color: #f0f0f0;
  border-left: 4px solid #ff4500;
  padding-left: 12px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`

const Card = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 20px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #ff4500;
  }
`

const CardTitulo = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #ff4500;
`

const CardInfo = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  margin-bottom: 4px;
`

const Acoes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`

const BotaoDeletar = styled.button`
  background: transparent;
  border: 1px solid #ff4500;
  color: #ff4500;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #ff4500;
    color: #fff;
  }
`

const LinkDetalhes = styled(Link)`
  background: #ff4500;
  color: #fff !important;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background: #ff6a33;
  }
`

const Vazio = styled.p`
  color: #666;
  font-size: 1rem;
`

function Home() {
    const [carros, setCarros] = useState([])

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('carros') || '[]')
        setCarros(dados)
    }, [])

    function deletar(id) {
        const novosCarros = carros.filter(c => c.id !== id)
        localStorage.setItem('carros', JSON.stringify(novosCarros))
        setCarros(novosCarros)
    }

    return (
        <Container>
            <Titulo>Carros Cadastrados</Titulo>
            {carros.length === 0 && <Vazio>Nenhum carro cadastrado ainda.</Vazio>}
            <Grid>
                {carros.map(carro => (
                    <Card key={carro.id}>
                        <CardTitulo>{carro.marca} {carro.modelo}</CardTitulo>
                        <CardInfo>📅 Ano: {carro.ano}</CardInfo>
                        <CardInfo>🎨 Cor: {carro.cor}</CardInfo>
                        <CardInfo>🔖 Placa: {carro.placa}</CardInfo>
                        <Acoes>
                            <LinkDetalhes to={`/detalhes/${carro.id}`}>Ver detalhes</LinkDetalhes>
                            <BotaoDeletar onClick={() => deletar(carro.id)}>Deletar</BotaoDeletar>
                        </Acoes>
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

export default Home