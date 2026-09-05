# StayBnB - CRUD version

Now with full Create, Read, Update, Delete for listings.

## Setup

1. npm install
2. cp .env.example .env  -> put your MONGO_URI in there (from MongoDB Atlas)
3. npm run seed   (loads 4 sample listings into your db)
4. npm run dev
5. open http://localhost:8080

## Routes

- GET /listings         -> all listings
- GET /listings/new     -> form to add one
- POST /listings        -> saves the new one
- GET /listings/:id     -> one listing's page
- GET /listings/:id/edit -> pre-filled edit form
- PUT /listings/:id     -> saves the edit
- DELETE /listings/:id  -> removes it

## Note

The "Register Now" button is still just a placeholder (like it was in the
original static site) - login/signup would be the next feature to add,
using something like passport-local-mongoose.
