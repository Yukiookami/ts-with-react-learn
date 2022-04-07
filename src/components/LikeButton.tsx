/*
 * @Author: zxy
 * @Date: 2022-04-07 17:11:42
 * @LastEditTime: 2022-04-07 17:19:27
 * @FilePath: /ts-with-react/src/components/LikeButton.tsx
 */
import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({
    like: 0,
    on: true
  })

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