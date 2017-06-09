export default function priceTransform(price, currency) {
  switch (currency) {
    case 'USD':
      return (`$${price / 100}`);
    case 'EUR':
      return (`€${price}`);
    case 'RUB':
      return (`${price / 100}₽`);
    default:
      return ('');
  }
}
