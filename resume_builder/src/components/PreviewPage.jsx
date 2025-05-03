import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResumeDocument from './ResumeDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

const PreviewPage = () => {
  const { state: formData } = useLocation();
  const navigate = useNavigate();

  if (!formData || !formData.name) {
    navigate('/');
    return null;
  }

  return (
    <div className="container">
      <h2>Resume Preview</h2>

      <div
        className="resume-preview"
        style={{
          width: '21cm',
          minHeight: '29.7cm',
          padding: '2cm',
          background: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          margin: '20px auto',
          fontFamily: 'Arial',
        }}
      >
        <h3>{formData.name}</h3>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>URL 1:</strong> {formData.url1}</p>
        <p><strong>URL 2:</strong> {formData.url2}</p>
        <p><strong>Native:</strong> {formData.native}</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <PDFDownloadLink
          document={<ResumeDocument data={formData} />}
          fileName="resume.pdf"
        >
          {({ loading }) =>
            loading ? 'Generating PDF...' : (
              <button className="btn btn-success">Download PDF</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PreviewPage;
