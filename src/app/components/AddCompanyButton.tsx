'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/Button';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={values => {
          console.log(values);
          setShow(false);
        }}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
