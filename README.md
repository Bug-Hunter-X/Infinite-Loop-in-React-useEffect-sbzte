# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrectly updating state within the `useEffect` hook. 

The `bug.js` file contains the buggy component. The `bugSolution.js` file shows the corrected version.

## Problem

The initial component has a useEffect hook which tries to update the count state within the hook itself. This creates an infinite loop because every time the count changes the useEffect runs again.

## Solution

The solution involves removing the dependency array [] to make the useEffect run only once after the first render, or updating the state with a callback to get the latest value of count. The other possible solution would be to use useRef.