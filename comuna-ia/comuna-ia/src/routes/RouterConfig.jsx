import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import FormGastos from '../components/Gastos/FormGastos'
import ListaGastos from '../components/Gastos/ListaGastos'
import FormIngresos from "../components/Ingresos/FormIngresos";
import ListaIngresos from "../components/Ingresos/ListaIngresos";
import Caja from "../components/Caja/Caja";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nuevo-gasto",
    element: <FormGastos />,
  },
  {
    path: "/lista-gastos",
    element: <ListaGastos />,
  },
  {
    path: "/nuevo-ingreso",
    element: <FormIngresos />,
  },
  {
    path: "/lista-ingresos",
    element: <ListaIngresos />,
  },
  {
    path: "/caja",
    element: <Caja />,
  }
]);

export default router