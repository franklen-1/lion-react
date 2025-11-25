// import { Button } from "@/components/ui/button";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mocks";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
// import ProductsGrid from "@/shop/components/ProductsGrid";


export const HomePage = () => {
  return (
    <>
     <CustomJumbotron title="Todos los productos" />

      <ProductsGrid products={products} />

     <CustomPagination totalPages={4}/>
    </>
  )
};
