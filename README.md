# Meet Chatley, your intuitive Artificial Intelligence assistant   (v1.0)
This project makes use of:
- NextJS14, with Typescript.
- Tailwind, CSS and ShadCn for styling.
- NextAuth for authentication.
- Prisma and MongoDB for the backend.





## Getting Started

#### 1. First off, clone into this repository using [the git clone command.](https://github.com/ashleystorm/chatley.git)

#### 2. Once cloned in at your desired file location, navigate to the folder in your code editor or command line and run npm install to get dependecies:
```bash
npm install
```

## API keys and app secrets:

#### Create a .env file in your root directory and add the following variables:
```bash
DATABASE_URL=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
NEXT_PUBLIC_GEMINI_API_KEY=
```

### Getting Keys:

- MongoDB: create a new cluster on MongoDB and copy the API key when prompted by the site (note - add the name of your schema after the [?] symbol inside of the url).
- Gemini API key: visit Google AI studio, sign-in or create an account and get keys from the API dashboard.
- GitHub keys: go to the GitHub developer console inside the settings menu and navigate to OAuth Apps > Create New OAuth App. Once you get the keys generated, add https://localhost:3000 as the Homepage URL and https://localhost:3000/api/auth/callback/github as the Authorization callback URL.
- Google keys: visit Google cloud > Console > APIs and Services > Credentials and create a new app. Get the keys and assign them to their respective variables. Add https://localhost:3000 as the URI and http://localhost:3000/api/auth/callback/google as the Authorized redirect URIs.
- Facebook keys: visit the Meta for developers dashboard > My Apps > Create New App > Configure new app > Go to Basic app settings > get keys.


## Running the project: 
Once the dependencies have been added and API keys and secrets have been implemented, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



