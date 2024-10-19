"use client";
import { FC, useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useRouter, useSearchParams } from 'next/navigation'; // Use useSearchParams for search parameters

const PaginationComponent: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = 2; // Total number of pages
  const initialPage = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1; // Get page from URL or default to 1
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  // Update current page when the search params change
  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [searchParams]);

  // Handler for page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    if (page > 1) {
      params.set('page', page.toString()); // Update the URL with the new page number
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
            ${i === currentPage ? 'bg-myBlue text-white' : 'bg-gray-200 text-gray-700 hover:bg-myBlue hover:text-white'}`}
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
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <GrFormPrevious size={20} />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdNavigateNext size={20} />
      </button>
    </div>
  );
};

export default PaginationComponent;
