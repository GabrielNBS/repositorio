import Product from '../Restaurant'
import { List, ProductSection } from './styles'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <ProductSection className="container">
      <List>
        {restaurants?.map((restaurant) => (
          <Product
            avaliacoes={restaurant.avaliacao}
            description={restaurant.descricao}
            id={restaurant.id}
            image={restaurant.capa}
            infos={restaurant.tipo}
            name={restaurant.titulo}
            key={restaurant.id}
          />
        ))}
      </List>
    </ProductSection>
  )
}

export default RestaurantList
