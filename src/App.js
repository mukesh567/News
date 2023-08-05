import React from "react";
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'

const App = () => {

  return (
    <>
      <div>This is a news website !</div>
       
       <Search/>
       <Pagination/>
       <Stories/>
    </>
  );
};

export default App;
