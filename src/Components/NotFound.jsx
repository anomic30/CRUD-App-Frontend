import React from 'react'
import notFound from '../Assets/Images/404.png'

const NotFound = () => {
    return (
        <img src={notFound} alt="404 Error" style={{width:'100%',height:'92.7vh', margin:'auto', objectFit: "contain" ,backgroundSize:'cover', backgroundColor:"#f5f5f5"}} />
    )
}

export default NotFound;