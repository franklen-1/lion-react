// import { Button } from "@/components/ui/button";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useProducts } from "@/shop/hooks/useProducts";

// import ProductsGrid from "@/shop/components/ProductsGrid";


export const HomePage = () => {

  const {data} = useProducts();

  return (
    <>
     <CustomJumbotron title="Todos los productos" />

      <ProductsGrid products={data?.products || [] } />

     <CustomPagination totalPages={data?.pages || 0}/>
    </>
  )
};
