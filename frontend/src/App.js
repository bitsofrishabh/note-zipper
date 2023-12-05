import "./App.css";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import LandingPage from "./component/screens/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
