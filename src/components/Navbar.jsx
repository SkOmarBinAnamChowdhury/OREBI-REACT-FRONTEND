import Container from "./layer/Container"
import Image from "./layer/Image"
import Li from "./layer/Li"
import logo from '/Logo.png'

const Navbar = () => {
  return (
   <nav className="bg-slate-300">


    <Container className=" py-8 flex relative justify-center">



      <Image className="absolute left-0 top-1/2 -translate-y-1/2 " href='/' src={logo} />



      <ul className="flex items-center gap-[39px]">


     <Li href='/' className='text-mainColor' liText='Home'/>
     <Li href='/shop' className='' liText='Shop'/>
     <Li href='/about' className='' liText='About'/>
     <Li href='/contacts' className='' liText='Contacts'/>
     <Li href='/journal' className='' liText='Journal'/>

    














      </ul>



















    </Container>








   </nav>
  )
}

export default Navbar