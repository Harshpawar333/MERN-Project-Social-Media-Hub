import './grocery.css'

function MapUse() {
  const test = [10, 20, 30, 40]

  const testPerson = [
    { name: 'vishal', age: 26 },
    { name: 'satish', age: 23 },
    { name: 'Harsh', age: 20 },
  ]

  function renderNumber() {
    return test.map(function (number) {
      return <p>{number}</p>
    })
  }
  function renderString() {
    return testPerson.map(function (data) {
      return (
        <div>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </div>
      )
    })
  }

  return (
    <div className="container pizzaAppWrapper clearfix">
      <h1 className="text-center mainHeading">Grocery Ordering APP</h1>
      <ul>{renderString()}</ul>
      <ul>{renderNumber()}</ul>
    </div>
  )
}

export default MapUse
