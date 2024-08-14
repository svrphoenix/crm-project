import { Status } from './constants';
import StatusLabel from './components/status-label';

const Home = () => {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active} disabled>
        Active
      </StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
};

export default Home;
