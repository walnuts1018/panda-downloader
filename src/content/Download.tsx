import DownloadIcon from "../icons/download";
import { download } from "./helper";
import "./Download.css";

function Download() {
  return (
    <div className="download flex justify-center items-center">
      <button
        title="Download"
        className="flex justify-center items-center h-full"
        type="button"
        onClick={async (e) => {
          const anchorElement =
            e.currentTarget.parentElement?.parentElement?.parentElement?.getElementsByClassName(
              "link-container"
            )[0] as HTMLAnchorElement;

          const siteName = anchorElement.innerText;
          const siteID = anchorElement.href.match(/site-reset\/(.+)/)?.[1];
          if (!siteID) {
            return;
          }
          await download(siteID, siteName);
        }}
      >
        <DownloadIcon className="h-full w-full object-contain text-black" />
      </button>
    </div>
  );
}

export default Download;
