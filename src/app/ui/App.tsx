import { Routing } from "../providers/router/Routing"
import { StoreProvider } from "../providers/store/ui/StoreProvider"

const App = () => {

  return (

    <StoreProvider>
        <Routing/>
    </StoreProvider>

  )

}

export default App