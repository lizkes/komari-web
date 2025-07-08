import ThemeSwitch from "./ThemeSwitch";
import ColorSwitch from "./ColorSwitch";
import LanguageSwitch from "./Language";
import LoginDialog from "./Login";
import { IconButton } from "@radix-ui/themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { usePublicInfo } from "@/contexts/PublicInfoContext";
const NavBar = () => {
  const {publicInfo} = usePublicInfo();
  return (
    <nav className="flex rounded-b-lg items-center gap-3 max-h-16 justify-end min-w-full p-2">
      <div className="mr-auto flex">
        {/* <img src="/assets/logo.png" alt="Komari Logo" className="w-10 object-cover mr-2 self-center"/> */}
        <Link to="/">
          <label className="text-3xl font-bold ">{publicInfo?.sitename}</label>
        </Link>
      </div>

      <IconButton
        variant="soft"
        onClick={() => {
          window.open("https://github.com/lizkes/komari", "_blank");
        }}
      >
        <GitHubLogoIcon />
      </IconButton>

      <ThemeSwitch />
      <ColorSwitch />
      <LanguageSwitch />
      <LoginDialog />
    </nav>
  );
};
export default NavBar;
