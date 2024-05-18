import { NavbarDefault } from '../components/Navbar';
import Hero from '../components/Hero';
import Faq from '../components/Faq';
import ProductUse from '../components/ProductUse';
import { LogoFooter } from '../components/LogoFooter';

export default function Homepage() {
  return (
    <div className='bg-[#ECEFF1]'>
      <NavbarDefault />
      <Hero />
      <Faq />
      <ProductUse />
      <LogoFooter />
    </div>
  )
}