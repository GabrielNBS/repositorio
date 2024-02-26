import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTypeQuery } from '../../services/api'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import Plates from '../../Components/Plates'

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data: selectedRestaurant, isLoading } = useGetTypeQuery(id!)

  if (!id) {
    return <div>ID do restaurante não fornecido</div>
  }

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!selectedRestaurant) {
    return <div>Restaurante não encontrado</div>
  }

  const { titulo, tipo, capa, cardapio } = selectedRestaurant

  const plates: MenuItem[] = cardapio || []

  const restaurantType = tipo.length > 1 ? tipo[1] : tipo[0]

  return (
    <>
      <Header restaurantStyle />
      <Banner local={restaurantType} name={titulo} photo={capa} />
      <Plates cardapio={plates} />
    </>
  )
}

export default Restaurant
