'use client';

import Link from 'next/link';
import * as FormComponent from '../components/Form';
import { FormType } from '../page';
import { useState } from 'react';

interface FormProps {
  form: FormType;
}

export default function Form({ form = 'signin' }: FormProps) {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <div className="flex flex-col w-full h-screen items-center justify-between">
      <div></div>

      <div>
        <div className="text-center">
          <h1 className="text-6xl mb-10 [text-shadow:_3px_4px_10px_rgb(0_0_0_/_40%)]">
            sociaal
          </h1>

          <div className="mb-5">
            <h3 className="text-3xl font-semibold text-zinc-700 mb-2">
              Bem-vindo{form === 'signin' && ' de volta'}!
            </h3>

            <p className="text-zinc-600">Por favor, entre!</p>
          </div>
        </div>

        <form className="w-80">
          <fieldset>
            <FormComponent.FormGroup className="mb-4">
              <FormComponent.Label id="email" htmlFor="email">
                Email
              </FormComponent.Label>
              <FormComponent.Input
                id="email"
                type="email"
                className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
              />
            </FormComponent.FormGroup>
            <FormComponent.FormGroup className="mb-4">
              <FormComponent.Label id="password" htmlFor="password">
                Senha
              </FormComponent.Label>
              <FormComponent.Input
                id="password"
                className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                canHideShow={form === 'signin'}
              />
            </FormComponent.FormGroup>
            {form === 'signup' && (
              <FormComponent.FormGroup className="mb-4">
                <FormComponent.Label
                  id="passwordConfirmation"
                  htmlFor="passwordConfirmation"
                >
                  Confirme sua senha
                </FormComponent.Label>
                <FormComponent.Input
                  id="passwordConfirmation"
                  type="text"
                  className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  value={passwordConfirmation}
                />
              </FormComponent.FormGroup>
            )}
            <FormComponent.FormGroup className="!flex-row !justify-between !items-center">
              <FormComponent.Checkbox
                id="rememberPassword"
                label="Lembre de mim!"
                onCheckedChange={console.log}
              />
              <Link
                href="/password-recovery"
                className="text-xs text-zinc-600 text-opacity-75 hover:text-opacity-100 transition-all"
              >
                Esqueceu sua senha?
              </Link>
            </FormComponent.FormGroup>
            <FormComponent.SubmitButton className="mt-4 w-full !rounded-full py-3 font-semibold">
              Entrar
            </FormComponent.SubmitButton>
          </fieldset>
        </form>
      </div>

      <div className="flex items-center text-center">
        {form === 'signin' ? (
          <>
            <span>Ainda não tem uma conta?</span>
            <Link href="/auth/signup">Crie uma já!</Link>
          </>
        ) : (
          <>
            <span>Já tem uma conta?</span>
            <Link href="/auth/signin">Entre agora!</Link>
          </>
        )}
      </div>
    </div>
  );
}
