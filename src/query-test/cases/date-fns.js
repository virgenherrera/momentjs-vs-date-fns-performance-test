import isAfter from 'date-fns/isAfter';
import { DATE_A, DATE_B } from '../constants';

export const dateFnsCase = () =>
    isAfter(DATE_A, DATE_B);
