import { ArrowUp, FileImage, ImageSquare, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImageDropzone() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log('File has been added');
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files[0]);
    }
  }

  function handleSubmitFile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (files?.length === 0) {
      console.log('No files selected');
    } else {
      console.log('File has been submitted', e.target);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: string, idx: number) {
    setFiles(undefined);
  }

  function openFileExplorer() {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`${
          dragActive ? 'bg-green-400' : 'bg-green-100'
        }  p-4 w-full transition-all rounded-lg border-4 border-spacing-5 border-separate border-dashed border-green-300 min-h-[10rem] text-center flex flex-col items-center justify-center`}
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept=".png, .jpg, .jpeg"
        />

        {files ? (
          <div className="relative">
            <Image
              width={350}
              height={350}
              src={URL.createObjectURL(files)}
              alt={files.name}
              className="max-h-[10rem] mb-3"
            />
            <button
              className="absolute -top-2 -right-2 bg-red-500 bg-opacity-80 transition-all hover:bg-opacity-100 rounded-full p-1"
              onClick={() => removeFile(files.name, 0)}
            >
              <X size={14} className="fill-white" />
            </button>
          </div>
        ) : (
          <>
            <div className="relative">
              <ImageSquare size={50} className="fill-green-400" />
              <div className="absolute animate-bounce -top-1 -right-1 bg-inherit p-0.5 rounded-full z-10">
                <ArrowUp size={16} className="fill-green-400" />
              </div>
            </div>

            <p>
              Drag & Drop files or{' '}
              <span
                className="font-bold text-blue-600 cursor-pointer"
                onClick={openFileExplorer}
              >
                <u>Select files</u>
              </span>{' '}
              to upload
            </p>
          </>
        )}
      </div>
    </div>
  );
}
