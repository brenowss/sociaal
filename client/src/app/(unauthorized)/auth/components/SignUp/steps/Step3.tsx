import * as Form from '../../Form';

import { DefaultStepProps } from './types';

export default function Step3({ dispatch }: DefaultStepProps) {
  return (
    <div className="flex flex-col w-full items-center justify-between py-6">
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="email" htmlFor="email">
          Email
        </Form.Label>
        <Form.Input
          id="email"
          type="email"
          className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
        />
      </Form.FormGroup>
    </div>
  );
}
