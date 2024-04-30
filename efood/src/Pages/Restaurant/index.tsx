import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTypeQuery } from '../../services/api'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import Plates from '../../Components/Plates'
import Loader from '../../Components/Loader'

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data: selectedRestaurant, isLoading } = useGetTypeQuery(id!)

  if (!id) {
    return <div>ID do restaurante não fornecido</div>
  }

  if (isLoading) {
    return <Loader />
  }

  if (!selectedRestaurant) {
    return <div>Restaurante não encontrado</div>
  }

  const {
    titulo: title,
    tipo: type,
    capa: banner,
    cardapio: menu,
  } = selectedRestaurant

  const plates: MenuItem[] = menu || []

  return (
    <>
      <Header restaurantStyle />
      <Banner local={type} name={title} photo={banner} />
      <Plates menu={plates} />
    </>
  )
}

export default Restaurant
