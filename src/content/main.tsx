import React from "react";
import ReactDOM from "react-dom/client";
import Download from "./Download";

const addDownloadButton = function (element: Element) {
  if (element.getElementsByClassName("download-root").length > 0) {
    return;
  }

  if (element.classList.contains("Mrphs-sitesNav__menuitem--myworkspace")) {
    return;
  }

  const root = document.createElement("div");
  root.className = "download-root h-full";

  const titleElement = element.getElementsByClassName("link-container")[0];
  if (titleElement) {
    titleElement.after(root);
  }
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Download />
    </React.StrictMode>
  );
};

function createDownloadButton() {
  const classNavigationParent = document.getElementById("topnav");
  if (classNavigationParent) {
    Array.from(classNavigationParent.children).forEach((element) => {
      addDownloadButton(element);
    });

    // Comfortable PandAが追加でサイトを登録したときにもボタンを追加する
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            addDownloadButton(node);
          }
        });
      });
    });
    observer.observe(classNavigationParent, {
      childList: true,
    });
  }
}

createDownloadButton();
