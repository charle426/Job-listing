# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./Screenshot%202024-04-11%20at%2015-20-45%20Job%20listing.png)

### Links

- Solution URL: [Add solution URL here](https://jobsliss.netlify.app)
- Live Site URL: [Add live site URL here](https://jobsliss.netlify.app)


### Built with

- Vite
- Tailwind
- [React](https://reactjs.org/) - JS library

### What I learned

This challenge really helped me recap and relearn alot about props, map() and filter() methods it looks like it works fine but I think there a bug help me fixed it if you find it

To see how you can add code snippets, see below:

```js
  const filteredArr = listArr.filter((jobs) => {
      return jobFilterArr.every(filter => {
        if (
          jobs.role.includes(filter) ||
          jobs.level.includes(filter) ||
          jobs.languages.includes(filter) ||
          jobs.tools.includes(filter)
        ){return jobs}
      })
    });
```

### Continued development

I think i need to learn more about the every a nd filter()  methods in javaScript

```js
const filteredArr = listArr.filter((jobs) => {
      return jobFilterArr.every(filter => {
        if (
          jobs.role.includes(filter) ||
          jobs.level.includes(filter) ||
          jobs.languages.includes(filter) ||
          jobs.tools.includes(filter)
        ){return jobs}
      })
    });
```

## Author

- Website - [Uzoma Akachukwu Charles](https://www.akachicodes.netlify.app)
- Frontend Mentor - [@charle426](https://www.frontendmentor.io/profile/charle426)
- Twitter - [@charles_akachi](https://www.twitter.com/charles_akachi)


