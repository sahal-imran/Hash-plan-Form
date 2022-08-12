import React, { useState } from 'react'
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {

  const [UIUX, Sey_UIUX] = useState(false);
  const [Web, Set_Web] = useState(true);
  const notify = () => toast.success('Submission Successfully');

  const TRueUIUX = (val) => {
    Sey_UIUX(true);
    Set_Web(false);
  }
  const TRueWeb = () => {
    Sey_UIUX(false);
    Set_Web(true);
  }

  const [One, Set_One] = useState(false);
  const [Two, Set_Two] = useState(false);
  const [Three, Set_Three] = useState(false);
  const [Four, Set_Four] = useState(false);
  const [Five, Set_Five] = useState(false);

  const BudgetBTNClick = (_this) => {
    Set_One(false);
    Set_Two(false);
    Set_Three(false);
    Set_Four(false);
    Set_Five(false);
    switch (_this) {
      case 'one':
        Set_One(true);
        break;
      case 'two':
        Set_Two(true);
        break;
      case 'three':
        Set_Three(true);
        break;
      case 'four':
        Set_Four(true);
        break;
      case 'five':
        Set_Five(true);
        break;
      default:
        break;
    }
  }

  return (
    <>
      {/* Content Box */}
      <Box id={'Contact-Content-Box'} sx={{ width: '100%', height: { md: '100vh' }, minHeight: { md: 'unset', xs: '100vh' }, display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center', background: 'transparent', px: { md: 0, xs: 3 }, py: { md: 0, xs: 2 } }} >
        <Typography sx={{ fontSize: '40px', lineHeight: '40px', fontFamily: ['sf-ui-display'], fontWeight: 700, mb: 4, display: { md: 'none', xs: 'block' }, textAlign: 'center' }} >Lets hatch a plan</Typography>


        {/* Left Egg section */}
        <Box sx={{ width: { sm: '50%', xs: '100px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 0, xs: 3 } }} >
          {/* <Image src={'/svg/egg.svg'} width={400} height={427.4} objectFit='contain' /> */}
          <Box sx={{ width: { md: '400px', xs: '200px' }, height: { md: '427.7px', xs: '227' }, }} >
            <img id='egg2' src="/svg/egg.svg" alt="egg" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative' }} />
          </Box>
        </Box>



        {/* Right Content Section */}
        <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column' }} >
          {/* For desktop */}
          <Typography sx={{ fontSize: '40px', lineHeight: '40px', fontFamily: ['sf-ui-display'], fontWeight: 700, display: { md: 'block', xs: 'none ' }, mb: 4 }} >Lets hatch a plan</Typography>
          <Box sx={{ width: { md: '80%', xs: '100%' }, height: '56px', border: '1px solid rgba(216, 216, 216, 1)', borderRadius: '18px', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)' }} >
            <input style={{ type: 'text', width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.5)', padding: '0px 20px', background: 'transparent', borderRadius: '18px' }} placeholder='your name'></input>
          </Box>
          <Box sx={{ width: { md: '80%', xs: '100%' }, height: '56px', border: '1px solid rgba(216, 216, 216, 1)', borderRadius: '18px', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', mt: { md: 2.5, xs: 2 } }} >
            <input style={{ type: 'text', width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.5)', padding: '0px 20px', background: 'transparent', borderRadius: '18px' }} placeholder="Your Email" ></input>
          </Box>
          <Box sx={{ width: { md: '80%', xs: '100%' }, height: '56px', border: '1px solid rgba(216, 216, 216, 1)', borderRadius: '18px', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', mt: { md: 2.5, xs: 2 } }} >
            <input style={{ type: 'text', width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.5)', padding: '0px 20px', background: 'transparent', borderRadius: '18px' }} placeholder="Details about your project" ></input>
          </Box>
          <Typography sx={{ fontFamily: ['sf-ui-display'], fontSize: '20px', lineHeight: '18px', fontWeight: 600, color: 'rgba(0, 0, 0, 1)', mt: 3, alignSelf: "start" }} >Interested in</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, width: { md: '80%', xs: '100%' }, mt: { md: 2.5, xs: 2 }, background: 'transparent' }}>
            <Button onClick={() => TRueUIUX('UIUX')} variant="contained" sx={UIUX ? { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '40%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', borderRadius: '18px', mr: { md: 3 }, color: 'white', textTransform: 'none', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: { md: 1 } } : { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '40%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', mr: { md: 3 }, color: ' #000000', textTransform: 'none', boxShadow: 'none', "&:hover": { background: '#DDD9FF' }, mr: { md: 1 } }}>UI/UX design</Button>

            <Button onClick={() => TRueWeb('Web')} variant="contained" sx={Web ? { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '60%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', borderRadius: '18px', mr: { md: 3 }, color: ' white', textTransform: 'none', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, ml: { md: 1 }, mt: { md: 0, xs: 2 } } : { fontSize: '15px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, width: { md: '60%', xs: '100%' }, height: '50px', whiteSpace: 'nowrap', background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', mr: { md: 3 }, color: ' #000000', textTransform: 'none', boxShadow: 'none', "&:hover": { background: '#DDD9FF' }, ml: { md: 1 }, mt: { md: 0, xs: 2 } }}>UI/UX design + Web development</Button>
          </Box>
          <Typography sx={{ fontSize: '20px', lineHeight: '18px', fontFamily: ['sf-ui-display'], fontWeight: 600, color: 'rgba(0, 0, 0, 1)', mt: 4, alignSelf: 'start' }} >Budget</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { md: '80%', xs: '100%' }, mt: 2, background: 'transparent' }}>
            <Button onClick={() => BudgetBTNClick('one')} variant="contained" sx={One ? { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', overflow: 'hidden', borderRadius: '18px', color: ' white', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 } : { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$2-4k</Button>

            <Button onClick={() => BudgetBTNClick('two')} variant="contained" sx={Two ? { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', overflow: 'hidden', borderRadius: '18px', color: ' white', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 } : { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$5-10k</Button>


            <Button onClick={() => BudgetBTNClick('three')} variant="contained" sx={Three ? { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', overflow: 'hidden', borderRadius: '18px', color: ' white', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 } : { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$11-20k</Button>

            <Button onClick={() => BudgetBTNClick('four')} variant="contained" sx={Four ? { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', overflow: 'hidden', borderRadius: '18px', color: ' white', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 } : { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$21-50k</Button>

            <Button onClick={() => BudgetBTNClick('five')} variant="contained" sx={Five ? { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', overflow: 'hidden', borderRadius: '18px', color: ' white', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 } : { width: { md: '20%', xs: '33%' }, height: '50px', whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '18px', fontWeight: 600, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #000000', textTransform: 'unset', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)' }, mr: 2 }}>$2-4k</Button>
          </Box>
          <Button onClick={notify} variant="contained" sx={{ width: { md: '80%', xs: '100%' }, height: '56px', whiteSpace: 'nowrap', mt: 4, fontSize: '26px', ml: 0.1, lineHeight: '40px', fontWeight: 700, fontFamily: ['sf-ui-display'], background: '#DDD9FF', overflow: 'hidden', borderRadius: '18px', color: ' #FFFFFF', textTransform: 'none', background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', backdropFilter: 'blur(20px)', boxShadow: 'none', "&:hover": { background: 'linear-gradient(180deg, #A196FF 0%, #5E46FE 100%)', } }} >Submit now</Button>
          <Toaster />
        </Box>
      </Box>
    </>
  );
}

export default Contact;

