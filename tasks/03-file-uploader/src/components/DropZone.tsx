import React, { useCallback, useState } from 'react';
import type { DropZoneProps } from '../types';
import { useFileUpload } from '../hooks/useFileUpload';

export const DropZone: React.FC<DropZoneProps> = ({
  onFilesAccepted,
  maxFiles = Infinity,
  maxSize = Infinity,
  accept = []
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isDragReject, setIsDragReject] = useState(false);
  const { state, upload, cancel } = useFileUpload();

  const validateFiles = useCallback((files: FileList | File[]): File[] => {
    const valid: File[] = [];

    if (files.length > maxFiles) {
      alert("Maximum number of files - 5");
      return valid;
    }

    for (const file of files) {
      if (file.size > maxSize) {
        alert("Too big size");
        continue;
      }

      if (accept.length > 0 && !accept.includes(file.type)) {
        alert("Not valid type");
        continue;
      }

      valid.push(file);
    }

    return valid;
  }, [maxFiles, maxSize, accept]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();

    switch (e.type) {
      case "dragover":
      case "dragenter":
        setIsDragActive(true);
        break;

      case "dragleave":
        //как проверить, что курсор пересекает именно границу контейнера?
        setIsDragActive(false);
        break;

      default:
        break;
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);

    const droppedFiles = e.dataTransfer.files;
    const validatedFiles = validateFiles(Array.from(droppedFiles));

    if (validatedFiles.length > 0 && (uploadedFiles.length + validatedFiles.length <= maxFiles)) {
      setUploadedFiles(prevState => [...prevState, ...validatedFiles]);
    }
  }, [maxFiles, uploadedFiles.length, validateFiles]);

  const handleUpload = () => {
    uploadedFiles.forEach(upload);
    onFilesAccepted(uploadedFiles);
  };

  const handleDeleteFile = (name: string) => {
    setUploadedFiles(prevState => prevState.filter(file => file.name !== name))
  };

  return (
    <>
      <div className='progress-bar'>
        <p>{state.progress}</p>
        <div className="progress-bar-fill" style={{ width: `${state.progress}%` }}></div>
      </div>
      <div
        className={`dropzone ${isDragActive ? 'active' : ''} ${isDragReject ? 'reject' : ''}`}
        aria-label='Drag and drop zone'
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <span>drag and drop files here</span>
      </div>

      <ul>
        {uploadedFiles.map((file, i) => (
          <li key={i}>
            <p>{file.name}</p>
            <button className='delete' onClick={() => handleDeleteFile(file.name)}></button>
          </li>
        ))}
      </ul>

      {uploadedFiles.length > 0 &&
        (state.error
          ? <button onClick={handleUpload} disabled={state.isUploading}>Try again</button>
          : <button onClick={handleUpload} disabled={state.isUploading}>Upload</button>
        )
      }
      {uploadedFiles.length > 0 && <button disabled={!state.isUploading} onClick={() => cancel()}>Cancel</button>}

      {state?.error && <p className="error">Failed</p>}
    </>
  );
};
