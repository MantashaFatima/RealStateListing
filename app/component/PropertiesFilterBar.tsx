export default function PropertiesFilterBar() {
  const filters = ["All Properties", "For Rent", "For Sale", "No Rent"];

  return (
    <div className="border-b border-[#e2e8f0] bg-white">
      <div className="mx-auto flex max-w-[1170px] flex-wrap items-center justify-between gap-4 px-4 py-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded bg-[#3563e9] text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
              </svg>
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded bg-[#f1f5f9] text-[#94a3b8]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            </button>
          </div>

          <div className="relative">
            <select className="appearance-none rounded border border-[#e2e8f0] bg-white py-2 pl-4 pr-10 text-[14px] text-[#64748b] outline-none">
              <option>Sort by: Default Order</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b]"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`text-[14px] font-medium ${
                index === 0 ? "text-[#3563e9]" : "text-[#64748b]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
