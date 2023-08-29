'use client';

import * as FormComponent from '../components/Form';

export default function Form() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-10 [text-shadow:_3px_4px_10px_rgb(0_0_0_/_40%)]">
          sociaal
        </h1>

        <div className="mb-5">
          <h3 className="text-3xl font-semibold text-zinc-700 mb-2">
            Bem-vindo de volta!
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
          <FormComponent.FormGroup>
            <FormComponent.Label id="password" htmlFor="password">
              Senha
            </FormComponent.Label>
            <FormComponent.Input
              id="password"
              type="password"
              className="shadow-none border-b border-zinc-700 rounded-none focus:shadow-none w-full"
            />
          </FormComponent.FormGroup>
          <FormComponent.SubmitButton className="mt-4 w-full !rounded-full py-3 font-semibold">
            Entrar
          </FormComponent.SubmitButton>
        </fieldset>
      </form>
    </div>
  );
}
