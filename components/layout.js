/*
 * @Author: fzf404
 * @Date: 2022-01-06 14:19:45
 * @LastEditTime: 2022-05-13 13:54:26
 * @Description: 基础框架
 */

import Head from 'next/head'
import GithubCorner from 'react-github-corner'

const Layout = ({ children }) => {
  return (
    <div className="contaner min-h-screen flex flex-col space-y-4 items-center bg-slate-200 ">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
        <title>Pixxel</title>
      </Head>
      <GithubCorner href="https://github.com/fzf404/Pixxel" bannerColor="#64748b" />
      {children}
    </div>
  )
}
export default Layout
