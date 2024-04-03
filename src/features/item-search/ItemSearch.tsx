import { useEffect, useState } from 'react';
import { getItems } from '../../services/itemSearchApi';

const ItemSearch = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await getItems(inputValue);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchItems();
  }, [inputValue]);

  return (
    <main className="grid grid-rows-[auto_1fr_auto] h-auto">
      <div className="mx-auto min-w-[40%] pt-3">
        <input
          type="text"
          className="w-full p-6 rounded-md bg-color-secondary text-color-text-primary placeholder-color-text-secondary flex-grow text-2xl"
          placeholder="Search for items..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </main>
  );
};

export default ItemSearch;
