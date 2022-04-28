import { debounce } from 'lodash'
import { useCallback, useState } from 'react'

const EmailField: React.FC = () => {
  const [emailValid, setEmailValid] = useState(false)
  const [emailTaken, setEmailTaken] = useState(false)

  const DEBOUNCE_DELAY = 250
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncer = useCallback(
  //   debounce(async (value) => {
  //     const user = await getUserByEmail(String(value))
  //     user ? setEmailTaken(true) : setEmailTaken(false)
  //   }, DEBOUNCE_DELAY),
  //   []
  // )

  // const isValid: RegExpMatchArray | null = String(value)
  //   .toLowerCase()
  //   .match(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   )

  return (
    <div>
      <input
        className="w-full px-4 py-3 bg-gray-100 rounded-xl outline-none tracking-tight placeholder:font-medium"
        type="email"
        name="Email"
        id="email-input"
        placeholder="Email"
        spellCheck={false}
      />
    </div>
  )
}

export default EmailField
