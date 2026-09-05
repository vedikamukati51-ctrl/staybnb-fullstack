# StayBnB

A full-stack vacation rental listing platform inspired by Airbnb — built with Node.js, Express.js, MongoDB, and EJS.

This project started as a static HTML/CSS homepage clone and was rebuilt into a dynamic, database-driven web application with full CRUD functionality.

**Author:** Vedika Mukati
[GitHub](https://github.com/vedikamukati51-ctrl) • [LinkedIn](https://linkedin.com/in/vedika-mukati-b9437a315)

---

## Features

- View all property listings, pulled dynamically from MongoDB
- View a single listing's detail page
- Add a new listing
- Edit an existing listing
- Delete a listing
- Server-side rendering with EJS templates
- RESTful route structure (GET, POST, PUT, DELETE)

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose (ODM)
- **Templating:** EJS
- **Architecture:** MVC (Model-View-Controller)

## Project Structure

```
staybnb/
├── app.js                  # server entry point
├── models/listing.js       # Mongoose schema for a listing
├── routes/listings.js      # CRUD routes
├── init/                   # seed data + seed script
├── views/
│   ├── includes/navbar.ejs
│   └── listings/
│       ├── index.ejs       # all listings
│       ├── show.ejs        # one listing
│       ├── new.ejs         # add listing form
│       └── edit.ejs        # edit listing form
└── public/
    ├── css/style.css
    └── images/
```

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/vedikamukati51-ctrl/staybnb-fullstack.git
cd staybnb-fullstack
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up MongoDB
Use a local MongoDB instance, or create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### 4. Configure environment variables
```bash
cp .env.example .env
```
Then edit `.env` and add your `MONGO_URI`.

### 5. Seed the database
```bash
npm run seed
```

### 6. Run the app
```bash
npm run dev
```
Visit `http://localhost:8080`

## Routes

| Method | Path | Description |
|---|---|---|
| GET | `/listings` | View all listings |
| GET | `/listings/new` | Form to add a listing |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | View a single listing |
| GET | `/listings/:id/edit` | Form to edit a listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

## What's Next

- User authentication (login/signup) so only the listing owner can edit or delete it
- Search/filter listings by location
- Image upload support
- Reviews and ratings
- Booking system with date availability

## Notes

This is a learning project built to apply full-stack fundamentals (Node.js, Express, MongoDB) on top of an original front-end design. Authentication and multi-user support are not yet implemented — currently any visitor can create, edit, or delete listings.

