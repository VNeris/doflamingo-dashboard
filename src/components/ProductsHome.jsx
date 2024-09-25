import React, { useState } from 'react';


function AddProduto() {
    let x;

    let idade = prompt("Digite sua idade:");

    if (idade != null) {
      x = "Idade: " + idade + " anos.";
      console.log(x)
    }
}

const ProductsHome = () => {

  
  const [products] = useState([
    {
      id: 1,
      name: 'Produto 1',
      price: 29.99,
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 39.99,
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 19.99,
      image: 'https://via.placeholder.com/300',
    },
  ]);
  
  const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-pink-600 font-semibold mt-2">${product.price}</p>
        </div>
      </div>
    );
  };


  return (

    
    <div className=" flex flex-col w-full shadow-md bg-white p-4">
      <h1 className="text-2xl font-bold text-black border-b-2 py-2 border-b-pink-300 mb-6">Gerenciamento de Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className='flex flex-col w-60 justify-center'>
        <button onClick={AddProduto} className="text-xl top-[350px] left-[650px] relative bg-pink-500 text-white p-2 rounded-full"> Adicionar Produto</button>
      </div>
    </div>
  );
};

export default ProductsHome;
