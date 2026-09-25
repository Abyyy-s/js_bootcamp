
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
      posts: 754,
      followers: 1.1,
      following: 1000,
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




  function check(n) {
    if (n > 0) {
      console.log("Positive");
    } else if (n < 0) {
      console.log("Negative");
    } else {
      console.log("Zero");
    }
  }
  check(5);
  check(-3);
  check(0);




  function largest(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }

  console.log(largest(10, 25, 15));





  function countEven(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++;
      }
    }

    return count;
  }

  const numbers = [1, 2, 4, 7, 8, 10];

  console.log(countEven(numbers));



  function findNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return true;
      }
    }

    return false;
  }

  const numb = [10, 20, 30, 40, 50];

  console.log(findNumber(numbers, 30));
  console.log(findNumber(numbers, 25));





  const Ytube = [
    {
      V_name: "Introducing Aeries......",
      Cname: "TATA.CARS",
      S_count: 511000,
      like: 1100,
      views: 4161,
      date: "sept 25",
      year: 2026,

      hashtags1:[
        {
          H1: "Aeris",
          H2: "DefeatBoring",
          H3: "TataCars"
        }
      ],

      description: "the descriptions..........",
      link: "yt.com",

      hashtags2:[
        {
          H1: "TataAeris",
          H2: "DefeatBoring",
          H3: "TataCars",
          H4: "NothingToFear"
        }
      ],

      comments:[
        {
        username:"Aby",
        comment_text:"Hello im aby"
        },
        {
          username:"A",
          comment_text:"Hello im aby"
        }
      ],

      link: "google.com"
    }
  ]

  console.log(Ytube)









const naam="Abyyy"


  return (
    <div>
      <div>
         <h1 className='text-8xl text-amber-300'>This is my first next.js project</h1>
         <p className='text-6xl text-blue-800'>{naam}</p>
      </div>
    </div>
  );
};

export default Page;
