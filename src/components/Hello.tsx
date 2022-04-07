/*
 * @Author: zxy
 * @Date: 2022-04-07 16:57:13
 * @LastEditTime: 2022-04-07 17:03:29
 * @FilePath: /ts-with-react/src/components/Hello.tsx
 */
import React from "react";

interface IHelloProps {
  msg?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.msg}</h2>
} 

Hello.defaultProps = {
  msg: 'Hello World'
}

export default Hello