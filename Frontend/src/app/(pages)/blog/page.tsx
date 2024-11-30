import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const page = () => {
    return (
        <>
            <script src="https://cdn.tailwindcss.com"></script>
        <div className="py-3 w-full bg-black text-white text-center">
        <p>New Season Coming! Discount 10% for all product! Check out now!</p>
        </div>
        <div className="p-4 w-full grid grid-cols-2 px-10">
            <div className="flex gap-20 items-center col-start-1 col-end-2">
            <h1 className="font-bold text-4xl">
                Jolt
            </h1>
            <ul className="flex w-full justify-between text-gray-400 font-semibold text-xl">
                <Link href="/e-commers" className="hover:text-black">
                    Category
                </Link>
                <Link href="/collections" className="hover:text-black">
                    Collections
                </Link>
                <Link href="/store" className="hover:text-black">
                    Store
                </Link>
                <Link href="/blog" className="hover:text-black">
                    Blog
                </Link>
                <Link href="/findStore" className="hover:text-black">
                    Find Store
                </Link>
            </ul>
            </div>

            <div className="col-start-2 col-end-3 flex w-full gap-5 justify-end items-center">
                <div>
                <input type="search" className="w-36 border py-1 rounded-lg"/>
                </div>
                <div className="flex gap-2 items-center">
                    <ShoppingCart/>
                    <p>Chart 0</p>
                </div>
                <div className="flex gap-2 items-center">
                <User/>
                <Link href="/products">
                    <button>
                    Login
                    </button>
                </Link>
                </div>
            </div>
        </div>
        <div className="text-9xl flex w-full justify-center items-center">
            <h1 >Blog</h1>     
        </div>
        </>
      
    );
  };
  
  export default page;