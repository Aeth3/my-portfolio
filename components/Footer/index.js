import React from "react";
import Socials from "../Socials";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <div className="flex flex-col-reverse gap-y-5 tablet:flex-row tablet:justify-around">
              <div>
                <div className="flex justify-around tablet:flex-col tablet:justify-start">
                  <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                    LET&apos;S WORK
                  </h1>
                  <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                    TOGETHER
                  </h1>
                </div>
                <div className="flex justify-center tablet:flex-row tablet:justify-start mt-2">
                  <Button
                    type="primary"
                    classes="px-6 py-2 text-lg"
                    onClick={() =>
                      window.open("mailto:amajunriel.damalan@gmail.com")
                    }
                  >
                    Schedule a call
                  </Button>
                </div>

                <div className="mt-5 flex justify-center tablet:flex-row tablet:justify-start">
                  <Socials />
                </div>
              </div>
              <img
                src="/images/work-together.jpg"
                alt="working together"
                className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 mob:h-auto desktop:h-[17rem] laptopl:h-[22rem] tablet:h-64 laptop:h-[17rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-5 laptop:mt-10 p-2 laptop:p-0 flex justify-center">
        Made With ❤ by AJ Damalan
      </h1>
    </>
  );
};

export default Footer;
