import './grocery.css'
import c from './data'
import ReactStars from 'react-stars'
import GroceryItems from './data'

function GroceryApp() {
  // TODO => add filters
  // Add Search

  //  title
  // type
  // description
  // fileName for image
  // price
  // ratrings=>  show stars based on number of ratings

  function renderGroceries() {
    return GroceryItems.slice(0, 10).map(function (item) {
      return (
        <li className="col-md-6">
          <div className="text-center">
            <div className="image-wrapper">
              <img
                className="img-responsive"
                src={`${process.env.PUBLIC_URL}/assets/${item.filename}`}
                alt="pizza"
              />
            </div>
            <h3>{item.title} </h3>
            <p>{item.description} </p>
            <h4 className="discountLabel">Price:: {item.price} RS</h4>
            <button className="btn redBtn">ADD TO CART</button>
            <div className="d-flex justify-content-center">
              <ReactStars
                count={item.rating}
                size={24}
                color1={'#ffd700'}
                color2={'#ffd700'}
              />
            </div>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="container pizzaAppWrapper clearfix">
      <h1 className="text-center mainHeading">Grocery Ordering APP</h1>
      <ul className="row clearfix GroceryListing">{renderGroceries()}</ul>
    </div>
  )
}

export default GroceryApp
