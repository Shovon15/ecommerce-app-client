import google from 'next-auth/providers/google';
// import github from 'next-auth/providers/github';
import nextAuth from 'next-auth';


export const authOptions = {
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // github({
        //     clientId: process.env.GITHUB_CLIENT_ID!,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        // }),
    ],
    secret: process.env.AUTH_SECRET!
}

export default nextAuth(authOptions);