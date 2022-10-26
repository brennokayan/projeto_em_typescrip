import { ThemeProvider } from "@emotion/react"
import { Routes_services } from "./routes/routes"
import { LightTheme } from "./shared/themes/LightTheme"

function App() {

  return (  
    <ThemeProvider theme={LightTheme}>
      <Routes_services />
    </ThemeProvider>
  )
}

export default App
