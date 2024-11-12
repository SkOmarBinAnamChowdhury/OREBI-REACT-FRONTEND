import { Link } from "react-router-dom"


const Li = ({liText , className, href}) => {
  return (


        <li className={`font-DM transition-all duration-300 font-bold text-sm text-[#767676] hover:text-mainColor ${className}`}>

          <Link to={href}>{liText}</Link>
        </li>








      
   
  )
}

export default Li