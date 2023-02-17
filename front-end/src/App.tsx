import { AuthProvider } from "./context/Auth";
import { RegisterProvider } from "./context/Register";
import RoutesMain from "./routes";

function App() {
  return (
    <AuthProvider>
      <RegisterProvider>
        <RoutesMain />
      </RegisterProvider>
    </AuthProvider>
  );
}

export default App;
