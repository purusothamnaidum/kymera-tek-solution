import React, { useState, useEffect } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery, useTheme, Modal, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import ContactForm from '../ContactForms/CoursesContactForm';

// Define the blink animation first
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const actions = [
  { icon: <WhatsAppIcon sx={{ color: '#25D366', fontSize: 50 }} />, name: 'WhatsApp', url: 'https://wa.me/7386777671' },
  { icon: <MailIcon sx={{ color: '#D44638', fontSize: 50, animation: `${blink} 1s infinite` }} />, name: 'Contact Form' },
];

export default function SpeedDialComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleActionClick = (action) => {
    if (action.url) {
      window.open(action.url, '_blank');
    } else if (action.name === 'Contact Form') {
      setModalOpen(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  useEffect(() => {
    // Keep SpeedDial open initially
    setOpen(true);
  }, []);

  return (
    <>
      <SpeedDial
        ariaLabel="Navigation Speed Dial"
        sx={{
          position: 'fixed',
          bottom: isMobile ? 16 : 34,
          right: isMobile ? 16 : 24,
          zIndex: 1500,
          '& .MuiFab-primary': {
            backgroundColor: '#683fbe', // Apply color to SpeedDial button
            color: '#FFFFFF', // Icon color inside SpeedDial button
          },
        }}
        icon={<SpeedDialIcon />}
        open={open}
        onClick={() => setOpen(!open)}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action)}
            sx={{
              backgroundColor: 'transparent', // Remove background color
              boxShadow: 'none', // Remove box shadow
              '&:hover': {
                backgroundColor: 'transparent',
              },
              '.MuiSpeedDialAction-fab': {
                backgroundColor: 'transparent', // Ensure the Fab component also has no background
                boxShadow: 'none', // Ensure the Fab component has no box shadow
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              },
            }}
          />
        ))}
      </SpeedDial>

      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "80%" : "45%",
            bgcolor: "white",
            boxShadow: 24,
            p: 1,
            borderRadius: ".75rem",
          }}
        >
          <ContactForm onSubmit={handleFormSubmit} />
        </Box>
      </Modal>
    </>
  );
}
