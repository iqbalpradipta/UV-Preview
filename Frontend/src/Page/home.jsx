import React from 'react'
import Main from '../Components/main'
import Product from '../Components/product'
import About from '../Components/about'
import Article from '../Components/article'
import Category from '../Components/category'
function Home() {
  return (
    <>
        <Main />
        <Category />
        <Product />
        <About />
        <Article />
    </>
  )
}

export default Home