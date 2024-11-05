import { Download } from 'lucide-react';

const ResumeButton = () => {
  const handleDownload = () => {
    const pdfUrl = '/resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      aria-label="Download Resume"
    >
      <Download className="h-5 w-5" />
      Download Resume
    </button>
  );
};

export default ResumeButton;