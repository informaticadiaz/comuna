import { useContext } from 'react';
import { GastosContext } from '../../Context';
import { Stack, TextField,} from '@mui/material';

export default function FormGastos() {

  const {
    nombre,
    setNombre,
    monto,
    setMonto,
    categoria,
    setCategoria
  } = useContext(GastosContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del nuevo gasto al servidor o al contexto de la aplicación
    console.log('Nombre:', nombre, 'Monto:', monto, 'Categoría:', categoria);
    // Limpia los campos después de enviar el formulario
    setNombre('');
    setMonto('');
    setCategoria('');
  };
  return (
    <form onSubmit={handleSubmit} >
      <Stack spacing={2}>  
          <TextField label="Nombre del Gasto" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <TextField label="Monto del Gasto" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
          <TextField label="Categoria del Gasto" type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        <button type="submit">Agregar Gasto</button>
      </Stack>
    </form>
  );
}