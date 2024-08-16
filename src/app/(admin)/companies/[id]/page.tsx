import Header from '@/app/components/Header';
import React from 'react';

interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  return <Header>Companies -={params.id}=-</Header>;
};

export default Page;
