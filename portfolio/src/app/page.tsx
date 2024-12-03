'use client'
import { Button } from "@mui/material";
import { Metadata } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"


// export const metadata : Metadata = {
//   title : "Portfolio",
// }

export default function Page(){

  
const pathname = usePathname();

  return (
    <div>
    <h1>Welcome.</h1>
    <h2>My name is Stanislav Atanasov. Thank you for your interes in my portfolio.</h2>
    <h3> &lt;= You can start your journey by picking any service from the menu </h3>
    </div>
)}