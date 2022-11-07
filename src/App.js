import GlobalStyle from './Component/GlobalStyle'
import Navbar from './Component/navbar/Navbar'
import Container from './Component/container/Container'
function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Navbar />
        <Container />
      </div>
    </GlobalStyle>
  );
}

export default App;
