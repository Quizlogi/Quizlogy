import { NavbarDefault } from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Faq from '../components/landing/Faq';
import ProductUse from '../components/landing/ProductUse';
import { LogoFooter } from '../components/landing/LogoFooter';

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