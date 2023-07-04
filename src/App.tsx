import { BrowserRouter as Router } from "react-router-dom"
import { RoutesMain } from "../src/Router/RouterMain"
import { GlobalStyle } from "./styles/globalStyle"
import { ResetCSS } from "./styles/reset"
import { UserProvider } from "./components/providers/UserContext/UserContext"

function App() {
  return (
      <Router>
        <UserProvider>
          <GlobalStyle />
          <ResetCSS />
          <RoutesMain />
        </UserProvider>
      </Router>
  )
}

export default App
