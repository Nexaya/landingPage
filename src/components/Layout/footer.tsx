import Link from "next/link";
import Image from "next/image";
import FooterConstant from "../../constant/FooterConstant/FooterConstant";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-8 w-full bg-dark-background px-0 m-0 bg-center p-10">
        <div className="col-start-1 col-span-8 md:col-span-2 md:col-start-1 lg:col-span-2 lg:col-start-1 pl-6 md:pl-20 lg:pl-10 xl:pl-10 2xl:pl-10">
          <h1>
            <Image
              src={FooterConstant.Logo}
              alt="Nexaya Logo"
              width={150}
              height={300}
            />
          </h1>
          <p className="text-white">{FooterConstant.subTitle}</p>
        </div>
        <div className="col-start-1 col-span-8 md:col-span-2 md:col-start-4 lg:col-span-2 lg:col-start-4 pl-6 md:pl-0 lg:pl-0 pt-5">
          <h2 className="text-lightText p-0">
            {FooterConstant.Quicklinkstext}
          </h2>
          <p className="pt-1 text-white">
            <Link href="/">{FooterConstant.Home}</Link>
          </p>
          <p className="p-0 text-white">
            <Link href="/">{FooterConstant.About}</Link>
          </p>
          <p className="p-0 text-white">
            <Link href="/">{FooterConstant.Service}</Link>
          </p>
          <p className="p-0 text-white">
            <Link href="/">{FooterConstant.Team}</Link>
          </p>
          <p className="pb-0 text-white">
            <Link href="/">{FooterConstant.Career}</Link>
          </p>
        </div>
        <div className="col-start-1 col-span-8 md:col-span-4 md:col-start-6 lg:col-span-4 lg:col-start-6 pl-6 md:pl-0 lg:pl-0">
          <Image
            className=""
            src={FooterConstant.FooterEarthImage}
            alt="Nexaya Earth Image Map"
            width={800}
            height={500}
          />
        </div>
        <div className="col-start-1 col-span-8 text-center md:text-left lg:text-left md:col-span-4 md:col-start-1 lg:col-span-4 xl:col-start-1 xl:col-span-4 pl-6 md:pl-10 lg:pl-10 xl:pl-10 2xl:pl-10">
          <p className="text-lightText p-0">
            {FooterConstant.TermsAndConditions}{" "}
            <span className="pl-4">{FooterConstant.PrivacyPoliciesText} </span>
          </p>
        </div>
        <div className="hidden lg:block col-start-2 col-span-8 md:col-start-8 md:col-span-1 lg:col-start-8 lg:col-span-1 pl-10 pt-5 md:pl-0 md:pr-10 lg:pl-0 lg:pr-10">
          <div className="flex flex-row justify-center">
            <div className="flex-none pl-1 w-10 justify-center">
              <Link href={FooterConstant.FacebookLink}>
                <Image
                  src={FooterConstant.FacebookIcon}
                  alt={"Nexaya Facebook"}
                  width={10}
                  height={8}
                />
              </Link>
            </div>

            <div className="flex-initial pl-1 w-10 justify-center">
              <Link href={FooterConstant.TwitterLink}>
                <Image
                  src={FooterConstant.TwitterIcon}
                  alt={"Nexaya Twitter"}
                  width={25}
                  height={30}
                />
              </Link>
            </div>

            <div className="flex-initial pl-1 mb-2 w-10 justify-center">
              <Link href={FooterConstant.InstagramLink}>
                <Image
                  src={FooterConstant.InstagramIcon}
                  alt={"Nexaya LinkedIn"}
                  width={20}
                  height={37}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-span-8 text-center md:text-right lg:text-right md:col-start-7 md:col-span-2 lg:col-start-7 lg:col-span-2 pl-10 pt-5 md:pl-0 md:pr-10 lg:pl-0 lg:pr-10">
          <h1 className="text-white">
            {FooterConstant.copyrightText}
          </h1>
        </div>
      </div>
    </>
    // <div className="footer-area hrrd-footer-area positioning pb-100">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
    //         <div className="footer-wrap">
    //           <div className="row justify-content-between">
    //             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
    //               <div className="single-widget">
    //                 <div className="footer-logo">
    //                   <Link href="/">
    //                     <a>
    //                       <img src={FooterConstant.Logo} alt="" />
    //                     </a>
    //                   </Link>
    //                   <p>{FooterConstant.subTitle}</p>
    //                   <div>
    //                     <Link href={FooterConstant.TermsAndConditions}>
    //                       {FooterConstant.TermsAndConditions}
    //                     </Link>
    //                     <span className="termsStyle" />
    //                     <Link href={FooterConstant.PrivacyPoliciesRoute}>
    //                       {FooterConstant.PrivacyPoliciesText}
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
    //               <div className="single-widget">
    //                 <div className="footer-title">
    //                   <h3>Quick Links</h3>
    //                 </div>
    //                 <div className="footer-link">
    //                   <ul>
    //                     <li>
    //                       <Link href="/">
    //                         <a>Home</a>
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link href="/">
    //                         <a>About</a>
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link href="/">
    //                         <a>Service</a>
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link href="/">
    //                         <a>Team</a>
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link href="/">
    //                         <a>Career</a>
    //                       </Link>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-xl-7 col-lg-6 col-md-3 col-sm-12 col-12">
    //               <div className="single-widget">
    //                 <a>
    //                   <img
    //                     className="shape collaborate-right"
    //                     src={FooterConstant.FooterEarthImage}
    //                     alt="Nexaya Locations Map"
    //                   />
    //                 </a>
    //               </div>
    //             </div>
    //             {/* <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12"> */}
    //             {/* <div className="single-widget contact-form-custom">
    //                 <div className="footer-title">
    //                   <h3>Contact</h3>
    //                 </div>
    //                 <form
    //                   id="contact-form"
    //                   action="mail.php"
    //                   method="POST"
    //                   className="contact-input"
    //                 >
    //                   <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
    //                     <input type="email" name="email" placeholder="Email" />
    //                   </div>
    //                   <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
    //                     <input
    //                       type="text"
    //                       name="subject"
    //                       placeholder="Subject"
    //                     />
    //                   </div>
    //                   <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
    //                     <textarea
    //                       name="message"
    //                       id="message"
    //                       cols="30"
    //                       rows="4"
    //                       placeholder="Write your message..."
    //                     ></textarea>
    //                   </div>
    //                   <div className="contact-btn-wrap">
    //                     <button type="submit" className="common-btn btn-hrrd-1">
    //                       Submit
    //                     </button>
    //                   </div>
    //                   <p className="form-message"></p>
    //                 </form>
    //               </div> */}
    //             {/* </div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //       {/* <div
    //         className="d-flex flex-row-reverse"
    //       >

    //           <div className="p-1">
    //             <Link href={FooterConstant.GoogleLink}>
    //               <i className="bi-google"></i>
    //             </Link>
    //           </div>
    //           <div className="p-2">
    //             <Link href={FooterConstant.LinkedinLink}>
    //               <i className="bi-linkedin"></i>
    //             </Link>
    //           </div>
    //           <div className="p-3">
    //             <Link href={FooterConstant.TwitterLink}>
    //               <i className="bi-twitter"></i>
    //             </Link>
    //           </div>
    //           <div className="p-4">
    //             <Link href={FooterConstant.InstagramLink}>
    //               <i className="bi-instagram"></i>
    //             </Link>
    //           </div>

    //       </div>
    //     */}
    //     <div className="row">
    //       <div className="d-flex justify-content-sm-end">
    //         <div className="copy-right-area">
    //           <p className="copy-text">{FooterConstant.copyrightText}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Footer;
