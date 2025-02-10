import { useState } from "react";
import { DropZone } from "./components/DropZone";

function App() {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  const onFilesAccepted = (files: File[]) => {
    setAcceptedFiles(prevState => [...prevState, ...files]);
  };

  return (
    <div className="container">
      <h1>File Uploader</h1>
      <DropZone
        onFilesAccepted={onFilesAccepted}
        maxFiles={5}
        maxSize={5 * 1024 * 1024}
        accept={['image/jpeg', 'image/png', 'image/webp']}
      />
    </div>
  )
}

export default App
