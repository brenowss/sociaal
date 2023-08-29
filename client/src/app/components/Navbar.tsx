import { useAppSelector } from '../../redux/store';
import { DropdownMenu } from './Dropdown';
import ThemeSwitch from './ThemeSwitch';
import {
  Bell,
  ChatDots,
  MagnifyingGlass,
  Question,
} from '@phosphor-icons/react';

export default function Navbar() {
  const user = useAppSelector((state) => state.authReducer.value.user);

  const fullName = user?.firstName + ' ' + user?.lastName;

  const dropdownData = [
    {
      label: fullName,
      onClick: () => console.log('Perfil'),
    },
    {
      label: 'Logout',
      onClick: () => console.log('Cerrar sesión'),
    },
  ];

  return (
    <div className="flex justify-between items-center bg-zinc-900 px-6 py-3">
      <div className="flex items-center">
        <div className="flex items-center">
          <h1 className="font-bold text-white text-3xl">Sociaal</h1>
        </div>
      </div>
      <div className="flex items-center rounded-full text-white bg-zinc-800 bg-opacity-70 px-3 py-1 focus-within:shadow-lg focus:shadow-zinc-200 transition-all">
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent placeholder:text-zinc-100 placeholder:transition-all placeholder:opacity-40 focus:placeholder:opacity-80 focus:outline-none"
        />
        <MagnifyingGlass size={20} />
      </div>
      <div className="flex items-center gap-6">
        <div className="flex text-white items-center gap-6  ">
          <button type="button">
            <ChatDots size={20} />
          </button>
          <button type="button">
            <Bell size={20} />
          </button>
          <button type="button">
            <Question size={20} />
          </button>
          <DropdownMenu label={fullName} data={dropdownData} />
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
