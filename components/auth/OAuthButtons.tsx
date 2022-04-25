import { BuiltInProviderType } from 'next-auth/providers'
import { getProviders, signIn } from 'next-auth/react'
import { ClientSafeProvider, LiteralUnion } from 'next-auth/react/types'
import { useEffect, useState } from 'react'
import { BsGoogle } from 'react-icons/bs'

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
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400">
          Loading
        </button>
      ) : (
        // @ts-ignore
        Object.values(authProviders).map((provider) => {
          if (provider.name === 'Email') return
          return (
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400"
              key={provider.name}
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <div className="flex items-center justify-center gap-2 w-full">
                <BsGoogle />
                {props.textPrefix
                  ? props.textPrefix + provider.name
                  : 'Continue with ' + provider.name}
              </div>
            </button>
          )
        })
      )}
    </>
  )
}

export default OAuthButtons
