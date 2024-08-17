import React from 'react';

interface ProcessedFile {
  filename: string;
  content: string;
}

interface FileUploadProps {
  onFilesChange: (files: ProcessedFile[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesChange }) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray: ProcessedFile[] = await Promise.all(
        Array.from(files).map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()).toString('base64'),
        }))
      );
      onFilesChange(filesArray);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className=' border-2 text-sm lg:text-base rounded-md text-center hover:shadow-md hover:shadow-gray-400 cursor-pointer hover:scale-105 transition-all duration-500'
      />
    </div>
  );
};

export default FileUpload;
