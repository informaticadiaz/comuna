import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";
import HistoryContext from "../store/HistoryContext";
import CategoriesContext from "../store/CategoriesContext";

const AddToBudget = () => {
  const { addCategory } = useContext(CategoriesContext);
  const { addHistoryElement } = useContext(HistoryContext);

  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <TextInput
        onChange={(e) => setLabel(e.currentTarget.value)}
        mt={20}
        size="md"
        w="40%"
        placeholder=""
        label="Mes"
        withAsterisk
      />
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={20}
        size="md"
        w="40%"
        placeholder=""
        label="Monto"
        withAsterisk
      />
      <Button
        mt={20}
        onClick={() => {
          // Checks if the user input is valid
          if (label === "" || value <= 0 || Number.isNaN(value)) {
            alert(
              "Datos invalidos. Ingrese nombre y valor del gasto."
            );
          } else {
            addCategory({
              label: "Budget",
              id: crypto.randomUUID(),
              amount: value,
            });
            // navigate to home page
            navigate("/");
            addHistoryElement({
              label: label,
              amount: value,
              id: crypto.randomUUID(),
              type: "Budget",
              dateCreated: "",
              category: "Budget",
            });
          }
        }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default AddToBudget;
