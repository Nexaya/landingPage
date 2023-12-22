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
              className={`bg-primary-green h-8 w-10 ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`bg-primary-green h-8 w-10 ${
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
              ? "bg-[#0E1B0A] fixed z-[10000] top-[8%] left-[0%] w-[50%] h-full ml-0 font-bold overflow-hidden text-center"
              : "hidden"
          }`}
        >
          <div className="text-sm pr-[10%] text-white text-center pr-[10%] lg:flex-grow bg-[#0E1B0A] font-bold">
            <Link
              href="/"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4 transition duration-300 ease-in-out ${
                isOpen
                  ? "bg-[#0E1B0A] z-[10000] top-[9%] left-[0%] w-[80%] h-[16.67%] ml-0 font-bold overflow-hidden text-center w-50"
                  : "hidden"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4
              ${
                isOpen
                  ? "bg-[#0E1B0A] z-[10000] left-[0%] w-[80%] h-[16.67%] ml-0 font-xtrabold overflow-hidden text-center w-50"
                  : "hidden"
              }
              `}
            >
              About
            </Link>
            <Link
              href="/services/all"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4 
              ${
                isOpen
                  ? "bg-[#0E1B0A] z-[10000] left-[0%] w-[80%] h-[16.67%] ml-0 font-bold overflow-hidden text-center w-50"
                  : "hidden"
              }
              `}
            >
              Services
            </Link>
            <Link
              href="/team/all"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 pr-4
              ${
                isOpen
                  ? "bg-[#0E1B0A] z-[10000] left-[0%] w-[80%] h-[16.67%] ml-0 font-bold"
                  : "hidden"
              }
              `}
            >
              Team
            </Link>
            <Link
              href="/careers/all"
              className={`block mt-4 pr-[10%] lg:inline-block lg:mt-0 text-white-200 pr-0
              ${
                isOpen
                  ? "bg-[#0E1B0A] z-[10000] left-[0%] w-[80%] h-[16.67%] ml-0 font-bold overflow-hidden"
                  : "hidden"
              }
              `}
            >
              Career
            </Link>
          </div>
          <div className={`mr-[6%] text-white
              ${
                isOpen
                  ? "bg-[#0E1B0A] z-[10000] border-top left-[0%] w-[80%] h-[16.67%] mt-[15%] ml-0 font-bold"
                  : "hidden"
              }
          `}>
            <Button
              onClick={handleOpen}
              className="inline-flex bg-[#33971F] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
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
                  <div className="w-full max-w-lg mx-auto px-4 rounded-lg shadow-md">
                    <form className="bg-white px-6 py-8">
                      <div className="flex justify-between p-2">
                        <div className="text-3xl text-[#3B6B2C] w-[10%]">
                          <p className="font-semibold text-gray-900">
                            <Image
                              src={"/assets/images/contactFormIcon.png"}
                              alt={"Nexaya Contact Us Icon"}
                              width={40}
                              height={20}
                            />
                          </p>
                        </div>
                        <div className="w-[90%]">
                          <h2 className="text-3xl text-[#3B6B2C] font-semibold text-gray-900">
                            Contact Cairo Office
                          </h2>
                        </div>
                      </div>
                      <div className="flex justify-between p-5">
                        <div className="text-sm">
                          <p>Address</p>
                          <p>
                            <span></span>
                            Elmaadi, cairo, egypt
                          </p>
                        </div>
                        <div className="text-sm">
                          <p>Call us</p>
                          <p>
                            <span></span>
                            (123) 456 - 789
                          </p>
                        </div>
                        <div className="text-sm">
                          <p>Email</p>
                          <p>
                            <span></span>
                            contact@nexaya.com
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <input
                          className="appearance-none bg-[#F7F7F7] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="appearance-none bg-[#F7F7F7] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="subject"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>

                      <div className="mb-4">
                        <textarea
                          className="appearance-none bg-[#F7F7F7] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="message"
                          rows={6}
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          className="bg-[#EDEDED] hover:bg-blue-700 text-white font-bold py-2 px-10 mr-2 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-[#3B6B2C] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
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
