import React, { useState, useEffect } from 'react'
import GridCols from './GridCols'

function Grid({ cols, visibleByDefault, color }) {
  const [gridVisible, setGridVisible] = useState(visibleByDefault)
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'g') setGridVisible(!gridVisible)
    }, { once: true })
  })

  if (process.env.NODE_ENV !== 'development') return null
  if (!gridVisible) return null

  return (
    <section className="fixed inset-0 z-50 pointer-events-none">
      {cols.map((set, index) => (
        <GridCols
          key={set.breakpoint}
          set={set}
          index={index}
          cols={cols}
          className={set.className}
          color={color}
        />
      ))}
    </section>
  )
}

export default Grid