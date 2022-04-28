const UsernameField: React.FC = () => {
  return (
    <div className="flex w-full px-4 py-3 bg-gray-100 rounded-xl">
      <p className="font-medium">socials.lol/@</p>
      <input
        className="bg-transparent outline-none tracking-tight placeholder:font-medium"
        spellCheck={false}
        type="text"
        name="Username"
        id="username-input"
        placeholder="username"
      />
    </div>
  )
}

export default UsernameField
