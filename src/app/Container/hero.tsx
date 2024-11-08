import React from "react";
export default function Hero() {
  return (
    <>
      {/* hero */}
      <div className="w-[1046px] h-[1028px] top-[104px] left-[197px] pt-[80px] pb[80px] gap-[80px] m-auto text-[#FFFFFF] ">
        <div className="w-[701px] h-[496px] m-auto">
          <div className="w-[699px] h-[496px] pt-10 pb-10 gap-10 text-center  ">
            <h5 className="w-[77px] h-[24x] font-bold text-[#23A6F0] m-auto">
              Welcome
            </h5>
            <h1 className=" w-[524px]  h-[160px] m-auto font-bold text-6xl leading-[4rem] mt-8 ">
              Selling on the <br /> internet like a pro
            </h1>
            <p className="w-[536px] h-[60px] text-center m-auto text-xl leading-[1.8rem] mt-8  ">
              We know how large objects will act, but things on a <br />
              small scale just do not act that way.
            </p>
            <div className="w-[365px] h-[52px] gap-[5px] m-auto flex justify-center mt-8">
              <div className="w-[193px] h-[52px] rounded-[5px]  py-[15px] px-10  bg-[#23A6F0]">
                <button className="w-[113px] h-[22px] text-center font-bold text-sm">
                  Get Quote Now
                </button>
              </div>
              <div className="w-[162px] h-[52px] rounded-[5px]  py-[10px] px-10 border-[3px] border-[#23A6F0]">
                <button className="w-[82px] h-[22px] font-bold  text-[#23A6F0]  text-sm text-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* card  */}

        <div className="w-[1046px] h-[292px] gap-[20px] flex  m-auto  ">
          <div className="w-[328px] h-[292px] py-[35px] px-10  bg-[#FFFFFF] ">
            <div className="w-[70px] h-[76px] rounded-[10px]  py-[22px] px-[19px] bg-[#FFDCD1]"></div>
            <h5 className="w-[135px] h-[24px] font-bold text-[#252B42] tracking-[0.01em] text-left mt-5 ">
              training Courses
            </h5>
            <hr className="w-[50px] h-2px border-2 border-[#E74040] mt-4" />
            <p className="w-[222px] h-[60px] text-[#737373] mt-4">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[329px] h-[292px] py-[35px] px-10  bg-[#FFFFFF]">
            <div className="w-[70px] h-[76px] rounded-[10px]  py-[22px] px-[19px] bg-[#B9EAA8]"></div>
            <h5 className="w-[168px] h-[24px] font-bold text-[#252B42] tracking-[0.01em] text-left mt-5 ">
              2,769 online courses
            </h5>
            <hr className="w-[50px] h-2px border-2 border-[#E74040] mt-4" />
            <p className="w-[222px] h-[60px] text-[#737373] mt-4">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[329px] h-[292px] py-[35px] px-10   bg-[#23A6F0]">
            <div className="w-[70px] h-[76px] rounded-[10px]  py-[22px] px-[19px] bg-[#FFFFFF]"></div>
            <h5 className="w-[168px] h-[24px] font-bold text-[#FFFFFF] tracking-[0.01em] text-left mt-5 ">
              2,769 online courses
            </h5>
            <hr className="w-[50px] h-2px border-2 border-[#FFFFFF] mt-4" />
            <p className="w-[222px] h-[60px] text-[#FFFFFF] mt-4">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
