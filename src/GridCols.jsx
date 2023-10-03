import React from "react";

function GridCols({ className, cols, index, set, color }) {
  const columns = [...Array(set.columns).keys()];

  const nextBreakpoint = cols[index + 1]?.breakpoint;
  const visibleClass =
    set.breakpoint === `default` ? `flex` : `hidden ${set.breakpoint}:flex`;
  const hiddenClass = nextBreakpoint ? `${nextBreakpoint}:hidden` : `hidden`;
  const defaultClasses = `h-full divide-x `;

  const variable = {
    red: `divide-red-500 text-red-500`,
    green: `divide-green-500 text-green-500`,
    blue: `divide-blue-500 text-blue-500`,
  };

  const classes = [
    visibleClass,
    hiddenClass,
    defaultClasses,
    variable[color],
    className,
  ];

  return (
    <div className={classes.join(" ").trim()}>
      {columns.map((col) => (
        <div
          key={col}
          className={`flex-1 flex items-center justify-center h-full`}
        >
          {col + 1 === set.columns && (
            <div className="fixed w-full bottom-0 flex justify-center items-center">
              <code className="text-xs px-2 py-1 rounded-t bg-black text-white">
                {set.breakpoint}
              </code>
            </div>
          )}
          <div className="transform rotate-90">
            {col + 1}/{set.columns}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridCols;