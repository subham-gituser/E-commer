import React, { useEffect, useState } from 'react' 

const Network = () =>{
    const [online,setOnline]=useState(window.navigator.online)
useEffect(() => {
setOnline(window.navigator.onLine)
    
},[window.navigator.online])

return online;

}


export default Network