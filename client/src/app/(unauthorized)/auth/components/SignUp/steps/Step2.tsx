import { useRef, useImperativeHandle, forwardRef } from 'react';
import ImageDropzone from '../../../../../components/ImageDropzone';

import { DefaultStepProps } from './types';

type Step2RefType = {
  submit: () => void;
};

function Step2({ dispatch }: DefaultStepProps, ref: React.Ref<Step2RefType>) {
  const imageDropzoneRef = useRef<{ handleSubmitFile: () => boolean }>(null);

  const handleDrop = (file: File) => {
    console.log('file dropped', file);
  };

  function submit() {
    if (imageDropzoneRef.current) {
      imageDropzoneRef.current.handleSubmitFile();
    }
  }

  useImperativeHandle(ref, () => ({
    submit: () => {
      submit();
      return true;
    },
  }));

  return (
    <div className="flex flex-col w-full items-center justify-between py-6">
      <ImageDropzone onSubmitFile={handleDrop} ref={imageDropzoneRef} />
    </div>
  );
}

export default forwardRef(Step2);
