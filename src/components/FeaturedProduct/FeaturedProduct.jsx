import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          necessitatibus. Incidunt assumenda non voluptas aliquid. Praesentium
          laborum quia molestiae eaque minima voluptatibus delectus, commodi
          accusamus deserunt qui et quibusdam voluptatem.
        </p>
      </div>
      <div className='bottom'>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data && data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
