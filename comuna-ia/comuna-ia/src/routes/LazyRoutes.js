import React from 'react'
import Home from '../components/Home/Home'

export { Home }

export const FormGastos = React.lazy(() => import('../components/Gastos/FormGastos'))
export const ListaGastos = React.lazy(() => import('../components/Gastos/ListaGastos'))
