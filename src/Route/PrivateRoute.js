import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ( {authenticate} ) => {
    // 로그인상태가 아니면 로그인창으로 
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login"/>
}

export default PrivateRoute