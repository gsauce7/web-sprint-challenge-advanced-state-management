# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve? 
ANSWER:
It solves the prop-drilling problem in a more efficient way. You can logically group components and provide multiple stores for that group that the children in the group consume. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
ANSWER:
  Actions - An object that tells the reducer how to change the state. Based on what you are trying to do (logic), each action does different things to change the state.

  Reducers - Takes the current state and action and returns the new state and gives it to the store.

  Store - stores all your state.



3. What does `redux-thunk` allow us to do? How does it change our `action-creators`? 
ANSWER: redux-thunk allows us to make as many dispatches as we need and work to fetch data from an API, for example. It allows us to make redux asynchronous.

4. What is your favorite state management system you've learned and this sprint? Please explain why! 
ANSWER: I like redux because it spells out how to update our state and read from the state and with thunk, how to get and put data through an API. Once you've learned it, it's clear what each part is doing. There is only one store, unlike with Context API.
