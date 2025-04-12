import { Layout } from "@/widgets/layouts/appLayout";
import { Routing } from "../providers/router/Routing";
import { StoreProvider } from "../providers/store/ui/StoreProvider";
import { ThemeProvider } from "../providers/theme/ThemeProvider";

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Layout>
          <Routing />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
