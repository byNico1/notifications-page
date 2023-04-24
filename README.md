# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

I thought I knew everything about what I needed for the project and that I would not need days to complete it
but I was completley wrong, I learned about some really basic things but putting it into practice helped me a lot
to improve my skills

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Notifications page coding challenge](./design/desktop-preview.jpg)
![This is my solution](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/byNico1/notifications-page)
- Live Site URL: [Add live site URL here](https://bynico1.github.io/notifications-page/)

## My process

First I made all the sections in html then I did all css to make the website like the design and then did all the JavaScript to make the page more dynamic, and that was all

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned some things about positioning in css and how to manipulate styles with JavaScript

```html
<div
  id="unread-1"
  onclick="markReadPerId(1)"
  class="notification-container unread"
>
  <img src="assets/images/avatar-mark-webber.webp" alt="profile pic" />
  <div class="inner-notification-container">
    <p>
      <span class="person">Mark Webber</span> reacted to your recent post
      <span class="bold-gray">My first tournament today!</span>
      <span class="red-dot"></span>
    </p>
    <p class="time">1m ago</p>
  </div>
</div>
```

```css
header h1 span {
  text-align: center;
  margin-left: 0.2rem;
  font-size: clamp(0.9rem, 2vw, 0.95rem);
  border-radius: 0.4rem;
  padding: 0.17rem 0.65rem;
  background-color: var(--primary-blue);
  color: var(--white);
}
```

```js
function markRead() {
  console.log("funciona");

  unread1.classList.remove("unread");
  unread2.classList.remove("unread");
  unread3.classList.remove("unread");
  reddot.forEach((el) => {
    el.classList.remove("red-dot");
  });
}
```

### Continued development

I want to improve my knowladge in Javascript frameworks such as Next.js and implement it to more projects

## Author

- Website - [Nicolas Forero](https://bynico1.github.io/notifications-page/)
- Frontend Mentor - [@byNico1](https://www.frontendmentor.io/profile/byNico1)
