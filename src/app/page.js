



import React from 'react';

const Page = () => {

  let name = "Aby";

  const greet = (a) => console.log("My name is:", a);
  greet(name);

  const add = (a, b) => {
    return a + b;
  };

  console.log(add(2, 3));

  for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
  }

  const student = {
    name: "Aby",
    age: 20,
    dep: "CSE",
    roll: 5
  }

  console.log(student);


  const arr = [{
    name: "Aby",
    age: 20,
    dep: "CSE",
    roll: 5
  },
  {
    name: "sree",
    age: 20,
    dep: "CSE",
    roll: 58
  },
  {
    name: "paari",
    age: 20,
    dep: "CSE",
    roll: 500
  }
  ]
  console.log(arr)














  const insta = [
    {
      name: "matt",
      posts: "754",
      followers: "1.1",
      following: "1000",
      bio: "self taught pastry .........",
      link: "google.com"
    }
  ]

  console.log(insta)






  const post = [
    {
      username: "matt",
      image: "754",
      like: "1.1",
      commetnt: "1000",
      comment: "self taught pastry .........",
      link: "google.com"
    }
  ]

  console.log(post)























  return (
    <div>
      Page
    </div>
  );
};

export default Page;
