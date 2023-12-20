import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

const BreadCrumb = (props: {
  greenText:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  customStyles: any;
  pagename:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  headline:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <>
      <div className={`breadcrumb-area positioning ${props.customStyles}`}>
        <div className="grid grid-cols-6 gap-2">
          {/* <div className="text-white col-start-1 col-span-6 md:col-start-1 md:col-span-3 lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-3 pl-6"></div> */}
          <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-3 lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-3 pl-6 md:pl-10 md:pt-15 lg:pl-[20%] lg:pt-[25%] xl:pl-15 xl:pt-[20%]">
            <p>
              <Link href="/">
                <span className="text-sm md:text-xl text-[#FFFFFF] font-bold">
                  Home
                </span>
              </Link>{" "}
              <span className="text-sm md:text-xl text-[#33971F] breadcrumb-nav-direction">
                {">"}
              </span>{" "}
              <span className="text-sm md:text-xl breadcrumb-nav-direction">
                {props.pagename}
              </span>
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              {props.title}{" "}
              <span className="text-[#33971F]">{props.greenText}</span>
            </h1>
            <p className="text-white text-sm md:text-xl lg:text-xl">
              {props.headline}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BreadCrumb;
