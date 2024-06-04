import { useState, useEffect, useContext } from 'react';
import { Stack, TextField } from '@mui/material';
import { GastosContext } from '../../Context';
import { Link } from 'react-router-dom';

const FormIngresos = () => {
  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('')
  const { ingresos, setIngresos } = useContext(GastosContext);

  useEffect(() => {
    console.log(ingresos);
  }, [ingresos]);

  {/*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del nuevo ingreso al servidor o al contexto de la aplicación
    console.log('Concepto:', concepto, 'Monto:', monto, 'Categoría:', categoria);
    // Limpia los campos después de enviar el formulario
    setConcepto('');
    setMonto('');
    setCategoria('');
  };
  */}

  {/*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea el objeto de nuevo ingreso
    const nuevoIngreso = { concepto, monto, categoria };
    // Envía el nuevo ingreso al contexto
    addIngreso(nuevoIngreso);
    console.log('Concepto:', concepto, 'Monto:', monto, 'Categoría:', categoria);
    // Limpia los campos después de enviar el formulario
    setConcepto('');
    setMonto('');
    setCategoria('');
  };
*/}
  const addIngreso = (nuevoIngreso) => {
    setIngresos([...ingresos, nuevoIngreso]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea el objeto de nuevo ingreso
    const nuevoIngreso = { concepto, monto, categoria };
    // Envía el nuevo ingreso al contexto
    addIngreso(nuevoIngreso);
    console.log('Concepto:', concepto, 'Monto:', monto, 'Categoría:', categoria);
    // Limpia los campos después de enviar el formulario
    setConcepto('');
    setMonto('');
    setCategoria('');
  };


  return (
    <>
    <li>
      <ul><Link to="/">App</Link></ul>
      <ul><Link to="/nuevo-ingreso">Nuevo Ingreso</Link></ul>
      <ul><Link to="/lista-ingreso">Lista Ingreos</Link></ul>
    </li>
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField label="Concepto del Ingreso:" type="text" value={concepto} onChange={(e) => setConcepto(e.target.value)} />
        <TextField label="Monto del Ingreso:" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
        <TextField label="Categoría del Ingreso:" type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      <button type="submit">Agregar Ingreso</button>
      </Stack>
    </form>
    </>
  );
};

export default FormIngresos;