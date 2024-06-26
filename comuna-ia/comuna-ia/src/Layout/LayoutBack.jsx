import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Link } from'react-router-dom';
export default function LayoutBack() {
    const [value, setValue] = React.useState(0);
    
  return (
    
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/back" label="Home" icon={<AddShoppingCartIcon />} />
        <BottomNavigationAction component={Link} to="/ingreso-atlas" label="Ingresos" icon={<AddShoppingCartIcon />} />
        <BottomNavigationAction component={Link} to="/gasto-atlas" label="Gastos" icon={<AttachMoneyIcon />} />
      </BottomNavigation>
    </Box>
)
}
