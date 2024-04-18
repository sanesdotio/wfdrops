import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex h-1/3 flex-col items-center p-3">
      <img
        src="/LotusFlower.png"
        className="h-1/2 p-3 block object-contain my-8"
        alt="Lotus Flower"
      />
      <img src="/wfdrops-header.png" className="block h-1/6" />
    </header>
  );
};

export default Header;
