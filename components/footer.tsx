import siteData from "@/blog.config";
import SocialList from "@/components/social-list";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const {
    author,
    footer: { isShow, isShowPoweredBy },
  } = siteData;

  return (
    isShow && (
      <div>
        <Separator />
        <footer className={"container py-4"}>
          <div
            className={
              "w-full flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0"
            }
          >
            <div className={"md:hidden block"}>
              <SocialList isFooter={true} />
            </div>
            <div>{`© ${new Date().getFullYear()} ${author}`}</div>
            <div className={"md:block hidden"}>
              <SocialList isFooter={true} />
            </div>
          </div>
        </footer>
      </div>
    )
  );
};

export default Footer;
