import Link from 'next/link'

interface Props {
  h: string
  w: string
  bg: string
  border: string
  shadow: string
  href?: string
  onClick?: () => void
  external?: boolean
  children?: React.ReactNode
}

// <button className="group bg-black rounded-2xl border-none cursor-pointer w-full">
//   <span className="block py-[0.4rem] whitespace-nowrap font-medium rounded-2xl border-black border-[0.2rem] border-b-[0.1rem] bg-white -translate-y-[6px] group-active:-translate-y-[2px]">
//     Sign in with email
//   </span>
// </button>

const ShadowButton: React.FC<Props> = (props) => {
  return (
    <button
      className="relative cursor-default font-medium tracking-tight whitespace-nowrap"
      type="button"
      style={{
        height: props.h,
        width: props.w
      }}
      onClick={() => {
        if (props.onClick) {
          props.onClick()
        }
      }}
    >
      {!props.external && props.href ? (
        <Link href={props.href} scroll={false} passHref>
          <div
            className={
              'flex cursor-pointer hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative rounded-2xl border-[0.2rem] ' +
              props.bg +
              ' ' +
              props.border
            }
            style={{
              height: props.h,
              width: props.w
            }}
          >
            {props.children}
          </div>
        </Link>
      ) : !props.onClick ? (
        <a href={props.href} rel="noreferrer" target="_blank">
          <div
            className={
              'flex cursor-pointer hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative rounded-2xl border-[0.2rem] ' +
              props.bg +
              ' ' +
              props.border
            }
            style={{
              height: props.h,
              width: props.w
            }}
          >
            {props.children}
          </div>
        </a>
      ) : (
        <div
          className={
            'flex cursor-pointer hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative rounded-2xl border-[0.2rem] ' +
            props.bg +
            ' ' +
            props.border
          }
          style={{
            height: props.h,
            width: props.w
          }}
        >
          {props.children}
        </div>
      )}
      <div
        className={'absolute rounded-2xl -bottom-1 ' + props.shadow}
        style={{
          height: props.h,
          width: props.w
        }}
      />
    </button>
  )
}

export default ShadowButton
