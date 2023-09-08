import ImageDropzone from '../../../../../components/ImageDropzone';
import * as Form from '../../Form';

import { DefaultStepProps } from './types';

export default function Step2({ dispatch }: DefaultStepProps) {
  return (
    <div className="flex flex-col w-full items-center justify-between py-6">
      <ImageDropzone />
    </div>
  );
}
