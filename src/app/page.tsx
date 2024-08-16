import { Status } from './constants';
import StatusLabel from './components/StatusLabel';
import AddCompanyButton from './components/AddCompanyButton';

const Home = () => {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
};

export default Home;
