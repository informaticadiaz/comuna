import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import HomeBack from "../components/Home/HomeBack";
import FormGastos from '../components/Gastos/FormGastos'
import ListaGastos from '../components/Gastos/ListaGastos'
import FormIngresos from "../components/Ingresos/FormIngresos";
import ListaIngresos from "../components/Ingresos/ListaIngresos";
import Caja from "../components/Caja/Caja";
import IngresoAtlas from "../components/Atlas/IngresoAtlas";
import GastoAtlas from "../components/Atlas/GastosAtlas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/back",
    element: <HomeBack />,
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
  },
  {
    path: "/ingreso-atlas",
    element: <IngresoAtlas />,
  },
  {
    path: "/gasto-atlas",
    element: <GastoAtlas />,
  }
]);

export default router