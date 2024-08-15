'use client';

import CompanyForm, { ICompanyFormProps } from '@/app/components/CompanyForm';
import Modal, { IModalProps } from '@/app/components/Modal';

export interface ICompanyFormModalProps extends IModalProps {
  onSubmit: ICompanyFormProps['onSubmit'];
}

const CompanyFormModal: React.FC<ICompanyFormModalProps> = ({ onSubmit, ...rest }) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
