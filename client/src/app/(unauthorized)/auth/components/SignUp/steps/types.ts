import { RegisterState } from '../../../../../../redux/features/registerSlice';

type Payload = {
  field: keyof RegisterState;
  value: string;
};

export interface DefaultStepProps {
  dispatch: ({ field, value }: Payload) => void;
}
