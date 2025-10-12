import { BrowserRouter, Route,Routes} from "react-router-dom"
import {Home} from "./pages/Home";
import { NoteFound } from "./pages/NotFound";

function App() {
  return (
    <>
    
    <BrowserRouter> 
    <Routes>
      <Route index element={<Home/>} />
      { <Route path="*" element = {<NoteFound/>}/>}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
