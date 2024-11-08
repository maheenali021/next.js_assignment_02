import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="justify-items-center">
        <div className="w-[1322px] h-[91px] left-[59px] flex  justify-center  text-[#FFFFFF] gap-[4rem] items-center  ">
          <div className="w-[187px] h-[58px] mt-[19px] left-[136px]">
            <div className="w-[152px] h-8 top-[13px] ">
              <h3 className="font-bold leading-8 tracking-widest text-2xl ">
                BrandName
              </h3>
            </div>
          </div>
          <div className="w-[815px] h-[58px] top-4 left-[364px] flex gap-[30rem] items-center ">
            <div className="w-[275px] h-6 ">
              <div className="w-[43px] h-6 ">
                <ul className="font-bold w-[300px] flex justify-between">
                  <li>
                    <Link href=".">Home</Link>
                  </li>
                  <li>
                    <Link href=".">Product</Link>
                  </li>
                  <li>
                    <Link href=".">Pricing</Link>
                  </li>
                  <li>
                    <Link href=".">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[189px] h-[52px] top-3 left-[626px] flex gap-[21px] items-center">
              <button className="w-[41px] h-[22px] font-bold size-[14rem]">
                Login
              </button>
              <div className="w-[214px] h-[52px]">
                <button className="w-[110px] h-[52px] rounded-[5px] py-[15px] font-bold px-[25px] bg-[#23A6F0]">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
