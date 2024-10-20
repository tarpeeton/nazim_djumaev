'use client';
import { FC, useState, useEffect } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const PaginationComponent: FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(currentPage);

  // Update page number if the currentPage prop changes
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  // Handler for page changes
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const params = new URLSearchParams(searchParams.toString());
    if (newPage > 1) {
      params.set('page', newPage.toString()); // Update the URL with the new page number
    } else {
      params.delete('page'); // Remove page param if page is 1
    }
    router.push(`?${params.toString()}`); // Update the URL
  };

  // Render pagination buttons dynamically
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-4 py-2 rounded-full transition-colors duration-300 
            ${i === page ? 'bg-myBlue text-white' : 'bg-gray-200 text-gray-700 hover:bg-myBlue hover:text-white'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-[50px] 2xl:mt-[100px]">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <GrFormPrevious size={20} />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        <MdNavigateNext size={20} />
      </button>
    </div>
  );
};

export default PaginationComponent;
