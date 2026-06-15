import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
  max-width: 500px;
  margin: 0 auto;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
  color: #f0f0f0;
  border-left: 4px solid #ff4500;
  padding-left: 12px;
`

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const Select = styled.select`
  background: #1a1a1a;
  color: #f0f0f0;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`

const Input = styled.input`
  background: #1a1a1a;
  color: #f0f0f0;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`

const Erro = styled.span`
  color: #ff4500;
  font-size: 0.8rem;
  margin-top: 4px;
`

const Botao = styled.button`
  width: 100%;
  background: #ff4500;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;

  &:hover {
    background: #ff6a33;
  }
`

function Cadastro() {
    const [form, setForm] = useState({ marca: '', modelo: '', ano: '', cor: '', placa: '' })
    const [erros, setErros] = useState({})
    const [marcas, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            .then(res => res.json())
            .then(data => setMarcas(data))
    }, [])

    function handleMarca(e) {
        const marcaId = e.target.value
        const marcaNome = e.target.options[e.target.selectedIndex].text
        setForm({ ...form, marca: marcaNome, modelo: '' })
        setModelos([])
        if (marcaId) {
            fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos`)
                .then(res => res.json())
                .then(data => setModelos(data.modelos))
        }
    }

    function handleChange(e) {
        let valor = e.target.value

        if (e.target.name === 'cor') {
            valor = valor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
        }

        if (e.target.name === 'placa') {
            valor = valor.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7)
        }
        setForm({ ...form, [e.target.name]: valor })
    }

    function validar() {
        const novosErros = {}
        if (!form.marca) novosErros.marca = 'Marca é obrigatória'
        if (!form.modelo) novosErros.modelo = 'Modelo é obrigatório'
        if (!form.ano || form.ano < 1900 || form.ano > 2025) novosErros.ano = 'Ano inválido'
        if (!form.cor) novosErros.cor = 'Cor é obrigatória'
        if (!form.placa || !/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(form.placa))
            novosErros.placa = 'Placa inválida (ex: ABC1234 ou ABC1D23)'
        return novosErros
    }

    function handleSubmit(e) {
        e.preventDefault()
        const errosEncontrados = validar()
        if (Object.keys(errosEncontrados).length > 0) {
            setErros(errosEncontrados)
            return
        }
        const carros = JSON.parse(localStorage.getItem('carros') || '[]')
        const novoCarro = { ...form, id: Date.now() }
        carros.push(novoCarro)
        localStorage.setItem('carros', JSON.stringify(carros))
        navigate('/')
    }

    return (
        <Container>
            <Titulo>Cadastrar Carro</Titulo>
            <form onSubmit={handleSubmit}>
                <Campo>
                    <Select onChange={handleMarca}>
                        <option value="">Selecione a marca</option>
                        {marcas.map(m => (
                            <option key={m.codigo} value={m.codigo}>{m.nome}</option>
                        ))}
                    </Select>
                    {erros.marca && <Erro>{erros.marca}</Erro>}
                </Campo>
                <Campo>
                    <Select name="modelo" value={form.modelo} onChange={handleChange} disabled={modelos.length === 0}>
                        <option value="">Selecione o modelo</option>
                        {modelos.map(m => (
                            <option key={m.codigo} value={m.nome}>{m.nome}</option>
                        ))}
                    </Select>
                    {erros.modelo && <Erro>{erros.modelo}</Erro>}
                </Campo>
                <Campo>
                    <Input
                        name="ano"
                        placeholder="Ano"
                        type="number"
                        value={form.ano}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) e.preventDefault()
                        }}
                    />
                    {erros.ano && <Erro>{erros.ano}</Erro>}
                </Campo>
                <Campo>
                    <Input
                        name="cor"
                        placeholder="Cor"
                        value={form.cor}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (!/[a-zA-ZÀ-ÿ\s]/.test(e.key)) e.preventDefault()
                        }}
                    />
                    {erros.cor && <Erro>{erros.cor}</Erro>}
                </Campo>
                <Campo>
                    <Input
                        name="placa"
                        placeholder="Ex: ABC1234 ou ABC1D23"
                        value={form.placa}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            const pos = form.placa.length
                            if (pos < 3 && !/[a-zA-Z]/.test(e.key)) e.preventDefault()
                            if (pos >= 3 && !/[0-9A-Za-z]/.test(e.key)) e.preventDefault()
                        }}
                    />
                    {erros.placa && <Erro>{erros.placa}</Erro>}
                </Campo>
                <Botao type="submit">Cadastrar</Botao>
            </form>
        </Container>
    )
}

export default Cadastro