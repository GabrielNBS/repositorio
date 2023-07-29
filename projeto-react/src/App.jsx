import Perfil from "./components/Perfil";


function App() {
  const nome = "gabriel";
  return (
    <header>
      <Perfil />
      <h1>Olá mundo meu nome é {nome} </h1>
      <h2>subtitulos</h2>
    </header>
  )
}

export default App
