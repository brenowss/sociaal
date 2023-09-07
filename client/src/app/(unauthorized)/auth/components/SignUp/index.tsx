import { JSX, SVGProps, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FormComponent from '../Form';
import * as Steps from './steps';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';
import { setField } from '../../../../../redux/features/registerSlice';

interface StepProps {
  step: number;
  currentStep: number;
}

function Step({ step, currentStep }: StepProps) {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete';

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: 'tween',
          ease: 'circOut',
        }}
        className="absolute inset-0 rounded-full bg-green-200"
      ></motion.div>

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: 'var(--white)',
            borderColor: 'var(--slate-200)',
            color: 'var(--slate-400)',
          },
          active: {
            backgroundColor: 'var(--white)',
            borderColor: 'var(--green-500)',
            color: 'var(--green-500)',
          },
          complete: {
            backgroundColor: 'var(--green-400)',
            borderColor: 'var(--green-400)',
            color: 'var(--green-400)',
          },
        }}
        transition={{ duration: 0.2 }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === 'complete' ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: 'tween',
          ease: 'easeOut',
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Page() {
  const [step, setStep] = useState(1);
  const [prevStep, setPrevStep] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const content = [
    <Steps.Step1
      key={1}
      dispatch={({ field, value }) =>
        dispatch(
          setField({
            field,
            value,
          })
        )
      }
    />,
    <Steps.Step2
      key={2}
      dispatch={({ field, value }) =>
        dispatch(
          setField({
            field,
            value,
          })
        )
      }
    />,
    <Steps.Step3
      key={3}
      dispatch={({ field, value }) =>
        dispatch(
          setField({
            field,
            value,
          })
        )
      }
    />,
  ];

  useEffect(() => {
    setPrevStep(step);
  }, [step]);

  const direction = step > prevStep ? 1 : -1;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setStep(step > 3 ? step : step + 1);
    }
  };

  return (
    <div className="flex items-start">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <form ref={formRef} onKeyDown={handleKeyDown}>
          <div className="flex justify-between rounded p-8">
            <Step step={1} currentStep={step} />
            <Step step={2} currentStep={step} />
            <Step step={3} currentStep={step} />
          </div>
          <div className="px-8 pb-8">
            <div className="overflow-hidden">
              <motion.div
                key={step}
                initial={{ x: `${50 * direction}%`, opacity: 0 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: `${-50 * direction}%`, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              >
                {content[step - 1]}
              </motion.div>
            </div>

            <div className="mt-10 flex justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step < 2 ? step : step - 1);
                }}
                className="rounded px-2 py-1 text-slate-400 hover:text-slate-700 transition-colors"
              >
                Voltar
              </button>
              <FormComponent.SubmitButton
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step > 3 ? step : step + 1);
                }}
                className="!rounded-full py-3 font-semibold bg-green-400 hover:bg-green-500 text-white"
              >
                Continuar
              </FormComponent.SubmitButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
