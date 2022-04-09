/*
 * @Author: zxy
 * @Date: 2022-04-07 17:11:42
 * @LastEditTime: 2022-04-09 15:32:39
 * @FilePath: /ts-with-react/src/components/LikeButton.tsx
 */
import React, { useEffect, useRef, useState, useContext } from "react";
import useMousePos from "../hooks/useMousePos";
import { ThemeContext } from "../App";

const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({
    like: 0,
    on: true
  })

  const refLike = useRef(0)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)

  const style = {
    color: theme.color,
    backgroundColor: theme.background
  }

  const pos = useMousePos()

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('you clicked on ' + obj.like + ' ref ' + refLike.current)
    }, 3000)
  }

  useEffect(() => {
    document.title = `点击了 ${obj.like} 次`
  }, [obj.like])

  useEffect(() => {
    document.title = `更改了显示状态`
  }, [obj.on])

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  }, [obj.like])

  return (
    <>
      <input type="text" ref={domRef}></input>
      <h2>likeButton: X: {pos.x} Y: {pos.y}</h2>
      <button 
        style={style}
        onClick={() => {
        setObj({...obj, like: obj.like + 1})
        refLike.current++
      }}>
        {obj.like} 👍
      </button>

      <button onClick={() => setObj({...obj, on: !obj.on})}>
        {obj.on ? 'ON' : 'OFF'}
      </button>

      <button onClick={handleAlertClick}>
        Alert !
      </button>
    </>
  )
}

export default LikeButton