import { MiniXButton, MiniGithubButton } from "../Navigation/NaviButton";

const Footer = () => (
  <div className="flex justify-center items-center w-full py-4 text-center text-xs bg-slate-700 border-t mt-10">
    <div className="mr-5">
        © {new Date().getFullYear()} wkago. All rights reserved.
        <div className="flex justify-center mt-2 space-x-3">
            <MiniXButton />
            <MiniGithubButton />
        </div>
    </div>
  </div>
);

export default Footer;