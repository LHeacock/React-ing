import Greeter from "./Greeter";
import React, { useState } from "react";

let greetingList = [
    { name: "Puddles", phrase: "lil calico" },
    { name: "Bean", phrase: "graybaby" },
    { name: "Cello", phrase: "" }
]


function App() {    
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState();

    const loadPage = ()=>{
        setLoaded(loaded => !loaded);
    }

    console.log(loaded);
    if(!loaded)
    {
        return(<div><h2>Website Loading....</h2><button onClick={loadPage}>Log in</button></div>)
    }
    else
    {
    return (
        <div>
            <p>{loaded}</p>
            <input value={username} onChange={e => setUsername(e.target.value)}></input>
            {
                greetingList.map((greeting, index) => {
                    return (
                        <Greeter key={index} name={greeting.name} phrase={greeting.phrase} loading={false} ></Greeter>
                    )
                })}
            <p>{username} is now logged in</p>
        </div>
    )
}
}


export default App;


// setTimeout(() => {
//     // your code here to update loaded state
//   }, 3000);