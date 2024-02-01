This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all the required packages:

```bash
yarn
```

You'll need to populate your own .env variables, using the following as a baseline:

```
DATABASE_URL="your postgresql database url"

# Homepage of the application
NEXTAUTH_URL="http://localhost:3000"

# Secret phrase to use in hashing any information. Can be anything you want, but I recommend using OpenSSL to genererate a lengthy string (like 128 characters in length).
NEXTAUTH_SECRET=""

# You'll need to create a new OAuth Application within your GitHub account settings. Then populate the following fields with the corresponding values.
GITHUB_ID=""
GITHUB_SECRET=""

```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
