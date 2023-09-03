import React from 'react'

export default function LogIn() {
    const [name, setName] = React.useState("")

    async function login() {
        const res = await fetch('https://fakestoreapi.com/users')

        const data = await (res.json())
        console.log(data); 
        
        const valid = (name) => {
            name === data.username

        }
        if (valid){
            alert()
        }
    }
  return (
    <div>
        <input value={name} onChange={(e) => (setName(e.target.value)}></input>
        <button onClick={login}>login</button>
    </div>
  )
}
