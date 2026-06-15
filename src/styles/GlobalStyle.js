import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f0f0f;
    color: #f0f0f0;
    font-family: 'Segoe UI', sans-serif;
  }

  a {
    color: #ff4500;
    text-decoration: none;
  }

  a:hover {
    color: #ff6a33;
  }

  @media (max-width: 768px) {
      body {
          font-size: 14px;
      }
  }
`

export default GlobalStyle