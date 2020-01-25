# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JavaScript library that allows you to break your application into functional components.
    React also provides an efficient way for you to handle the state, or data, that is passed from component to component.
    Lastly, it allows you to render all of your components to create a complete application.


2. What does it mean to think in react?
   
   Thinking in react means to plan  how your application or webpage can be broken up into components.
   This allows for easier organization.

3. Describe state.
   
   State is where information is being held within a specific component.
   State is held within a variable and that variable's value can be changed.

4. Describe props.
   
   Props are how you pass information held within state from one component to another.
   Props data does not change, it is strictly read-only and is only meant to be utilized by the component it is being passed too.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are the actions within a useEffect hook.
    To sync side effects, you need to add a dependency to the second argument of the hook. This way, when the useEffect hook runs, it only reinitializes if the set dependency changes.
    By doing this, it can help to avoid going into infinite loops.
