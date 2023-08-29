'use client';

import { redirect } from 'next/navigation';

import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import Wrapper from './wrapper';

export default function Home() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.authReducer.value.user);

  console.log('user', user);
  if (!user) {
    // redirect
    redirect('/auth');
  }

  return (
    <Wrapper>
      <main>
        <h1>AUTHORIZED</h1>
        {user.firstName}
      </main>
    </Wrapper>
  );
}
