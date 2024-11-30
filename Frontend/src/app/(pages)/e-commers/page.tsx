'use client';
import { useGetProductsQuery } from "@/state/api"; 
import { ShoppingCart, User } from "lucide-react";
import { Rating } from "@/app/components/Rating"; 
import Link from "next/link";

const page = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery("");

  if (isLoading) {
    return <div className="text-center py-10">Cargando productos...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center py-10 text-red-500">
        Error al cargar los productos.
      </div>
    );
  }

  // Obtener solo el primer producto
  const product = products[0];

  // Función para agregar el producto al carrito
  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Producto agregado al carrito.");
  };

  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 px-10 gap-4">
  <div className="flex gap-10 items-center col-span-1 sm:col-span-2 lg:col-span-1">
    <h1 className="font-bold text-4xl">Jolt</h1>
    <ul className="flex w-full justify-between text-gray-400 font-semibold text-xl">
      <Link href="/e-commers" className="hover:text-black">Categoría</Link>
      <Link href="/collections" className="hover:text-black">Colecciones</Link>
      <Link href="/store" className="hover:text-black">Tienda</Link>
      <Link href="/blog" className="hover:text-black">Blog</Link>
      <Link href="/findStore" className="hover:text-black">Encontrar Tienda</Link>
    </ul>
  </div>

  <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex w-full gap-5 justify-end items-center">
    <div>
      <input type="search" className="w-36 border py-1 rounded-lg" />
    </div>
    <div className="flex gap-2 items-center">
      <ShoppingCart />
      <Link href="/carrito" className="hover:text-black">Carrito 0</Link>
    </div>
    <div className="flex gap-2 items-center">
      <User />
      <Link href="/products">
        <button>Login</button>
      </Link>
    </div>
  </div>
      </div>

      {/* Detalles del primer producto */}
      {product && (
        <div className="grid grid-cols-2 gap-5">
            <div className="grid grid-cols-1 grid-rows-2 gap-5">
                <div className="col-start-1 row-start-1 row-end-2 flex justify-center items-center">
                    <img src="https://images.pexels.com/photos/7543639/pexels-photo-7543639.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                </div>

                <div className="row-start-2 row-end-3 grid grid-cols-3 gap-5">
                    <div className="col-start-1 col-end-2 w-52">
                        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=3000" alt="" />
                    </div>
                    <div className="col-start-2 col-end-3 w-52">
                        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                    </div>
                    <div className="col-start-3 col-end-4 w-52">
                        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                    </div>
                </div>
            </div>        
            
                <div key={product.productId} className="p-4 flex flex-col">
                <p className="text-sm text-gray-400 ">Nike/Running shoes</p> 
  
                  <div className="text-6xl">
                    {product.name}
                  </div>
                  <div className="text-gray-800 mb-2 pt-8 font-semibold flex text-5xl gap-3">
                   
                    ${product.price.toFixed(2)}
                   
                  </div>
                  <div className="pt-3 pb-2 flex items-center text-2xl font-semibold gap-3">
                    {product.rating && (
                      <div className="flex gap-5">
                        <Rating rating={product.rating} />
                      </div>
                    )}
                    <p>4.9 1,2K Reseñas</p>
                  </div>
                  <div className="text-gray-600 mb-2">
                    <p className="text-3xl py-3 font-semibold">Descripción</p>
                    {product.descriptions || "No disponible"}
                  </div>

                  <div className="space-y-6">
                        <h2 className="text-3xl py-3 font-semibold">Size Chart</h2>
                         <div className="flex items-center space-x-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-400 text-white">
                              US
                        </button>
                         <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-500">
                             EU
                        </button>
                         <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-500">
                        CM
                       </button>
                       </div>
                       <div className="grid grid-cols-6 gap-4 mt-4 bg-gray-300 text-white">
                             {/* Botones de tallas */}
                           {['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5'].map((size) => (
                                 <button
                            key={size}
                               className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold hover:bg-gray-300"
                                       >
                                  {size}
                               </button>
                                   ))}
                      </div>
                   </div>
                   <div className="space-y-4">
                       <h2 className="text-3xl py-3 font-semibold">Item Quantity</h2>
                      <div className="flex items-center space-x-4">
                       <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300">
                             -
                       </button>
                       <span className="text-lg font-bold">1</span>
                       <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300">
                         +
                       </button>
                       </div>
                   </div>

                 <div className="space-y-4">
                  <p className="text-2xl font-bold">IDR 1,400,000</p>
                 <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eaque omnis voluptas quasi at asperiores nihil consectetur mollitia consequuntur, voluptatem dolorum exercitationem vitae nobis pariatur facilis aspernatur, ipsum dignissimos tenetur?</p>
                 <div className="flex space-x-4">
                <button className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg font-semibold text-black hover:bg-gray-200">
                     Buy Now
                </button>
                <button onClick={() => handleAddToCart(product)} className="flex-1 py-3 bg-gray-300 border border-gray-300 bg-gray-200 rounded-lg font-semibold text-black hover:bg-gray-200">
                    Add to Cart
               </button>
                </div>
                </div>

              <div className="space-y-6">
                  <button className="w-full text-left text-lg font-bold border-b border-gray-200 py-4">
                      Reviews
                  <span className="float-right">+</span>
                 </button>
                </div>
                <div className="space-y-6">
                 <button className="w-full text-left text-lg font-bold border-b border-gray-200 py-4">
                   Shipping Method
                  <span className="float-right">+</span>
                  </button>
             </div>
                  
               </div>
        </div>
      )}

      {/* Mostrar otros productos */}
      <h2 className="text-3xl py-3 font-semibold">You May Also Like</h2>
      <div className="grid grid-cols-5 gap-4 mt-10">
      
        {products.slice(1).map((product: any) => (
          <div key={product.productId} className="border p-4 rounded-lg shadow-md">
            <div className="text-xl font-semibold">{product.name}</div>
            <div className="text-lg text-gray-700">${product.price.toFixed(2)}</div>
            <div className="w-32 h-32 mx-auto my-4">
        <img 
          src={`https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=3000`} 
          className="w-full h-full object-cover"
        />
      </div>
            <button 
            
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
