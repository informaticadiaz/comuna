import { useContext } from 'react';
import { GastosContext } from '../../Context';
import Layout from '../../Layout/Layout';
export default function ListaGastos() {
  const { gastos } = useContext(GastosContext);

  return (
    <Layout>
      <h2>Lista de Registros de Gastos</h2>
      {gastos.length === 0 ? (
        <p>No hay registros de gastos.</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id}>
              <h3>{gasto.nombre}</h3>
              <p>Monto: {gasto.monto}</p>
              <p>Categoría: {gasto.categoria}</p>
            </li>
          ))}
        </ul>
      )}
    
    </Layout>
  );
}