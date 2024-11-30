'use client';

import { useEffect, useState } from 'react';

const page = () => {
  const [orders, setOrders] = useState<any[]>([]);

  // Cargar pedidos desde localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  // Eliminar un pedido específico
  const handleRemoveOrder = (indexToRemove: number) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Tus Pedidos</h1>
      {orders.length === 0 ? (
        <div className="text-center py-10">No hay pedidos registrados.</div>
      ) : (
        <div className="mt-6">
          {orders.map((order, index) => (
            <div 
              key={`${order.productId}-${index}`} 
              className="p-4 border-b flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{order.name}</h3>
                <p>${order.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => handleRemoveOrder(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
