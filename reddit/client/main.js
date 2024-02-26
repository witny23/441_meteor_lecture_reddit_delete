<<<<<<< HEAD
import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
  // so far we have 3 ways to import
  // 1. relative paths './../imports/file';
  // 2. npm libraries by providing the name 'react-dom'
  // 3. meteor modules 'meteor/meteor' - the meteor/ removes name conflicts

// Meteor.startup waits for the dom to be renderded before doing anything
Meteor.startup(function () {  // this takes a function as its one and only argument
  // we now need to render jsx which is javascript xml
  //let jsx = <p>this is from client/main.js</p>
  let name = 'newman';
  let jsx = <p>hello {name}!</p>;

  // the following causes problems b/c it violates the rule that you are
  //    only allowed to have one root element
  //let jsx = <p>this is from client/main.js</p><p>hello {name}!</p>;
  // instead, we need to wrap it in a single root element i.e., <div>
  jsx = <div><p>this is from client/main.js</p><p>hello {name}!</p></div>;
  // the previous works but it is not formatted all that well. Instead:
  jsx = (
   <div>
     <p>this is from client/main.js</p>
     <p>hello {name}!</p>
   </div>
  );

  ReactDOM.render(jsx, document.getElementById('content'));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });

  return formattedPosts;
};

>>>>>>> 60aa286e8d5beb3a5033bfeda1114b4b1258dbb3

Meteor.startup(function () {

<<<<<<< HEAD
=======
  const posts = [{
                    _id: '01',
                    topic: 'cats',
                    votes: 5,
                  },
                  {
                    _id: '02',
                    topic: 'dogs',
                    votes: 2,
                  },
                  {
                    _id: '03',
                    topic: 'birds',
                    votes: 17,
                  }
                ];


  let title = '441 reddit';
  let jsx = (
         <div>
            <h1>{title}</h1>

            {/*renderPosts('hi')*/}
            {renderPosts(posts)}
         </div>
        );

  ReactDOM.render(jsx, document.getElementById('content'));

>>>>>>> 60aa286e8d5beb3a5033bfeda1114b4b1258dbb3
});
