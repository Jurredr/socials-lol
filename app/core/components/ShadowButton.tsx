import { Link } from 'blitz'

interface Props {
  h: string
  w: string
  bg?: string
  border?: string
  href: string
  external?: boolean
}

const ShadowButton: React.FC<Props> = (props) => {
  return (
    <button
      className="relative cursor-default font-medium tracking-tight whitespace-nowrap"
      type="button"
    >
      {!props.external && (
        <Link href={props.href} scroll={false} passHref>
          <div
            className={
              'flex cursor-pointer hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative rounded-2xl border-[0.2rem] ' +
              ('bg-' + props.bg ?? 'white') +
              ' ' +
              ('border-' + props.border ?? 'black') +
              ' ' +
              ('h-' + props.h) +
              ' ' +
              ('w-' + props.w)
            }
          >
            {props.children}
          </div>
        </Link>
      )}
      {props.external && (
        <a href={props.href} rel="noreferrer" target="_blank">
          <div
            className={
              'flex cursor-pointer hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative rounded-2xl border-[0.2rem] ' +
              ('bg-' + props.bg ?? 'white') +
              ' ' +
              ('border-' + props.border ?? 'black') +
              ' ' +
              ('h-' + props.h) +
              ' ' +
              ('w-' + props.w)
            }
          >
            {props.children}
          </div>
        </a>
      )}
      <div
        className={
          'absolute rounded-2xl -bottom-1 ' +
          ('h-' + props.h) +
          ' ' +
          ('w-' + props.w) +
          ' ' +
          ('bg-' + (props.border ?? 'black'))
        }
      />
    </button>
  )
}

export default ShadowButton
