import { useAppSelector } from '../../../../../../redux/store';
import * as Form from '../../../components/Form';
import { DefaultStepProps } from './types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useImperativeHandle, forwardRef } from 'react';
import ErrorMessage from '../../Form/ErrorMessage';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      'A senha deve conter pelo menos uma letra maiúscula e um número'
    ),
});

const Step1 = forwardRef(({ dispatch }: DefaultStepProps, ref) => {
  const { firstName, lastName, email, password } = useAppSelector(
    (state) => state.registerReducer.value
  );

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
    validateOnMount: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useImperativeHandle(ref, () => ({
    submit: () => {
      formik.handleSubmit();

      console.log(formik.isValid);
      return formik.isValid;
    },
  }));

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="firstName" htmlFor="firstName">
          Qual é o seu primeiro nome?
        </Form.Label>
        <Form.Input
          id="firstName"
          type="text"
          autoCorrect="off"
          autoCapitalize="on"
          spellCheck="false"
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          placeholder="Ex.: Bruce"
          onChange={(e) => {
            formik.handleChange(e);
            dispatch({
              field: 'firstName',
              value: e.target.value,
            });
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          value={formik.values.firstName}
        />
        {formik?.touched?.firstName && formik.errors.firstName ? (
          <ErrorMessage error={formik.errors.firstName} />
        ) : null}
      </Form.FormGroup>
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="lastName" htmlFor="lastName">
          E o seu sobrenome?
        </Form.Label>
        <Form.Input
          id="lastName"
          type="text"
          autoCorrect="off"
          autoCapitalize="on"
          spellCheck
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          placeholder="Ex.: Wayne"
          onChange={(e) => {
            formik.handleChange(e);
            dispatch({
              field: 'lastName',
              value: e.target.value,
            });
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          value={formik.values.lastName}
        />
        {formik?.touched?.lastName && formik.errors.lastName ? (
          <ErrorMessage error={formik.errors.lastName} />
        ) : null}
      </Form.FormGroup>
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="email" htmlFor="email">
          Qual é o seu melhor email?
        </Form.Label>
        <Form.Input
          id="email"
          type="email"
          autoCorrect="off"
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          placeholder="Ex.: bruce.wayne@batmail.com"
          onChange={(e) => {
            formik.handleChange(e);
            dispatch({
              field: 'email',
              value: e.target.value,
            });
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          value={formik.values.email}
        />
        {formik?.touched?.email && formik.errors.email ? (
          <ErrorMessage error={formik.errors.email} />
        ) : null}
      </Form.FormGroup>
      <Form.FormGroup className="w-full">
        <Form.Label id="password" htmlFor="password">
          Crie uma senha única!
        </Form.Label>
        <Form.Input
          id="password"
          autoCorrect="off"
          className="shadow-none border-b border-zinc-300 focus:border-zinc-700 transition-all rounded-none focus:shadow-none w-full"
          placeholder="Ex.: TheBatman1939"
          onChange={(e) => {
            formik.handleChange(e);
            dispatch({
              field: 'password',
              value: e.target.value,
            });
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          canHideShow
          value={formik.values.password}
        />
        {formik?.touched?.password && formik.errors.password ? (
          <ErrorMessage error={formik.errors.password} />
        ) : null}
      </Form.FormGroup>
    </div>
  );
});

Step1.displayName = 'Step1';

export default Step1;
