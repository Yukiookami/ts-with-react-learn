/*
 * @Author: zxy
 * @Date: 2022-04-08 19:42:14
 * @LastEditTime: 2022-04-08 19:46:33
 * @FilePath: /ts-with-react/src/hooks/useURLLoader.tsx
 */
import axios from "axios";
import { useEffect, useState } from "react";

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios.get(url).then(res => {
      setData(res.data)
      setLoading(false)
    })
  }, deps)

  return [data, loading]
}

export default useURLLoader