import NextAuth, { TokenSet } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { db } from '../../../src/firebase'
import * as firestoreFunctions from 'firebase/firestore'

export default NextAuth({
  // Adapter
  adapter: FirebaseAdapter({ db: db, ...firestoreFunctions }),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'undefined',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'undefined'
      // TODO: Customize data saved on sign up
      // profile: (profile: P, tokens: TokenSet) => {

      // }
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ],

  // The callbacks
  callbacks: {
    // async session({ session, user, token }) {
    //   // console.log('SESSION:', session, user, token)
    //   return session
    // },
    // async signIn({ user, account, profile, email, credentials }) {
    //   // Change user here
    //   const test = { ...user, username: '@jurre' }
    //   user = test
    //   // console.log('SIGNIN:', user, account, profile, email, credentials)
    //   return true
    // }
  },

  secret: process.env.JWT_SECRET,

  pages: {
    signIn: '/sign-in',
    verifyRequest: '/activate'
  }
})
