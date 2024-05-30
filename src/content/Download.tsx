import DownloadIcon from "../icons/download";
import LoadingIcon from "../icons/loading";
import { download } from "./helper";
import { useState } from "react";
import "./Download.css";

function Download() {
  const [isDownloading, setIsDownloading] = useState(false);

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

          // ✅ setIsDownloading関数を使って、ダウンロード中かどうかを管理しよう！
          // ✅ download 関数に siteID と siteName を渡して、ダウンロードできるようにしよう！
        }}
      >
        {isDownloading ? (
          // ✅ <LoadingIcon /> を使ってダウンロード中なことを示そう！
          <></>
        ) : (
          <DownloadIcon />
        )}
      </button>
    </div>
  );
}

export default Download;
