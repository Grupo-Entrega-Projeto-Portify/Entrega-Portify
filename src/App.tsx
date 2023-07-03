import { BrowserRouter as Router } from "react-router-dom"
import { RoutesMain } from "../src/Router/RouterMain"
import { GlobalStyle } from "./styles/globalStyle"
import { ResetCSS } from "./styles/reset"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ResetCSS />
      <RoutesMain />
    </Router>
  )
}

export default App
