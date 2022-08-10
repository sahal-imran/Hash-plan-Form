import React, { useState } from 'react'
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Button from '@mui/material/Button';

function Contact() {

  const [UIUX, Sey_UIUX] = useState(false);
  const [Web, Set_Web] = useState(false);

  const { Interested_IN, Ste_Interested_IN } = useState(null);

  return (
    <>
      <Box sx={{ width: '100%', height: { md: '100vh', xs: 'auto' },minHeight:{md:'auto',xs:"100vh"}, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow:'auto', py: { md: 0, xs: 3}, px: { md: 0, xs: 3 } }} >

        {/* Content Box */}
        <Box className={'Home-Content-Box'} sx={{ width: '100%', height: '100%', minHeight: { md: 'unset', xs: '100vh' }, display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
          <Typography sx={{ fontSize: '40px', lineHeight: '40px', fontFamily: ['sf-ui-display'], fontWeight: 700, mb: 4, display: { md: 'none', xs: 'block' } }} >Lets hatch a plane</Typography>


          {/* Left Egg section */}
          <Box sx={{ width: { sm: '50%', xs: '100px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2, mb: { md: 0, xs: 3 } }} >
            <Image src={'/svg/egg.svg'} width={400} height={427.4} objectFit='contain' />
          </Box>



          {/* Right Content Section */}
          <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column', position: 'relative', zIndex: 2 }} >
            {/* For desktop */}
            <Typography sx={{ fontSize: '40px', lineHeight: '40px', fontFamily: ['sf-ui-display'], fontWeight: 700, display: { md: 'block', xs: 'none ' }, mb: 4 }} >Lets hatch a plane</Typography>
            <Box sx={{ width: { md: '80%', xs: '100%' }, height: '56px', border: '1px solid rgba(216, 216, 216, 1)', borderRadius: '18px', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)' }} >
              <input style={{ type: 'text', width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.5)', paddingLeft: '20px' }} placeholder='your name'></input>
            </Box>
            <Box sx={{ width: { md: '80%', xs: '100%' }, height: '56px', border: '1px solid rgba(216, 216, 216, 1)', borderRadius: '18px', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', mt: { md: 2.5, xs: 2 } }} >
              <input style={{ type: 'text', width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.5)', paddingLeft: '20px' }} placeholder="Your Email" ></input>
            </Box>
            <Box sx={{ width: { md: '80%', xs: '100%' }, height: '56px', border: '1px solid rgba(216, 216, 216, 1)', borderRadius: '18px', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', mt: { md: 2.5, xs: 2 } }} >
              <input style={{ type: 'text', width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.5)', paddingLeft: '20px' }} placeholder="Details about your project" ></input>
            </Box>
            <Typography sx={{ fontFamily: ['sf-ui-display'], fontSize: '20px', lineHeight: '18px', fontWeight: 600, color: 'rgba(0, 0, 0, 1)', mt: 3, alignSelf: "start" }} >Interested in</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, width: { md: '80%', xs: '100%' }, mt: { md: 2.5, xs: 2 } }}>
              <Button onClick={() => {
                Sey_UIUX(true);
                Set_Web(false);
              }} variant="contained" sx={UIUX ? { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '40%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', borderRadius: '18px', mr: { md: 3 }, color: 'white', textTransform: 'none', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' },mr:{md:1} } : { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '40%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', mr: { md: 3 }, color: ' #000000', textTransform: 'none', boxShadow: 'none', "&:hover": { background: '#DDD9FF' },mr:{md:1} }}>UI/UX design</Button>

              <Button onClick={() => {
                Sey_UIUX(false);
                Set_Web(true);
              }} variant="contained" sx={Web ? { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '60%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', borderRadius: '18px', mr: { md: 3 }, color: ' white', textTransform: 'none', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' },ml:{md:1},mt:{md:0,xs:2} } : { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '60%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', mr: { md: 3 }, color: ' #000000', textTransform: 'none', boxShadow: 'none', "&:hover": { background: '#DDD9FF' },ml:{md:1},mt:{md:0,xs:2} }}>UI/UX design</Button>
            </Box>
            <Typography sx={{ fontSize: '20px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, color: 'rgba(0, 0, 0, 1)', mt: 4 }} >Budget</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { md: '80%', xs: '100%' }, mt: 2 }}>
              <Button variant="contained" sx={{ width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$2-4k</Button>
              <Button variant="contained" sx={{ width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$5-10k</Button>
              <Button variant="contained" sx={{ width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: { md: 2, xs: 0 } }}>$11-20k</Button>
              <Button variant="contained" sx={{ width: '20%', height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2, display: { md: 'block', xs: 'none' } }}>$21-50k</Button>
              <Button variant="contained" sx={{ width: '20%', height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, display: { md: 'block', xs: 'none' } }}>$2-4k</Button>
            </Box>
            <Button variant="contained" sx={{ width: { md: '80%', xs: '100%' }, height: '56px', whiteSpace: 'nowrap', mt: 4, fontSize: '26px', ml: 0.1, lineHeight: '40px', fontWeight: 700, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #FFFFFF', textTransform: 'none', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', } }} >Submit now</Button>
          </Box>
        </Box>




        {/* Background Gradient spots */}
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', left: '69px', top: '125px', background: '#FE72A1', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', right: '360px', top: '106px', background: '#FE72A1', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', left: '245px', top: '324px', background: '#B4D8FC', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', right: '200px', top: '324px', background: '#B4D8FC', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', left: '0px', top: '567px', background: '#FFB152', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', right: '360px', top: '540px', background: '#FFB152', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', left: '315px', bottom: '-60px', background: '#FC70E4', filter: 'blur(100px)' }} ></Box>
        <Box sx={{ width: '250px', height: '250px', position: 'absolute', right: '10px', bottom: '-60px', background: '#FC70E4', filter: 'blur(100px)' }} ></Box>
      </Box>



    </>
  );
}

export default Contact;

