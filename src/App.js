import Comments from "./comments/Comments";

function App() {
  return (
    <div className="App">
      <Comments
        commentsUrl="http://localhost:3000/"
        currentUserId="4"
      />
    </div>
  );
}

export default App;
