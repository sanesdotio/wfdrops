import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex flex-col items-center p-5 h-1/4">
      <img
        src="../../public/LotusFlower.png"
        className="mx-auto object-contain p-5 h-1/2 w-1/2 block"
        alt="Lotus Flower"
      />
      <img src="../../public/wfdrops-header.png" className="p-5 h-1/5 block" />
    </header>
  );
};

export default Header;
