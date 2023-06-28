'use strict';

const Commenter = function (userName, text) {
  this.userName = userName;
  this.text = text;
};

Commenter.prototype.render = function () {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<img width="100px" src="img/${this.userName}.jpg" alt='Dan'> <b> ${this.userName}: </b><em>${this.text}</em>`;
  return listItem;
};



// set up some variables for DOM access
const chatList = document.getElementById('chat-list');
const chatForm = document.getElementById('chat-form');

let allComments = [];

const renderAllComments = function () {
  chatList.innerHTML = '';
  for (let i = 0; i < allComments.length; i++) {
    chatList.appendChild(allComments[i].render());
  }

};


function handleCommentSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target.who.value);
  console.log(event.target.says.value);
  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty');
  }
  // user types in 'jonny' for the first input box or the input box that has the name attribute that is equal to 'who'
  const commenter = event.target.who.value;
  // commenter would then be equal to the value of 'jonny'
  let remark = event.target.says.value;

  if (commenter === 'Dan') {
    remark = '@$^#$%$^@#$%@';
  }
  if (commenter === 'Benton') {
    remark = remark.toUpperCase();
  }
  if (commenter === 'Jonny') {
    remark = 'Heyyyyyy\'s Jonny!!';
  }
  const newComment = new Commenter(commenter, remark);
  console.log(newComment);
  console.log(`Comment by ${event.target.who.value} at ${Date()}`);

  // event.target.who.value = null;
  // event.target.says.value = null;
  allComments.push(newComment);
  renderAllComments();
}

// Add Event Listeners for comment submission form

chatForm.addEventListener('submit', handleCommentSubmit);

