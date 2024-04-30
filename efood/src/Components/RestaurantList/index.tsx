import Product from '../Restaurant'
import * as S from './styles'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <S.ProductSection className="container">
      <S.List>
        {restaurants?.map((restaurant) => (
          <Product
            reviews={restaurant.avaliacao}
            description={restaurant.descricao}
            id={restaurant.id}
            image={restaurant.capa}
            infos={restaurant.tipo}
            name={restaurant.titulo}
            key={restaurant.id}
            featured={restaurant.destacado === true}
            isLoading={isLoading}
          />
        ))}
      </S.List>
    </S.ProductSection>
  )
}

export default RestaurantList
