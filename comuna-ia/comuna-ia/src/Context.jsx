import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


const GastosContext = createContext();


const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  console.log(ingresos);
  const [nombre, setNombre] = useState('');

  
  const [monto, setMonto] = useState('');

  const [categoria, setCategoria] = useState('');

  return (
    <GastosContext.Provider value={{ 
        ingresos, 
        setIngresos,
        gastos, 
        setGastos,
        nombre,
        setNombre,
        monto,
        setMonto,
        categoria,
        setCategoria
        }}>
      {children}
    </GastosContext.Provider>
  );
};

GastosProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export { GastosContext, GastosProvider };