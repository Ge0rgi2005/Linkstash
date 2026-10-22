# Linkstash: setup (5 minutes)

1. Create a free Neon database at https://neon.tech (New Project -> name it linkstash).
2. On the project page click **Connect**, copy the connection string.
3. In this folder, copy `.env.example` to `.env.local` and paste the string as DATABASE_URL.
4. In a terminal inside this folder run:

   npm install
   npm run db:migrate
   npm run dev

5. Open the address the terminal prints (http://localhost:3000, or 3001 if 3000 is busy).

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com: Add New -> Project -> import the repo.
3. Add DATABASE_URL under Environment Variables (same value as .env.local), then Deploy.
4. Tables are created by step 4 above (run `npm run db:migrate` once locally; it targets the same Neon database).
