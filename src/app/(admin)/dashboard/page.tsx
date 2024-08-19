import MagicButton from '@/app/components/MagicButton';
import React from 'react';

interface IPageProps {}

const Page: React.FC<IPageProps> = () => {
  return (
    <main>
      <h1 className="text-xl">Dashboard</h1>
      <MagicButton />
    </main>
  );
};

export default Page;
