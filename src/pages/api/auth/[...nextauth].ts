import NextAuth , {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions : NextAuthOptions ={
    // Configure one or more authentication providers
    pages: {
        signIn: '/loginsignup', // Ubah path sesuai dengan path yang Anda buat
      },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email", placeholder: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials :any, req) {
                console.log(credentials.email)
              // Add logic here to look up the user from the credentials supplied
              const user = { id: "1", password: "123456", email: "jsmith@example.com" }

              if(credentials.email == user.email && credentials.password == user.password){
                return user;
                // console.log(user)
              }else{
                return null;
              }
        
            }
          })
      // ...add more providers here
    ],
  }

export default NextAuth(authOptions);
