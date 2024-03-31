import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemSearch from '../features/item-search/ItemSearch';

const AppLayout: FC = () => {
  return (
    <div className="h-screen text-color-text-primary bg-color-primary">
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto]">
        <ItemSearch />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
