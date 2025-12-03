import { Moon, Sun } from '@phosphor-icons/react';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import {
  setDarkTheme,
  setLightTheme,
  userConfigSelector,
} from '../store/UserConfig/UserConfigReducer';
import User from './User';

export default function Header() {
  const { isDarkTheme } = useAppSelector(userConfigSelector);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    if (isDarkTheme) dispatch(setLightTheme());
    else dispatch(setDarkTheme());
  };

  return (
    <div className="w-full flex justify-between items-center py-4 px-4 color-bg text-white shadow-lg">
      <div className="w-fit flex items-center gap-4 text-orange"></div>
      <div className="flex gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDarkTheme ? 'Tema claro' : 'Tema escuro'}
          className="p-2 rounded-full cursor-pointer bg-transparent color-hover-bg transition-colors duration-200 text-orange"
        >
          {isDarkTheme ? (
            <Sun size={20} weight="bold" />
          ) : (
            <Moon size={20} weight="bold" />
          )}
        </button>
        <User />
      </div>
    </div>
  );
}
