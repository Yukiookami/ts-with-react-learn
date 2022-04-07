/*
 * @Author: zxy
 * @Date: 2022-04-07 17:11:42
 * @LastEditTime: 2022-04-07 18:35:04
 * @FilePath: /ts-with-react/src/components/LikeButton.tsx
 */
import React, { useEffect, useState } from "react";

const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({
    like: 0,
    on: true
  })

  useEffect(() => {
    document.title = `点击了 ${obj.like} 次`
  }, [obj.like])

  useEffect(() => {
    document.title = `更改了显示状态`
  }, [obj.on])

  return (
    <>
      <button onClick={() => setObj({...obj, like: obj.like + 1})}>
        {obj.like} 👍
      </button>

      <button onClick={() => setObj({...obj, on: !obj.on})}>
        {obj.on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton