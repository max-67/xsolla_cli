import React from "react";
import PostList from "./components/PostList";
import Counter from "./components/Counter";
import './styles/App.css';
function App() {

  const [posts] = React.useState([
    {id:1, content: 'JS'},
    {id:2, content: 'JS2'},
    {id:3, content: 'JS3'},
  ])
  return (
    <div className="App">
      <Counter/>
        <PostList post={posts} title={'1 лист'}/>
    </div>
  );
}

export default App;
