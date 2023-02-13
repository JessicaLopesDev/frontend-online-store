export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(url);
  const categories = await request.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(QUERY, CATEGORY_ID) {
  let request;
  if (QUERY) {
    request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  } else {
    request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
  }
  const products = await request.json();
  return products;
}

export async function getProductDetails(PRODUCT_ID) {
  const request = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const product = await request.json();
  return product;
}
