import { createContext, useState, useEffect } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const [productToShow, setProductToShow] = useState({});

  const [cardProducts, setCardProducts] = useState({});

  const [order, setOrder] = useState([]);

  const [items, setItems] = useState(null);

  const [filteredItems, setFilteredItems] = useState(null);

  const [searchByTitle, setSearchByTitle] = useState(null);

  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch(' https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().incluse(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().incluse(searchByCategory.toLowerCase()))
  }

  const filteBy = (searchType, items, searchByTitle, searchByCategory)=> {
    if(searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if(searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if(searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(items => title.toLowerCase(),incluse(searchByTitle.toLowerCase()))
    }

    if(!searchType) {
      return items
    }
  }

  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filteBy('BY_CATEGORY-AND-CATEGORY', items, searchByTitle, searchByCategory));
    if(searchByTitle && !searchByCategory) setFilteredItems(filteBy('BY_TITLE', items, searchByTitle, searchByCategory));
    if(searchByTitle && searchByCategory) setFilteredItems(filteBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
    if(searchByTitle && !searchByCategory) setFilteredItems(filteBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory])


  return (
    <ShoppingCardContext.Provider
    value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cardProducts,
      setCardProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      { children }
    </ShoppingCardContext.Provider>
  );
};
