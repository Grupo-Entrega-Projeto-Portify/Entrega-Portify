import { BrowserRouter as Router } from "react-router-dom"
import { RoutesMain } from "./Router/RouterMain"
import { GlobalStyle } from "./styles/globalStyle"
import { ResetCSS } from "./styles/reset"
import { UserProvider } from "./providers/UserContext/UserContext"
import { PortifolioProvider } from "./providers/PortfolioContext/PortfolioContext"

function App() {
  return (
      <Router>
        <UserProvider>
          <PortifolioProvider >
            <GlobalStyle />
            <ResetCSS />
            <RoutesMain />
          </PortifolioProvider>
        </UserProvider>
      </Router>
  )
}

export default App
