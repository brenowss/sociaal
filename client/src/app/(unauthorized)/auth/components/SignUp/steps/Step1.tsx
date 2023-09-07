import { useAppSelector } from '../../../../../../redux/store';
import * as Form from '../../../components/Form';
import { DefaultStepProps } from './types';

export default function Step1({ dispatch }: DefaultStepProps) {
  const { firstName, lastName, email, password } = useAppSelector(
    (state) => state.registerReducer.value
  );

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="firstName" htmlFor="firstName">
          Qual seu primeiro nome?
        </Form.Label>
        <Form.Input
          id="firstName"
          type="text"
          autoCorrect="off"
          autoCapitalize="on"
          spellCheck="false"
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          onChange={(e) =>
            dispatch({
              field: 'firstName',
              value: e.target.value,
            })
          }
          value={firstName}
        />
      </Form.FormGroup>
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="lastName" htmlFor="lastName">
          E seu sobrenome?
        </Form.Label>
        <Form.Input
          id="lastName"
          type="text"
          autoCorrect="off"
          autoCapitalize="on"
          spellCheck
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          onChange={(e) =>
            dispatch({
              field: 'lastName',
              value: e.target.value,
            })
          }
          value={lastName}
        />
      </Form.FormGroup>
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="email" htmlFor="email">
          Qual seu melhor email?
        </Form.Label>
        <Form.Input
          id="email"
          type="email"
          autoCorrect="off"
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          onChange={(e) =>
            dispatch({
              field: 'email',
              value: e.target.value,
            })
          }
          value={email}
        />
      </Form.FormGroup>
      <Form.FormGroup className="w-full">
        <Form.Label id="password" htmlFor="password">
          Crie uma senha única!
        </Form.Label>
        <Form.Input
          id="password"
          type="password"
          autoCorrect="off"
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          onChange={(e) =>
            dispatch({
              field: 'password',
              value: e.target.value,
            })
          }
          value={password}
        />
      </Form.FormGroup>
    </div>
  );
}
