import { format } from 'date-fns';
import { FORMAT } from '../constants';

export const dateFnsCase = () => format(new Date(), FORMAT);
