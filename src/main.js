var math = require('./math');

var count = 0;

var button = document.createElement('button');
button.innerText = 'click';

var output = document.createElement('p');
output.innerText = count;

button.onclick = function() {
  count = math.add(count, 1);
  output.innerText = count;
};

document.body.appendChild(button);
document.body.appendChild(output);
