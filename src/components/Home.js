import React from 'react'

function Home(props) {
  console.log("Home",props);
    return (
        <div>
           
           <div className="add-to-cart">
    <span className="cart-count"></span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGFHaxpgvaIvB0ncj9d4TSHYMpKqKFQ0ItA&usqp=CAU" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>props.addToCartHandler({price:'1000', name:'I-Phone'})  }
                    >Add To Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGFHaxpgvaIvB0ncj9d4TSHYMpKqKFQ0ItA&usqp=CAU" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span>
                    <span>
                        Price: $900.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button  onClick={()=>props.addToCartHandler({price:'900', name:'Samsung'})  }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home