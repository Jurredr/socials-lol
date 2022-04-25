interface Props {
  text: string
}

const DividerText: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-center items-center w-full gap-3">
      <hr className="w-full border-neutral-200 border rounded-full" />
      <p className="font-medium">{props.text}</p>
      <hr className="w-full border-neutral-200 border rounded-full" />
    </div>
  )
}

export default DividerText
