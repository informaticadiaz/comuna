import { useContext, useEffect } from 'react';
import { GastosContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/Layout';
export default function ListaIngresos() {
  const { ingresos } = useContext(GastosContext);
  useEffect(() => {
    console.log(ingresos);
  }, [ingresos]);

    console.log(ingresos)
  return (
    <Layout>
    <div>
      <li>
      <ul><Link to="/">App</Link></ul>
      <ul><Link to="/nuevo-ingreso">Nuevo Ingreso</Link></ul>
      <ul><Link to="/lista-ingreso">Lista Ingreos</Link></ul>
    </li>
      <h2>Lista de Registros de Ingresos</h2>
      {ingresos.length === 0 ? (
        <p>No hay registros de Ingresos.</p>
      ) : (
        <ul>
          {ingresos.map((ingreso) => (
            <li key={ingreso.id}>
              <h3>{ingreso.nombre}</h3>
              <p>Monto: {ingreso.monto}</p>
              <p>Categoría: {ingreso.categoria}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </Layout>
  );
}