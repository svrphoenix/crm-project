'use client';

import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) notFound();
  }, [params.id]);

  return <Header>Companies -={params.id}=-</Header>;
};

export default Page;
