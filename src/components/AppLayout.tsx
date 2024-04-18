import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemSearch from '../features/item-search/ItemSearch';

const AppLayout: FC = () => {
  return (
    <div
      id="container"
      className="text-color-text-primary bg-color-primary h-screen"
    >
      <Header />
      <ItemSearch />
      <Footer />
    </div>
  );
};

export default AppLayout;
