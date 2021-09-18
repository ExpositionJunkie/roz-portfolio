import Home from "./Components/homeComponent/home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faGithub, faCheckSquare, faCoffee)

function App() {
  
  return <Home />;
}

export default App;
