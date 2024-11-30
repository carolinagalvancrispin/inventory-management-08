'use client'
import { useCreateProductMutation, useGetProductsQuery } from "@/state/api";
import { Header } from "@/app/components/header";
import { Rating } from "@/app/components/Rating"; 
import { useState } from "react";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { CreateproductModal } from "./CreateproductModal";

type ProductFormData = {
  name : string;
  price: number;
  stockQuantity: number;
  rating:number;
};


const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModelOpen]= useState(false);


return (
  <div className="mx-auto pb-5 w-full">
      <div className="mb-6">
          <div className="flex items-center border-2 border-gray-200 rounded-full">
              <SearchIcon className="w-5 h-5 text-gray-500 m-2"/>
              <input type="text" 
              className="w-full py-2 px-4 rounded bg-white"
              placeholder="Buscar Producto..."
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}/>
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between">

      </div>
  </div>
)
}
  
  export default page;
