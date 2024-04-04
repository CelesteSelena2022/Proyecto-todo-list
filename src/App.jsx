import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
// import RenderItem from "./components/Form/RenderItem"
import Item from "./components/Form/Item"
import SelectComponent from "./components/Form/SelectComponent"
import { Box } from "@mui/material";

function App() {

  return (
    <Box sx={{display:"flex", flexDirection:"column", minHeight:"100vh", alignItems:"center"}}>
      <Header />

      <Box sx={{flexGrow: "1"}}>
          
          <Form />
          <SelectComponent />

          <Item/>
      </Box>

      <Footer />
    </Box>
  )
}

export default App
