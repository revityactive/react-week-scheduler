import en from 'date-fns/locale/en-GB';
import { createContext } from 'react';

export const SchedulerContext = createContext({ locale: en });
