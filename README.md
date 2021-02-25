# Recipepie
## Social network for people who like cooking.
### Features:
- Registration on the website (with email and with google) and publishing recipes on the platform (instagram-looking, each recipe - separate post).
- Everyone who is not registered can view public recipes for free with some constraints (not seeing list of ingredients and last part of the recipe).
- Followers and following (user will have a profile page).
- Unique recommendations (feed) based on user's activity and subscriptions.
- Premium recipes for followers (also will be posted but covered with something and available to see only for followers of a specific user).
- Search recipes by ingredients and by name (algorithm for searching the most suitable recipes).
- Chat.
- Adding recipes to favourite (list of favourites will be available on a separate page and in bot).
- Telegram bot for viewing favourite recipes and implementing simple search.
- Ingredients dictionary.
### Technologies
- Backend - NodeJS(Fastify, Typescript)
- Frontend - VueJS 3 (Typescript)
- Websockets
- Database - Postgres 13
- CI/CD - Docker, github actions
- SSR - Nuxt.js
- Deployment - Digital Ocean
### Non-functional
- Supported browsers: Chrome, Safari, Firefox
- Server Side Rendering
