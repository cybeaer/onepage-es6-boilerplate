'use strict';

function test() {
  console.log('script runs');
  let app = document.getElementById('app');
  if(!app)
    document.write('cant get app div!');
  else
    app.innerHTML = '<h1>Hello World</h1>';
}

test();
