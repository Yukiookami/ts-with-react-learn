/*
 * @Author: zxy
 * @Date: 2022-04-07 16:57:13
 * @LastEditTime: 2022-04-09 15:38:26
 * @FilePath: /ts-with-react/src/components/Hello.tsx
 */
import React, { useContext } from "react";
import { ThemeContext } from "../App";

interface IHelloProps {
  msg?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)

  const style = {
    color: theme.color,
    backgroundColor: theme.background
  }

  return <h2 style={style}>{props.msg}</h2>
} 

Hello.defaultProps = {
  msg: 'Hello World'
}

export default Hello