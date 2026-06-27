export default function PropertiesPagination() {
  const pages = ["1", "2", "3", "...", "54"];

  return (
    <div className="flex items-center justify-center gap-2 py-10">
      <button className="flex h-10 w-10 items-center justify-center rounded bg-[#f1f5f9] text-[#64748b]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`flex h-10 min-w-[40px] items-center justify-center rounded px-3 text-[14px] font-medium ${
            page === "1"
              ? "bg-[#3563e9] text-white"
              : "bg-[#f1f5f9] text-[#3563e9]"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="flex h-10 w-10 items-center justify-center rounded bg-[#3563e9] text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );
}
