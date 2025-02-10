  import axios from "axios";
  import { useRef, useState } from "react";

  interface UploadState {
    progress: number;
    error: Error | null;
    isUploading: boolean;
  }

  export function useFileUpload() {
    const [state, setState] = useState<UploadState>({
      progress: 0,
      error: null,
      isUploading: false,
    });
    const controller = useRef<AbortController>();

    const upload = async (file: File) => {
      if (!file) return;

      setState((prevState) => ({
        ...prevState,
        progress: 0,
        isUploading: true,
      }));

      if(!controller.current) {
        controller.current = new AbortController();
      }

      try {
        const formData = new FormData();
        formData.append("files", file);

        await axios.post("/upload", formData, {
          signal: controller.current.signal,
          onUploadProgress: (progressEvent) => {
            const progress = progressEvent.total
              ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
              : 0;
            setState((prevState) => ({ ...prevState, progress }));
          },
        });

        setState((prevState) => ({
          ...prevState,
          progress: 100,
          isUploading: false,
        }));
      } catch (error) {
        // console.log(error);
        setState((prevState) => ({
          ...prevState,
          progress: 0,
          error: error as Error,
          isUploading: false,
        }));
      }
    };

    const cancel = () => {
      if(controller.current) {
        controller.current.abort();
      }
    };

    return {
      upload,
      cancel,
      state,
    };
  }
