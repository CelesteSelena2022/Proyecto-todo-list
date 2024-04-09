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

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));

    const UpdatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(UpdatedItems));
  };

  const handleCheck = (id) => {
    const newArray = [...items];
    const completedItems = newArray.find((item) => item.id === id);

    completedItems.state = !completedItems.state;

    setItems(newArray);
    localStorage.setItem("items", JSON.stringify(newArray));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center" }}>
      <Header />

      <Box sx={{ flexGrow: "1" }}>

        <Form addItem={addItem} items={items} />
        <SelectComponent setItems={setItems} />
        <RenderItem items={items} deleteItem={deleteItem} handleCheck={handleCheck} />

      </Box>

      <Footer />
    </Box>
  )
}

export default App
