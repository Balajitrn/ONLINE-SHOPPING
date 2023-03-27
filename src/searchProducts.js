const searchProducts = (productsData, searchTerm) => {
  if (!searchTerm) {
    return productsData;
  }

  const searchTermLowerCase = searchTerm.toLowerCase();

  const searchResults = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTermLowerCase) ||
      product.description.toLowerCase().includes(searchTermLowerCase)
    );

  return searchResults;
};

export default searchProducts;