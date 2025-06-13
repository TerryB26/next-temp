import React, { useState } from 'react'

const Converter = () => {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('Please select a valid .docx file');
      setFile(null);
    }
  };

  const handleConvert = async () => {
    if (!file) {
      setError('Please upload a file first');
      return;
    }
  
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('/api/external/PDFConverter/', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Conversion failed');
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${file.name.replace('.docx', '')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Error converting file: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="converter-container">
      <h2>Convert DOCX to PDF</h2>
      <input
        type="file"
        accept=".docx"
        onChange={handleFileChange}
        disabled={loading}
      />
      <button
        onClick={handleConvert}
        disabled={!file || loading}
      >
        {loading ? 'Converting...' : 'Convert & Download'}
      </button>
      {error && <p className="error">{error}</p>}
      
      <style jsx>{`
        .converter-container {
          padding: 20px;
          max-width: 500px;
          margin: 0 auto;
        }
        input, button {
          display: block;
          width: 100%;
          margin: 10px 0;
        }
        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </div>  
    )
}

export default Converter