import React from 'react';
import './ProductReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductReview = (props) => {

    const deleteProduct = props.deleteSelectedItem;
    const {img,name,price,shipping,id} = props.product;
    
    return (
        <div style={{width:"50vw"}} className='border-2 h-24  border-solid border-red-500 p-1 mb-4 rounded-md flex justify-between items-center'>
          
            <div className='flex mr-10 gap-2 content-center h-20'>
              <img className='h-full rounded-lg' src={img} alt="" />
               <div className='font-bold'>
                  <h6 className='text-sm'>{name}</h6>
                  <p>Price : <span className="text-orange-500">${price}</span> </p>
                  <p>Shipping Charge : <span className="text-orange-500">${shipping}</span></p>
               </div>
            </div>
             <button onClick={()=>deleteProduct(id)} className='mr-3 pt-1 h-14 w-14  rounded-full bg-red-100'>
               <FontAwesomeIcon className='text-2xl text-red-600' icon={faTrashAlt} />
             </button>
        </div>
    );
};

export default ProductReview;