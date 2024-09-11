import { FC, useState } from 'react';
import { getItems } from '../../services/searchApi';
import { useDebouncedCallback } from 'use-debounce';
import { useQuery } from '@tanstack/react-query';

const ItemSearch: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = useDebouncedCallback((input: string) => {
    setInputValue(input);
  }, 500);

  const {
    fetchStatus,
    isError,
    isSuccess,
    data: items,
    error,
  } = useQuery({
    enabled: !!inputValue,
    queryKey: ['items', inputValue],
    queryFn: () => getItems(inputValue),
  });

  if (fetchStatus === 'fetching') {
    console.log('Loading data...');
  }

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    console.log(items);
  }

  return (
    <main className="grid grid-rows-[auto_1fr_auto] h-auto">
      <div className="mx-auto min-w-[40%]">
        <input
          type="text"
          className="w-full p-6 rounded-md bg-color-secondary text-color-text-primary placeholder-color-text-secondary flex-grow text-2xl"
          placeholder="Search for items..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </main>
  );
};

export default ItemSearch;
