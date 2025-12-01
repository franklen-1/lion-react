import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreamLoading } from "@/components/custom/CustomFullScreamLoading";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { currencyFormater } from "@/lib/currency-formatter";
import { products } from "@/mocks/products.mocks";
import { useProducts } from "@/shop/hooks/useProducts";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";



export const AdminProductsPage = () => {

  const {data, isLoading} = useProducts();

  if (isLoading) {
    return <CustomFullScreamLoading/>
  }

  return (
      <>


          <div className="flex justify-between items-center">

            <AdminTitle 
              title="Productos"
              subtitle="Aqui puedes ver y administrar tus productos"
            />

          <div className="flex justify-end mb-10 gap-4">
            <Link to="/admin/products/new">
              <Button>
                <PlusIcon/>
                  Nuevo Producto
              </Button>
            </Link>
          </div>

          </div>


          <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Imagen</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Inventario</TableHead>
                <TableHead>Tallas</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

              {data!.products.map((product) => (
                <TableRow>
                  <TableCell>
                    <img src={ product.images[0]} 
                    alt={product.title} 
                    className="w-20 h-20 object-cover rounded-md" 
                    />
                  </TableCell>
                  <TableCell>

                    <Link to={`/admin/products/${product.id}`}>
                       {product.title}
                    </Link>

                  </TableCell>
                  <TableCell>{currencyFormater(product.price)}</TableCell>
                  <TableCell>{product.gender}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.sizes.join(', ')}</TableCell>
                  <TableCell className="text-right">
                    <Link 
                    to={`/admin/products/${product.id}`}
                    className="hover:text-blue-500 underline"
                    >
                      <PencilIcon
                        className="w-4 h-4 text-blue-500"
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))};        


            </TableBody>
          </Table>

          <CustomPagination totalPages={data?.pages || 0}/>
      </>
  )
}
