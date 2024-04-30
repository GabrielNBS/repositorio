export const formatPrice = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

export const getTotalPrice = (items: (Restaurant | MenuItem | null)[]) => {
  return items
    .filter((item): item is MenuItem => item !== null && 'preco' in item)
    .reduce((accumulator, currentValue) => {
      return accumulator + (currentValue?.preco ?? 0)
    }, 0)
}
