import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";
import HistoryContext from "../store/HistoryContext";
import CategoriesContext from "../store/CategoriesContext"

const SetBudget = () => {
  const { addHistoryElement } = useContext(HistoryContext);
  const { addCategory, getTotalAmount } = useContext(CategoriesContext);

  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={20}
        size="md"
        w="40%"
        placeholder=""
        label="Enter your budget"
        withAsterisk
      />
      <Button
        mt={20}
        onClick={() => {
          // checks that the user inputted valid values
          if (value <= 0 || Number.isNaN(value)) {
            alert("Datos Invalidos. Ingrese el mes y el valor del gasto.");
          } else {
            const budget = getTotalAmount("Ingresos");
            addCategory({
              label: "Ingresos",
              id: crypto.randomUUID(),
              amount: -1*budget,
            });
            addCategory({
              label: "Ingresos",
              id: crypto.randomUUID(),
              amount: value,
            });
            // navigates back to home page
            navigate("/");
            addHistoryElement({
              label: "Budget has been set to $" + value,
              id: crypto.randomUUID(),
              amount: value,
              type: "Ingresos",
              dateCreated: "", // dateCreated passes an empty string here as the actual date creation is handled in the addHisotyrElement function
              category: "Ingresos",
            });
          }
        }}
      >
        Set Budget
      </Button>
    </div>
  );
};

export default SetBudget;
