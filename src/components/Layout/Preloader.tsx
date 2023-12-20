import Image from "next/image";
import SPLASHHEADER from "@/constant/SplashScreen/SplashScreen";

const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <Image src={SPLASHHEADER.CenterImage} alt="" width="160" height="90" />
      </div>
    </>
  );
};
export default Preloader;
