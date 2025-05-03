import React, {useState } from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PreviewAndDownload from './PreviewPage';
import { useNavigate } from 'react-router-dom';



export const ResumeForm = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        url1: "",
        url2: "",
        native: "",
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handlePreview = () => {
        navigate('/preview', { state: formData });
      };
    
    return (

        <div className="container">
            <h2 className="title">PDF GENERATOR</h2>

            <div className="input mb-3">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={formData.name}
                />
            </div>

            <div className="input mb-3">
                <label>Mobile Number</label>
                <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone"
                    onChange={handleChange}
                    value={formData.phone}
                />
            </div>

            <div className="input mb-3">
                <label>Email ID</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </div>

            <div className="input mb-3">
                <label>URL 1</label>
                <input
                    type="text"
                    name="url1"
                    className="form-control"
                    placeholder="LinkedIn, GitHub etc."
                    onChange={handleChange}
                    value={formData.url1}
                />
            </div>

            <div className="input mb-3">
                <label>URL 2</label>
                <input
                    type="text"
                    name="url2"
                    className="form-control"
                    placeholder="Portfolio, blog etc."
                    onChange={handleChange}
                    value={formData.url2}
                />
            </div>

            <div className="input mb-3">
                <label>Native</label>
                <input
                    type="text"
                    name="native"
                    className="form-control"
                    placeholder="Enter your Native place"
                    onChange={handleChange}
                    value={formData.native}
                />
            </div>
            <div className="btnn">
  <button className="btn btn-primary" onClick={handlePreview}>
    Preview
  </button>
</div>
<PreviewAndDownload formData={formData} />
        </div>
    );
};