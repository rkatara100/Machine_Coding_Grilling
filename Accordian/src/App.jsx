import './App.css'
import Accordion from './Accordion';

function App() {
     const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "HTML Fundamentals",
    content: "Understand the structure of web pages using HTML elements and tags."
  },
  {
    title: "CSS Styling",
    content: "Learn how to style HTML elements using CSS properties, selectors, and layouts."
  },
  {
    title: "DOM Manipulation",
    content: "Explore how to use JavaScript to interact with and manipulate the DOM."
  }
];
  return (
     <Accordion items={items}/>
  )
}

export default App
