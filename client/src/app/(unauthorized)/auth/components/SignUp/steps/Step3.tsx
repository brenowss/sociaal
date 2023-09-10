import { useAppSelector } from '../../../../../../redux/store';
import * as Form from '../../../components/Form';
import { DefaultStepProps } from './types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useImperativeHandle, forwardRef } from 'react';
import ErrorMessage from '../../Form/ErrorMessage';

const validationSchema = Yup.object({
  location: Yup.string(),
  occupation: Yup.string(),
});

const Step3 = forwardRef(({ dispatch }: DefaultStepProps, ref) => {
  const { location, occupation } = useAppSelector(
    (state) => state.registerReducer.value
  );

  const formik = useFormik({
    initialValues: {
      location: location,
      occupation: occupation,
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
        <Form.Label id="location" htmlFor="location">
          Onde você está? (Opcional)
        </Form.Label>
        <Form.Input
          id="location"
          type="string"
          className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
          placeholder="Ex: Gotham City"
          onChange={(e) => {
            formik.handleChange(e);
            dispatch({
              field: 'location',
              value: e.target.value,
            });
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          value={formik.values.location}
        />
        {formik?.touched?.location && formik.errors.location ? (
          <ErrorMessage error={formik.errors.location} />
        ) : null}
      </Form.FormGroup>
      <Form.FormGroup className="mb-4 w-full">
        <Form.Label id="occupation" htmlFor="occupation">
          Qual é a sua ocupação? (Opcional)
        </Form.Label>
        <Form.Input
          id="occupation"
          type="string"
          className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
          placeholder="Ex: Batman nas horas vagas"
          onChange={(e) => {
            formik.handleChange(e);
            dispatch({
              field: 'occupation',
              value: e.target.value,
            });
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          value={formik.values.occupation}
        />
        {formik?.touched?.occupation && formik.errors.occupation ? (
          <ErrorMessage error={formik.errors.occupation} />
        ) : null}
      </Form.FormGroup>
    </div>
  );
});

Step3.displayName = 'Step3';

export default Step3;
