import { Layout } from "@/widgets/layouts/appLayout";
import { Routing } from "../providers/router/Routing";
import { StoreProvider } from "../providers/store/ui/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <Layout>
        <Routing />
      </Layout>
    </StoreProvider>
  );
};

export default App;
