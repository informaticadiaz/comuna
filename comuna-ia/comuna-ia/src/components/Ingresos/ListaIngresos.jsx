import { useContext, useEffect } from 'react';
import { GastosContext } from '../../Context';
import DataIngresos from './DataIngresos';
import Layout from '../../Layout/Layout';

export default function ListaIngresos() {
  const { ingresos } = useContext(GastosContext);
  useEffect(() => {
    console.log(ingresos);
  }, [ingresos]);

    console.log(ingresos)
  return (
    <>
      <h2>Ingresos</h2>
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
      <DataIngresos />
      <Layout />
      </>
  );
}