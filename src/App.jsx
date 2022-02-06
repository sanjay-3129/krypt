import {
  Welcome,
  Navbar,
  Footer,
  Loader,
  Services,
  Transactions,
} from "./components/index";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
