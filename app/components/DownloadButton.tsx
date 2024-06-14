'use client';

const DownloadButton = () => {
  const handleDownload = () => {
    window.open('/CV-PT-BR-AnaliaSilva.pdf');
  };

  return (
    <button className="btn btn-primary" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
