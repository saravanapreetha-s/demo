import logo from "../../assets/images/logo.svg";
import bgLogo from "../../assets/images/bg_logo.png";
import bottomLine from "../../assets/images/bottom_line.svg";
import type { ReactNode } from "react";

interface LetterPadProps {
  children?: ReactNode;
}

const LetterPad = ({ children }: LetterPadProps) => {
  return (
    <div className="h-full w-full bg-(--color-primary) pt-[17px]">
      <div className="flex w-full justify-between">
        <img src={logo} alt="logo" className="" />
        <div className="text-end mt-5 pr-8">
          <p className="text-(--color-primary-text) text-xs">
            Business address
          </p>
          <p className="text-(--color-primary-text) text-xs">
            City, State, IN - 000 000
          </p>
          <p className="text-(--color-primary-text) text-xs">
            TAX ID 00XXXXX1234X0XX
          </p>
        </div>
      </div>
      <div className="relative w-full h-full py-4">
      <img src={bgLogo} alt="bg logo" 
      className="absolute top-1/2 left-1/2 opacity-50 w-[203px] h-[203px] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex-1 px-4">{children}</div>

      </div>
      <div className="flex justify-between px-8">
        <div>
          <p className="text-(--color-primary-text) text-xs mb-1">
            Terms & Conditions
          </p>
          <p className="text-(--color-secondary-text) text-xs">
            Please pay within 15 days of receiving this invoice.
          </p>
        </div>
        <div className="text-end">
          <p className="text-(--color-primary-text) text-xs">www.dtzenix.com</p>
          <p className="text-(--color-primary-text) text-xs">
            dtzenix@email.com
          </p>
          <p className="text-(--color-primary-text) text-xs">+91 00000 00000</p>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <img
          src={bottomLine}
          alt="bottom line"
          className="w-fit self-end mt-3"
        />
      </div>
    </div>
  );
};

export default LetterPad;
