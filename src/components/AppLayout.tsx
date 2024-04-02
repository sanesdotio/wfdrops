import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemSearch from '../features/item-search/ItemSearch';

const AppLayout: FC = () => {
  return (
    <div
      id="container"
      className="h-screen text-color-text-primary bg-color-primary"
    >
      <Header />
      <ItemSearch />
      <Footer />
    </div>
  );
};

export default AppLayout;
