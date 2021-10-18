import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";
// memoizing , memorizing , remembrance for optimisations.
// React is fast by default.
// but usecallback usememo memo makes it optimised if we have big list huge amounts of data
import { memo } from "react";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // use call back does the same thing as meme but for js functions,
  // It checks if a certail function has changed props or states and re renders it
  // accordingly
  // It takes a dependency array as input to keep tract of state changes.
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // Use memo just remembers a value and it only reruns a function if its dependency list
  // has updated
  const expensiveCalc = useMemo(() => calculateMostExpensive(products), [
    products,
  ]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "0.5rem" }}>Cart : {cart}</h1>
      <h4>Most Expensive Calculation : ${expensiveCalc}</h4>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// memo checks if states or props within the component has changed or not
// IT rerenders if state or prop has changed else it wont , Thats why count doesnt
// trigger rerender or child components like big list or single product.
const BigList = memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log("Single Product");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button type="button" className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </article>
  );
};
export default Index;
