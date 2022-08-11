import React from 'react'
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Button from "@mui/material/Button";
import Link from 'next/link';
import AnchorLink from "@mui/material/Link"


const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows: false
};

function Home() {
  return (
    <>
      <Box sx={{ width: '100%', height: { md: '100vh', xs: 'auto' }, minHeight: { md: 'auto', xs: "100vh" }, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', py: { md: 0, xs: 6 } }} >

        {/* Content Box */}
        <Box className={'Home-Content-Box'} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative' }} >
          <Typography variant='h1' sx={{ fontFamily: 'sf-ui-display', fontSize: { md: '50px', xs: '40px' }, lineHeight: '40px', fontWeight: '700', color: '#000000', position: 'relative', zIndex: 2 }} >
            Giving ideas life
          </Typography>
          {/* Slider */}
          <Box sx={{ width:{md:'260px',xs:'220px'}, height:{md:'394.46px',xs:'320px'}, position: 'relative', zIndex: 2, my: 6 }} >
            <Slider style={{ width: '100%', height: '100%' }} {...settings}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }} >
                <Image src={'/svg/carousal.svg'} width={260} height={394.46} objectFit='contain' />
              </Box>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }} >
                <Image src={'/svg/carousal.svg'} width={260} height={394.46} objectFit='contain' />
              </Box>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }} >
                <Image src={'/svg/carousal.svg'} width={260} height={394.46} objectFit='contain' />
              </Box>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }} >
                <Image src={'/svg/carousal.svg'} width={260} height={394.46} objectFit='contain' />
              </Box>
            </Slider>
          </Box>
          <Link href={'/contact'} >
            <AnchorLink sx={{ textDecoration: 'none' }} >
              <Button variant="contained" sx={{ width: '314px', height:{md:'100px',xs:'80px'}, whiteSpace: 'nowrap', mt: 4, fontSize: '40px', lineHeight: '40px', fontWeight: 700, fontFamily: ['sf-ui-display'], background: '#DDD9FF', borderRadius: '36px', color: ' #FFFFFF', textTransform: 'none', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', }, zIndex: 2 }} >HATCH</Button>
            </AnchorLink>
          </Link>
        </Box>

        {/* Background Gradient spots */}
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', left: { md: '69px', xs: '-26px' }, top: { md: '100px', xs: '0px' }, background: '#FE72A1', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', right:{md:'400px',xs:'-120px'}, top: {md:'90px',xs:'-125px'}, background: { md: '#FE72A1', xs: 'white' }, filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', left: '400px', top: '324px', background: '#B4D8FC', filter: 'blur(100px)',display: { md: 'block', xs: 'none' } }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', right:{md:'120px',xs:'-30px'}, top: {md:'324px',xs:'200px'}, background: '#B4D8FC', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', left:{md: '0px',xs:'-95px'}, top:{md:'520px',xs:'440px'}, background: '#FFB152', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', right: '480px', top: '500px', background: '#FFB152', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', left: '440px', bottom: '-60px', background: '#FC70E4', filter: 'blur(100px)', display: { md: 'block', xs: 'none' } }} ></Box>
        <Box sx={{ width: { md: '220px', xs: '250px' }, height: { md: '220px', xs: '250px' }, position: 'absolute', right:{md:'60px',xs:'-80px'}, bottom:{md:'-30px',xs:'0px'}, background: '#FC70E4', filter: 'blur(100px)' }} ></Box>
      </Box>

    </>
  )
}

export default Home