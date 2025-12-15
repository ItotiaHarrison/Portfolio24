import { Download } from 'lucide-react';

const ResumeButton = () => {
  const handleDownload = () => {
    const pdfUrl = '/resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-3 bg-green-500 text-slate-900 px-8 py-4 rounded-lg hover:bg-green-400 transition-all duration-300 font-serif font-semibold shadow-lg shadow-green-500/25 hover:scale-105"
      aria-label="Download Resume"
    >
      <Download className="h-5 w-5" />
      Download Resume
    </button>
  );
};

export default ResumeButton;