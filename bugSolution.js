```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    //Now the countRef will hold the latest count value and the state is correctly updated
    countRef.current = countRef.current + 1;
  }, []);

  return (
    <div>
      <p>Count: {countRef.current}</p>
    </div>
  );
}
```