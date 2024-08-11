import "./App.css";
import {
  Comments,
  Flights,
  Footer,
  Header,
  Recommended,
  Special,
  Travel,
} from "./page";

export default function App() {
  return (
    <>
      <Header />
      <Flights />
      <Special />
      <Travel />
      <Recommended />
      <Comments />
      <Footer />
    </>
  );
}
