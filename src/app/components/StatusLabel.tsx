import { ReactNode } from 'react';
import clsx from 'clsx';
import { Status } from '../constants';

export interface IStatusLabelProps {
  children: ReactNode;
  status: Status;
  disabled?: boolean;
}

const StatusLabel = ({ children, status, disabled }: IStatusLabelProps) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        {
          'text-green-700 bg-green-100': status === Status.Active,
          'text-red-700 bg-red-100': status === Status.NotActive,
          'text-orange-700 bg-orange-100': status === Status.Pending,
          'text-blue-700 bg-blue-100': status === Status.Suspended,
        },
        disabled && 'opacity-35 cursor-not-allowed'
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
};

export default StatusLabel;
