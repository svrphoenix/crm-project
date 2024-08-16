import React from 'react';
import Header from '@/app/components/Header';
import Toolbar from '@/app/components/Toolbar';
import SearchInput from '@/app/components/SearchInput';
import AddCompanyButton from '@/app/components/AddCompanyButton';
import CompanyTable from '@/app/components/CompanyTable';
import CompanyRow from '@/app/components/CompanyRow';
import { Status } from '@/app/constants';

interface IPageProps {}

const Page: React.FC<IPageProps> = () => {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
};

export default Page;
