import { motion } from 'framer-motion'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react'
import { BsGoogle } from 'react-icons/bs'
import { basicHoverTapScale } from '../../src/motionpresets'

interface Props {
  textPrefix?: string
  authProviders: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}

const OAuthButtons: React.FC<Props> = (props) => {
  return (
    <>
      {
        // @ts-ignore
        Object.values(props.authProviders).map((provider) => {
          if (provider.name === 'Email') return
          return (
            <motion.button
              className="w-full rounded-xl px-2 py-[0.65rem] text-white font-medium"
              style={{
                background:
                  'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 95%, rgba(255,253,210,1) 100%)'
              }}
              whileHover={basicHoverTapScale.hover}
              whileTap={basicHoverTapScale.tap}
              transition={{ duration: basicHoverTapScale.duration }}
              key={provider.name}
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <div className="flex items-center justify-center gap-2 w-full">
                <BsGoogle />
                {props.textPrefix
                  ? props.textPrefix + provider.name
                  : 'Continue with ' + provider.name}
              </div>
            </motion.button>
          )
        })
      }
    </>
  )
}

export default OAuthButtons
