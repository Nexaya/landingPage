import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import ModalStyle from "@/constant/Modal/modalStyle";

function TopNav() {
  const navToggle: any = useRef(null);
  const navHambargar: any = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // toggle nav
  async function ToggleNav() {
    try {
      navHambargar.current.classList.toggle("h-active");
      navToggle.current.classList.toggle("slidenav");
      setIsOpen(!isOpen);
    } catch (err) {}
  }
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap pt-4 fixed w-full overflow-hidden pl-10 bg-[#0E1B0A]">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Image
            src={"/assets/images/nexayalogo.png"}
            alt="Nexaya Logo"
            width={150}
            height={300}
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`bg-primary-green h-10 w-15 ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`bg-primary-green h-10 w-15 ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-[80%] pl-10 block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen
              ? "block bg-[#0E1B0A] fixed z-[10000] top-[9%] left-[0%] w-[70%] ml-0 font-bold"
              : "hidden"
          }`}
        >
          <div className="text-sm pr-[10%] text-white text-center pr-[10%] lg:flex-grow bg-[#0E1B0A] font-bold">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4"
            >
              About
            </Link>
            <Link
              href="/services/all"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4"
            >
              Services
            </Link>
            <Link
              href="/team/all"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4"
            >
              Team
            </Link>
            <Link
              href="/careers/all"
              className="block mt-4 pr-[10%] lg:inline-block lg:mt-0 text-white-200 pr-4"
            >
              Career
            </Link>
          </div>
          <div className="common-btn btn-hrrd-1 text-white">
            <Button
              onClick={handleOpen}
              className="inline-flex items-center bg-primary-green border-0 py-2 px-4 text-white"
            >
              {" "}
              Contact Us
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={ModalStyle}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
