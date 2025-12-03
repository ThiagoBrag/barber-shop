import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

// Typed wrapper around useDispatch so components get proper dispatch type
export const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
