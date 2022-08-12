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
  autoplaySpeed: 3000,
  arrows: false
};

function Home() {
  return (
    <>
      <Box className={'Home-Content-Box'} sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
        {/* Slider */}
        <Box sx={{ width: { md: '400px', xs: '100%' }, mb: 6 }} >
          <Slider style={{ width: '100%', height: '100%' }} {...settings}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
              <Typography variant='h1' sx={{ fontFamily: 'sf-ui-display', fontSize: { md: '50px', xs: '40px' }, lineHeight: '40px', fontWeight: '700', color: '#000000', mb: 2, textAlign: 'center' }} >
                Giving ideas life
              </Typography>
              <Box className={'EggBox'} sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px', height: '436.46px' }} >
                <Box id='egg' >
                  <Image src={'/svg/egg.svg'} width={100} height={100} objectFit='contain' />
                </Box>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
              <Typography variant='h1' sx={{ fontFamily: 'sf-ui-display', fontSize: { md: '50px', xs: '40px' }, lineHeight: '40px', fontWeight: '700', color: '#000000', mb: 2, textAlign: 'center' }} >
                Giving ideas life
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <Image src={'/svg/icon_1.png'} priority width={400} height={436} objectFit='contain' />
              </Box>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
              <Typography variant='h1' sx={{ fontFamily: 'sf-ui-display', fontSize: { md: '50px', xs: '40px' }, lineHeight: '40px', fontWeight: '700', color: '#000000', mb: 2, textAlign: 'center' }} >
                Giving ideas life
              </Typography>
              <Box sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <Image src={'/svg/icon_2.png'} priority width={400} height={436} objectFit='contain' />
              </Box>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
              <Typography variant='h1' sx={{ fontFamily: 'sf-ui-display', fontSize: { md: '50px', xs: '40px' }, lineHeight: '40px', fontWeight: '700', color: '#000000', mb: 2, textAlign: 'center' }} >
                Giving ideas life
              </Typography>
              <Box sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <Image src={'/svg/icon_3_purple.png'} priority width={360} height={436} objectFit='contain' />
              </Box>
            </Box>
          </Slider>
        </Box>
        <Link href={'/contact'} >
          <AnchorLink sx={{ textDecoration: 'none' }} >
            <Button variant="contained" sx={{ width: '314px', height: { md: '100px', xs: '80px' }, whiteSpace: 'nowrap', mt: 4, fontSize: '40px', lineHeight: '40px', fontWeight: 700, fontFamily: ['sf-ui-display'], background: '#DDD9FF', borderRadius: '36px', color: ' #FFFFFF', textTransform: 'none', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', } }} >HATCH</Button>
          </AnchorLink>
        </Link>
      </Box>

    </>
  )
}

export default Home