import { useReactToPrint } from "react-to-print";

const PrintPdf = (element, title) => {
  const generatePDF = useReactToPrint({
    content: () => element.current,
    documentTitle: title,
    onAfterPrint: () => alert("تم الطباعة بنجاح"),
  });
  return generatePDF;
};

const getBlobFromUrl = (myImageUrl) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", myImageUrl, true);
    request.responseType = "blob";
    request.onload = () => {
      resolve(request.response);
    };
    request.onerror = reject;
    request.send();
  });
};

const getDataFromBlob = (myBlob) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(myBlob);
  });
};

const convertUrlToImageData = async (myImageUrl, filename) => {
  try {
    let myBlob = await getBlobFromUrl(myImageUrl);
    console.log(myBlob);
    let myImageData = await getDataFromBlob(myBlob);
    console.log(myImageData);
    let arr = myImageData.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: "image/png" });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getTenetFromPath = (path) => {
  const segments = path.split("/");
  console.log(segments);
  if (segments.length >= 2) {
    return segments[1];
  }
  return null;
};
export { PrintPdf, convertUrlToImageData };
