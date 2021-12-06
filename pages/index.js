import Image from 'next/image';

import BaseLayout from '../layouts/BaseLayout';
import Navbar from '../components/Navbar';

// images
import yuniorImg from '../img/yunior.jpg';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <BaseLayout>
      <Navbar />
      <div className="span12">
         <div className="col-md-6 no-gutter text-center fill">
            <h2 className="vcenter">Yunior A. Vidal</h2>
         </div>
         <div className="col-md-6 no-gutter text-center">
            <div id="header" data-speed="2" data-type="background">
               <div id="headslide" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                     <div className="item active">
                        <Image loading="lazy" src={yuniorImg} alt="Slide" />
                     </div>
                     <div className="item">
                        <Image loading="lazy" src={img3} alt="Slide" />
                     </div>
                     <div className="item">
                        <Image loading="lazy" src={img1} alt="Slide" />
                     </div>
                     <div className="item">
                        <Image loading="lazy" src={img2} alt="Slide" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer />
    </BaseLayout>
  )
}
