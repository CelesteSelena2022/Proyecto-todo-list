import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import RenderItem from "./components/Form/RenderItem"
import SelectComponent from "./components/Form/SelectComponent"
import { Box } from "@mui/material";

import { useState } from "react";

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const addItem = (newItem) => {
    const UpdatedItems = [...items, newItem];
    setItems(UpdatedItems);
    localStorage.setItem("items", JSON.stringify(UpdatedItems));
  };

  return (
    <Box sx={{display:"flex", flexDirection:"column", minHeight:"100vh", alignItems:"center"}}>
      <Header />

      <Box sx={{flexGrow: "1"}}>
          
          <Form addItem={addItem} items={items}/>
          <SelectComponent />
          <RenderItem items={items}/>

      </Box>

      <Footer />
    </Box>
  )
}

export default App
