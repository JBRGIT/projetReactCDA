function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex items-center justify-center space-x-4  mt-5 sm:mt-10  ">
      <button
        className={` py-1 px-2 sm:py-2 sm:px-4 text-[8px]  rounded-lg ${
          page === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-400 hover:bg-red-500 text-white cursor-pointer"
        } `}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Avant
      </button>

      <button
        className={` py-1 px-2 sm:py-2 sm:px-4 text-[8px] rounded-lg ${
          page === totalPages
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-400 hover:bg-green-500 text-white cursor-pointer"
        } `}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Après
      </button>

      <div className="text-white  font-bold text-lg sm:text-3xl    ">
        {page}
      </div>
    </div>
  );
}

export default Pagination;
