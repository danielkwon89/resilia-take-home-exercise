# Resilia Take Home Exercise
![Resilia Take Home Screenshot](./frontend/public/resilia-take-home-screenshot.png)

## Description
This repo contains my fullstack application for Resilia's take home exercise.

The tech stack consists of the following:
- React frontend with CSS
- Rails backend
- PostgreSQL database

The React frontend uses the `useEffect` hook to fetch the notifications data from the Rails API `/notifications` route.

If the fetch is successful, the notifications data will be stored in the `App.js` component `state` and in `localStorage` as a means of persistent store.

If the fetch fails, the notifications data from `localStorage` will be used to set the `App.js` component `state`.

The `state` is then passed down to the `NotificationsContainer` which handles rendering a `Notification` component for each notification.

## Dependencies

### Frontend
- Node.js
- npm

[You can follow this link to install `Node.js` and `npm`](https://nodejs.org/en/).

<ins>**Note**</ins>: installing `Node.js` will also install `npm`.

### Backend
- Ruby on Rails
- PostgreSQL

[You can follow this link to install `Ruby`](https://www.ruby-lang.org/en/documentation/installation/).

Once you've installed Ruby, run `ruby -v` in your terminal to check if the Ruby installation succeeded.

Once the Ruby installation is confirmed, run this command in your terminal to install Rails:

```
gem install rails
```

Finally, you can [follow this link to install `PostgreSQL`](https://www.postgresql.org/download/).

## Running the Project Locally
Once all the dependencies have been installed, you can clone down the repo:

```
git clone https://github.com/danielkwon89/resilia-take-home-exercise.git
```

This repository contains a `frontend` and `backend` folders.

Open up **two** terminal tabs.

In the first terminal, `cd` into the `frontend` folder.

In the second terminal, `cd` into the `backend` folder.

---

In the <ins>`backend`</ins> terminal, run the following commands in order:

- Install all dependencies
```
bundle install
```

- Create the PostgreSQL database
```
rails db:create
```

- Migrate the database:
```
rails db:migrate
```

- Add seed data into the database
```
rails db:seed
```

- Run the Rails server
```
rails s
```

---

Now in the <ins>`frontend`</ins> terminal, run the following commands in order:

- Install all dependencies
```
npm install
```

- Launch the React server
```
npm start
```

> When you start your `React` server you'll be prompted to use a different port since `localhost:3000` is being used by the `Rails` server.

> Simply press `'y'` in your terminal and your `React` server will run on `localhost:3001`.
