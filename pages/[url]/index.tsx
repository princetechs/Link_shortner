// import React, { useEffect } from 'react'
// import { useRouter } from 'next/router';
// import { NextRequest, NextResponse, userAgent } from 'next/server'

// export default function index() {
//   const router = useRouter()
//   console.log(router.query.url);

//  useEffect(() => {
//   // window.location.href = "http://www.w3schools.com";
//   // router.replace("http://www.w3schools.com")
  
 
//  }, [])
 

//   const handleClick = (e) => {
//     e.preventDefault()

//   }
//   return (
//     <div onClick={handleClick}>index{router.query.url}</div>

//   )
// }

// index.getInitialProps = async (context) => {
//   const { res,query } =  context;
//   if (query.url=="san")
//         {res.writeHead(301, { location: "https://google.com" } );
//         res.end();}
//         else
//         return {san:"sasa"}
//       } 

  
 
