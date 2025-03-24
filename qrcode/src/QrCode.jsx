import { useState } from 'react';
import './QrCode.css';

export const QrCode = () => {
  const [img,setImg] = useState("");
  const [loading,setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [size, setSize] = useState("");
  async function generateQR() {
    setLoading(true);
    try {
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (error) {
      console.log("Error in generating QR code "+error);
    }finally{
      setLoading(false);
    }
  }

  function downloadQr(){
    fetch(img).then((Response)=>Response.blob())
    .then((blob)=>{
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrimage.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((e)=>{
      console.log("Error in download QRcode "+e);
    })
  }
  return (
    <>
      <div className="container-md">
        <h1>QR Code Generator</h1>
        {loading && <p>Please wait ...</p>}
       {img && <img src={img} className="rounded mx-auto d-block qrimg" alt="QR Code" />} 
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Data to Generate</label>
          <input type="text" value={qrData} disabled={loading} onChange={(e)=>setQrData(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="Enter the link" required />
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Enter size of QR code</label>
          <input type="text" value={size} onChange={(e)=>setSize(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Default (150)" />
        </div>

        <button type="button" onClick={generateQR} className="btn btn-primary">Generate QR Code</button>
        <button type="button" onClick={downloadQr} disabled={loading} className="btn btn-success">Download QR Code</button>
      </div>
    </>
  );
};
