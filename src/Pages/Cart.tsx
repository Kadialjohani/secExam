import React from 'react'
import axios from 'axios'

export default function Cart() {
    const [readCart, setReadCart] = React.useState([])

    // get
    React.useEffect(() => {
        axios
        .get('https://fakestoreapi.com/carts/')
        .then((res) => console.log
        (res.data)
        )
    })
  return (
    <div>
        <div className='border-2 border-red-500 flex flex-row'>
            {/* {readCart.map((item) => {
                return (
                    // <div key={item.id}>
                    //     {item.products}
                    // </div>
                )
            })} */}
        </div>
    </div>
  )
}
