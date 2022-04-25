import { motion } from 'framer-motion'
import { BuiltInProviderType } from 'next-auth/providers'
import { getProviders, signIn } from 'next-auth/react'
import { ClientSafeProvider, LiteralUnion } from 'next-auth/react/types'
import { useEffect, useState } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { basicHoverTapScale } from '../../src/motionpresets'

interface Props {
  textPrefix?: string
}

const OAuthButtons: React.FC<Props> = (props) => {
  const [authLoading, setAuthLoading] = useState(true)
  const [authProviders, setAuthProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null)

  const loadOAuth = async () => {
    const providers = await getProviders()
    setAuthProviders(providers)
    setAuthLoading(false)
  }

  // Load on mount
  useEffect(() => {
    loadOAuth()
  }, [])

  return (
    <>
      {authLoading ? (
        <motion.button
          className="w-full rounded-xl px-2 py-[0.65rem] text-white font-medium"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 95%, rgba(255,253,210,1) 100%)'
          }}
          whileHover={basicHoverTapScale.hover}
          whileTap={basicHoverTapScale.tap}
          transition={{ duration: basicHoverTapScale.duration }}
        >
          Loading...
        </motion.button>
      ) : (
        // @ts-ignore
        Object.values(authProviders).map((provider) => {
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
      )}
    </>
  )
}

export default OAuthButtons
