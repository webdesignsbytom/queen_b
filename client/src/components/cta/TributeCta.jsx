import React from 'react';

function TributeCta() {

  const loadAmazonWishList = () => {
    window.open('https://www.amazon.com/hz/wishlist/intro', '_blank');
  }

  const loadPayPal = () => {
    window.open('https://www.paypal.com', '_blank');
  }

  const loadCoinBase = () => {
    window.open('https://www.coinbase.com', '_blank');
  }
  
  return (
    <section className='grid gap-2 h-fit'>
      <div className='grid justify-center'>
        <button onClick={loadAmazonWishList} className='amazon_button w-[300px] h-[80px] rounded-sm shadow-2xl hover:brightness-110 hover:shadow-lg hover:shadow-purple-600'>
          <span className='text-xl font-semibold'>Amazon Wishlist</span>
        </button>
      </div>
      <div className='grid justify-center'>
        <button onClick={loadPayPal} className='paypal_button w-[300px] h-[80px] rounded-sm shadow-2xl hover:brightness-110 hover:shadow-lg hover:shadow-purple-600'>
          <span className='text-xl font-semibold'>PayPal</span>
        </button>
      </div>
      <div className='grid justify-center'>
        <button onClick={loadCoinBase} className='coinbase_button w-[300px] h-[80px] rounded-sm shadow-2xl hover:brightness-110 hover:shadow-lg hover:shadow-purple-600'>
          <span className='text-xl font-semibold'>CoinBase</span>
        </button>
      </div>
    </section>
  );
}

export default TributeCta;
