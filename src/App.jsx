
import './App.css'

import Container from './componentes/Container'
import Flex from './componentes/Flex'
import Images from './componentes/Images'
import Logo from '../src/assets/Fresh.png'
import Menu from './componentes/Menu'
import Button from './componentes/Button'
import Heading from './componentes/Heading'
import img from '../src/assets/Fresh2.png'
import sobi from '../src/assets/Group 2.png'
import imgone from '../src/assets/img1.png'
import imgtwo from '../src/assets/img2.png'
import imgthree from '../src/assets/img3.png'
import imgfour from '../src/assets/img4.png'
import imgg from '../src/assets/img5.png'
import lastImg from '../src/assets/img5.png'
import leftImg from '../src/assets/img6.png'
import rightImg from '../src/assets/img7.png'
import { FaStar } from "react-icons/fa";





function App() {


  return (
    <>
      {/* Header Part Start */}

      <div className="bg-hdBg py-5">

        <Container>
          <Flex>
            <div className="w-[15%] mt-2">
              <Images imgSrc={Logo} />
            </div>
            <div className="w-[60%] mt-4">
              <Flex className={"justify-center gap-x-6"}>
                <Menu menuName={'Men'} />
                <Menu menuName={"Woman"} />
                <Menu menuName={"Kids"} />
                <Menu menuName={"Collection"} />
                <Menu menuName={"Trends"} />
              </Flex>
            </div>
            <div className="w-[25%]">
              <Flex>
                <Button btnName={'Login'} className={'py-[15px] px-[30px] drop-shadow-xl mr-4 hover:bg-hbColor hover:rounded-xl border border-bdrColor'} />
                <Button btnName={'Signup'} className={'py-[15px] px-[30px] drop-shadow-xl hover:bg-hbColor hover:rounded-xl border border-bdrColor'} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>

      {/* Header Part End */}

      {/* Slider Part Start */}
      <div className="bg-hdBg py-[110px] px-[120px]">

        <Container>
          <Flex>
            <div className="w-1/2">
              <Heading as={'h1'} text={"Find The Best Fashion Style For You"} className={"font-pop font-samibold text-[64px] pr-[183px]"} />
              <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} className={" mt-[35px]font-pop font-regular text-[22px] pr-[186px]"} />

              <Button btnName={'SHOP NOW'} className={'py-[20px] px-[70px] mt-[60px] drop-shadow-xl bg-black text-white rounded-xl '} />

            </div>
            <div className="w-1/2 relative">
              <Images imgSrc={img} className={" relative z-10"} />
              <Images imgSrc={sobi} className={"absolute right-[608px] bottom-[-22px] z-0"} />

            </div>
          </Flex>
        </Container>
      </div>

      {/* Slider Part End */}

      {/* Collection Part Start */}

      <div className={"pt-[215px] pb-[30px]"}>
        <Container>
          <Heading as={'h1'} text={"New Collection"} className={" font-Frank font-bold text-[64px] text-center mb-[90px]"} />
          <Flex className={"justify-between"}>

            <div className="w-[350px] relative rounded-xl ">
              <Images imgSrc={imgone} />
              <Button btnName={'Sweater'} className={'absolute -translate-x-1/2 left-1/2 bottom-7 py-3 px-20 rounded-xl drop-shadow-xl bg-white '} />
            </div>

            <div className="w-[350px] relative rounded-xl ">
              <Images imgSrc={imgtwo} />
              <Button btnName={'Jeans'} className={'absolute -translate-x-1/2 left-1/2 bottom-7 py-3 px-20 rounded-xl drop-shadow-xl bg-white '} />
            </div>
            <div className="w-[350px] relative rounded-xl ">
              <Images imgSrc={imgthree} className={"h-[402px] "} />
              <Button btnName={'Baskets'} className={'absolute -translate-x-1/2 left-1/2 bottom-7 py-3 px-20 rounded-xl drop-shadow-xl bg-white '} />
            </div>

          </Flex>
        </Container>
      </div>

      {/* Collection Part End */}

      {/* Counter Part Start */}

      <div className="pt-[170px] pb-[125px] relative">
        <Container>
          <Flex>
            <div className="w-1/2 relative">
              <Images imgSrc={imgfour} className={"absolute z-10"} />
              <Images imgSrc={imgg} className={"absolute -top-14 -right-[94px]"} />
            </div>
            <div className="w-1/2  mt-16 relative" >
              <Heading as={'h3'} text={"Best Fashion Since 2010"} className={"font-Frank font-bold text-[64px] pr-[24px] pl-24"} />

              <Heading as={'h4'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} className={" font-pop font-samibold text-[24px] pr-[117px] pl-24"} />
              <div className="w-[793px] mt-48 bg-hdBg py-16 px-3 rounded-xl text-center -z-10 relative -left-20">
                <Flex className={"justify-between"}>

                  <div className="w-1/3 border-r-2 border-black">
                    <Heading as={'h3'} text={"2010"} className={"font-pod font-bold text-[64px] "} />
                    <Heading as={'h4'} text={"Founded"} className={"font-pop  text-[28px]"} />
                  </div>

                  <div className="w-1/3 border-r-2 border-black">
                    <Heading as={'h3'} text={"5000+"} className={"font-pod font-bold text-[64px] "} />
                    <Heading as={'h4'} text={"Product Sold"} className={"font-pop font-Medium text-[28px]"} />
                  </div>

                  <div className="w-1/3">
                    <Heading as={'h3'} text={"4500+"} className={"font-pod font-bold text-[64px]"} />
                    <Heading as={'h4'} text={"Best Reviews"} className={"font-pop font-Medium text-[28px]"} />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>

      {/* Counter Part End */}

      {/* Product Part Start */}

      <div className="pt-9 pb-[95px] bg-sellColor ">

        <Container>
          <Flex className={"justify-between"}>
            <div className="w-1/3 relative z-20">
              <Heading as={'h1'} text={"Best Seller Product"} className={"font-Frank font-bold text-[64px] text-white "} />
              <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus. "} className={"font-Frank font-bold text-[24px] mt-2 text-white "} />

              <Button btnName={'Learn MORE'} className={'py-[20px] px-[70px] mt-[60px]  drop-shadow-xl bg-black text-white rounded-xl '} />
              <Images imgSrc={lastImg} className={"absolute -top-[142px] left-[91px]"} />

            </div>
            <div className="w-1/3 pl-8">
              <Images imgSrc={leftImg} />
              <div className="w-[366px] py-4 bg-white pl-4">

                <div className=" text-starColor ">
                  <Flex>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </Flex>
                </div>
                <Heading as={'h4'} text={"Sweater Shirt"} className={"font-pop font-samiBold text-2xl py-3"} />
                <Flex>
                <Heading as={'h4'} text={"$45.99"} className={"font-pop text-textColor text-2xl py-2"} />
                <Heading as={'h4'} text={"$35.99"} className={"font-pop ml-8 text-2xl py-2"} />
                </Flex>                                            

              </div>
            </div>
            <div className="w-1/3">
              <Images imgSrc={rightImg} />
              <div className="w-[366px] py-4 bg-white pl-4">

<div className=" text-starColor ">
  <Flex>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
  </Flex>
</div>
<Heading as={'h4'} text={"Sweater Shirt"} className={"font-pop font-samiBold text-2xl py-3"} />
<Flex>
<Heading as={'h4'} text={"$45.99"} className={"font-pop text-textColor text-2xl py-2"} />
<Heading as={'h4'} text={"$35.99"} className={"font-pop ml-8 text-2xl py-2"} />
</Flex>                                            

</div>
            </div>
          </Flex>
        </Container>

      </div>


      {/* Product Part End */}



















































    </>
  )
}

export default App




