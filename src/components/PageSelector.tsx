import { useState, useEffect } from "react";

interface CheckboxProps {
  checked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const Checkbox = ({ checked, onClick }: CheckboxProps) => (
  <button
    className="w-[35px] h-[35px] flex-shrink-0 cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity"
    onClick={onClick}
    type="button"
  >
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_6)">
        <rect
          x="6"
          y="6.5"
          width="23"
          height="23"
          rx="6"
          fill="white"
        />
        <rect
          x="6.5"
          y="7"
          width="22"
          height="22"
          rx="5.5"
          stroke="#CDCDCD"
          strokeOpacity="0.6"
        />
        {checked && (
          <path
            d="M24 13.5L20.2286 17.2714L16.4571 21.0429L12 16.9286"
            stroke="#1F2128"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
      </g>
      <defs>
        <clipPath id="clip0_1_6">
          <rect x="6" y="6.5" width="23" height="23" rx="6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </button>
);

const Divider = () => (
  <div className="w-[370px] h-[20px] flex items-center justify-center">
    <svg
      width="370"
      height="20"
      viewBox="0 0 370 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="15.35"
        y1="9.65"
        x2="354.65"
        y2="9.65"
        stroke="#CDCDCD"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

interface PageItemProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

const PageItem = ({ label, checked, onToggle }: PageItemProps) => {
  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <div
      className="flex items-center justify-between w-[370px] h-[42px] bg-card hover:bg-muted cursor-pointer transition-colors"
      style={{ padding: "8px 15px 8px 22px" }}
      onClick={onToggle}
    >
      <span
        className="text-[14px] font-normal text-foreground"
        style={{ lineHeight: "1.3" }}
      >
        {label}
      </span>
      <Checkbox checked={checked} onClick={handleCheckboxClick} />
    </div>
  );
};

const PageSelector = () => {
  const pages = [
    { id: 1, label: "Page 1" },
    { id: 2, label: "Page 2" },
    { id: 3, label: "Page 3" },
    { id: 4, label: "Page 4" },
    { id: 5, label: "Page 5" },
    { id: 6, label: "Page 6" },
  ];

  const [checkedPages, setCheckedPages] = useState<Record<number, boolean>>({});
  const [allChecked, setAllChecked] = useState(false);

  // Sync "All pages" checkbox with individual selections
  useEffect(() => {
    const allSelected = pages.every((page) => checkedPages[page.id]);
    setAllChecked(allSelected);
  }, [checkedPages]);

  const handleAllPagesToggle = () => {
    if (allChecked) {
      // Uncheck all
      setCheckedPages({});
    } else {
      // Check all
      const newChecked: Record<number, boolean> = {};
      pages.forEach((page) => {
        newChecked[page.id] = true;
      });
      setCheckedPages(newChecked);
    }
  };

  const handlePageToggle = (pageId: number) => {
    setCheckedPages((prev) => ({
      ...prev,
      [pageId]: !prev[pageId],
    }));
  };

  const handleDone = () => {
    const selectedPages = pages
      .filter((page) => checkedPages[page.id])
      .map((page) => page.label);

    if (selectedPages.length > 0) {
      alert(`Selected pages: ${selectedPages.join(", ")}`);
    } else {
      alert("No pages selected");
    }
    console.log("Selected pages:", selectedPages);
  };

  const handleAllPagesCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleAllPagesToggle();
  };

  return (
    <div
      className="w-[370px] bg-card rounded-[6px] border border-border-light overflow-hidden"
      style={{
        boxShadow:
          "0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.1)",
        padding: "10px 0px",
      }}
    >
      {/* Header - All pages */}
      <div
        className="flex items-center justify-between w-[370px] h-[42px] bg-card hover:bg-muted cursor-pointer transition-colors"
        style={{ padding: "8px 15px 8px 22px" }}
        onClick={handleAllPagesToggle}
      >
        <span
          className="text-[14px] font-normal text-foreground"
          style={{ lineHeight: "1.3" }}
        >
          All pages
        </span>
        <Checkbox checked={allChecked} onClick={handleAllPagesCheckboxClick} />
      </div>

      {/* Divider */}
      <Divider />

      {/* Page list - Scrollable */}
      <div
        className="w-[370px] h-[164px] overflow-x-hidden overflow-y-auto bg-card"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            .scrollable-pages::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <div className="scrollable-pages">
          {pages.map((page) => (
            <PageItem
              key={page.id}
              label={page.label}
              checked={!!checkedPages[page.id]}
              onToggle={() => handlePageToggle(page.id)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* Done button */}
      <div className="w-[370px] bg-card" style={{ padding: "10px 15px" }}>
        <button
          className="w-[340px] h-[40px] bg-primary hover:bg-[hsl(47,91%,51%)] active:bg-[hsl(46,100%,45%)] text-primary-foreground rounded-[4px] text-[14px] font-normal transition-all cursor-pointer flex items-center justify-center"
          style={{ lineHeight: "1.3" }}
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
