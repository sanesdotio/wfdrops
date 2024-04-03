import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex flex-col items-center p-3 h-1/3">
      <img
        src="/LotusFlower.png"
        className="my-8 object-contain p-3 h-1/2 block"
        alt="Lotus Flower"
      />
      <img src="/wfdrops-header.png" className="h-1/6 block" />
    </header>
  );
};

export default Header;
