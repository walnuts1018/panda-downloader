import JSZip from "jszip";

type Collection = {
  "author": string;
  "authorId": string;
  "container": string;
  "description": string;
  "endDate": string;
  "fromDate": string;
  "modifiedDate": string;
  "numChildren": number;
  "quota": string;
  "size": number;
  "title": string;
  "type": string;
  "url": string;
  "usage": string;
  "webLinkUrl": string;
  "hidden": boolean;
  "visible": boolean;
  "entityReference": string;
  "entityURL": string;
  "entityTitle": string;
}

type Response = {
  "entityPrefix": string;
  "content_collection": Collection[];
}


export async function download(siteID: string, siteName: string) {
  console.log("Downloading", siteID, siteName);
  const json = await fetch(
    `https://panda.ecs.kyoto-u.ac.jp/direct/content/site/${siteID}.json`
  ).then((res) => res.json());

  const response = json as Response;

  const urls = response.content_collection.map((content) => content.url);
  if (urls.length === 0) {
    console.error("No files found");
    return;
  }
  const zip = new JSZip().folder(restrictFileName(siteName));
  if (!zip) {
    console.error("Failed to create a folder", siteName);
    return;
  }

  for (const url of urls) {
    const filepath = decodeURI(url).match(/group\/.+?\/(.+)/)?.[1];
    if (!filepath) {
      console.error("Invalid URL", url);
      continue;
    }
    const filename = filepath?.split("/")?.pop();
    if (!filename) {
      console.error("Invalid URL", url);
      continue;
    }

    const nestedFolders = filepath.split("/").slice(0, -1);
    let currentFolder = zip
    if (nestedFolders) {
      for (const nestedFolder of nestedFolders) {
        const newFolder = currentFolder.folder(restrictFileName(nestedFolder));
        if (!newFolder) {
          console.error("Failed to create a folder", nestedFolder);
          break;
        }
        currentFolder = newFolder;
      }
    }

    try {
      const res = await fetch(url);
      const blob = await res.blob();
      if (!currentFolder) {
        console.error("Failed to create a folder", siteName);
        break;
      }
      currentFolder.file(restrictFileName(filename), blob);
    } catch (e) {
      console.error(e);
    }

  }

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = restrictFileName(siteName) + ".zip";
  a.click();
  URL.revokeObjectURL(url);
}

function restrictFileName(name: string) {
  const decoded = decodeURI(name);
  return decoded.replace(/[\\/:*?"<>|]/g, c => '%' + c.charCodeAt(0).toString(16));
}
