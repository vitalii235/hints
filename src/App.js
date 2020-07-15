import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import TestForRedux from './components/TestForRedux';
import ClassComponentForContext from './components/ClassComponentForContext';
import { ProviderFunction } from './context/Context';
import HocTest from './HOC/HocTest';
import HocTest2 from './HOC/HocTest2';

const App = () => {

  const [totalPosts] = useState(100)
  const [postsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState([])

  const pages = `https://jsonplaceholder.typicode.com/posts?userId=${currentPage}`
  useEffect(() => {
    const call = async () => {
      try {
        const r = await axios.get(pages)
        setPosts(r.data)
      } catch (e) {
        console.error(e);
      }
    }
    call()
  }, [currentPage])

  const paginate = (number) => {
    setCurrentPage(number)
  }

  return (
    <div className='container mt-5'>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        paginate={paginate}
        pages={pages}
      />
      <div>
        <Posts
          posts={posts} />
      </div>
      <hr />
      <h2>Props with Class Redux</h2>
      <div>
        <TestForRedux />
      </div>
      <hr />
      <h2>Props with context</h2>
      <ProviderFunction state={{ name: 'Vitalii', loggedIn: true }}>
        <ClassComponentForContext />
      </ProviderFunction>
      <hr />
      <h2>HOC</h2>
      <HocTest />
      <HocTest2/>
    </div>
  );
};

export default App;