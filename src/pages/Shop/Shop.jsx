import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {
    const id = 1;
  return (
    <div>Shop\

        <Link to={`/shop/${id}`}>p_1</Link>
    </div>
  )
}
