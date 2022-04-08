/*
 * @Author: zxy
 * @Date: 2022-04-08 17:06:08
 * @LastEditTime: 2022-04-08 19:29:19
 * @FilePath: /ts-with-react/src/hooks/useMousePos.tsx
 */
import { useEffect, useState } from "react";

const useMousePos = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    console.log('inEffect')
    const upDataMouse = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    }

    document.addEventListener('mousemove', upDataMouse)

    return () => {
      console.log('outEffect')
      document.removeEventListener('mousemove', upDataMouse)
    }
  }, [])

  return pos
}

export default useMousePos