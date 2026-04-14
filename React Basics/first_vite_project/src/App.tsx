import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { User } from "./components/user";

export default function App() {
  return (
    <div>
      <Header title="Users List" />

      <User name="Maria Green" age={21} />
      <User name="John Brown" age={44} />
      <User name="Alex Blue" age={32} />

      <Footer />
    </div>
  )
}