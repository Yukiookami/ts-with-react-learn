/*
 * @Author: zxy
 * @Date: 2022-04-07 17:29:14
 * @LastEditTime: 2022-04-07 17:38:45
 * @FilePath: /ts-with-react/src/components/mouseTracker.tsx
 */
import React, { useEffect, useState } from "react"

const MouseTracker: React.FC = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const upDataMouse = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    }

    document.addEventListener('click', upDataMouse)

    return () => {
      document.removeEventListener('click', upDataMouse)
    }
  })

  return (
    <p>X: {pos.x}, Y: {pos.y}</p>
  )
}

export default MouseTracker