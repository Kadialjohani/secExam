import React from 'react'
import axios from 'axios'
import Nav from '../component/Nav'
import { TECollapse, TERipple } from "tw-elements-react";


type type = {
    id: string,
    title:string,
    description: string,
    image: string,
    price:string,
}


export default function Home() {
    const [readProd, setReadProd] = React.useState<type[]>([])
    const [search, setSearch] = React.useState("")
    const [toCart, setToCart] = React.useState([])
    const [category, setCategory] = React.useState("men's clothing")


    // get
    React.useEffect(() => {
        axios
        .get('https://fakestoreapi.com/products')
        .then((res) => setReadProd(res.data)
        )
    })

    // get search
    const getresult = () => {
        axios
        .get('https://fakestoreapi.com/products')
        .then((res) => {
            const flitered = res.data.filter((item: { title: string | string[]; }) => item.title.includes(search))
            setReadProd(flitered)   
        }
        )
    }
    // const men = () => {
    //     axios
    //     .get('https://fakestoreapi.com/products')
    //     .then((res) => {
    //         const flitered = res.data.filter((item: { title: string | string[] }) => item.category === "men's clothing")
    //         setReadProd(flitered)   }
        
    //     )
    // }
    // send to cart
    const cart = (id:string) => {
        axios
        .post('https://fakestoreapi.com/carts/', {
            userId:"5",
            date:"2020-02-03",
            products:[{productId:{id},quantity:1}]
        })
        .then((res) => setToCart(res.data)
        )
        console.log(toCart);
        
    }

  return (
    <div>
        <Nav></Nav>
        {/* search nav */}
        <div className='flex justify-center'>
        <div className="m-3 w-1/3 ">
        <div className="flex justify-center">
    <input
      type="search"
      className=" w-[1px]  flex-auto rounded-l-xl border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      value={search}
      onChange={(e) => (setSearch(e.target.value))}
      aria-label="Search"
      aria-describedby="button-addon1" />

    {/* <!--Search button--> */}
    <button
      className="relative z-[2] flex items-center rounded-r-xl bg-warning px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
        onClick={getresult}
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  </div>
</div>
{/* cat buttons */}

      <div
        className="rounded-md flex flex-row justify-center m-3 transition duration-150 ease-in-out"
        role="group"
      >
        <TERipple rippleColor="light">
          <button
            type="button"
    
            className="inline-block rounded-l bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
          >
            men's clothing
          </button>
        </TERipple>
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
          >
            jewelery
          </button>
        </TERipple>
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded-r bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
          >
            electronics
          </button>
        </TERipple>
      </div>

{/* show products */}
<div className=''>
    <div className='flex flex-row flex-wrap'>
    {readProd.map((item) => {
    return (
        <div key={item.id}>
            <div
  className="rounded-lg w-1/5 bg-white border-4 border-blue-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src={item.image}
      alt="" />
  </a>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {item.title}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {item.description}
    </p>
    <h6
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {item.price}
    </h6>
    <button
      type="button"
      onClick={() => cart(item.id)}
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Add to cart
    </button>
  </div>
</div>
        </div>
    )})}
    </div>
</div>
    </div>
  )
}
