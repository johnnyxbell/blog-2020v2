---
path: '/blog/test'
date: '2019-05-04'
title: 'My first blog post'
---

# This is my header

These are my thoughts

> This is an important thought

```js
const events = () => (
  <Layout>
    {conferences.map((conference) => (
      <>
        <img src={conference.image} alt={conference.name} />
        <h1>{conference.name}</h1>
        <h2>{conference.date}</h2>
        <a href={conference.link}></a>
      </>
    ))}
  </Layout>
);
```

The end.
