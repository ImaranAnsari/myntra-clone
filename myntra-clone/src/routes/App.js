import { useSelector } from 'react-redux';
import '../App.css';
import FetchItem from '../components/FetchItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
