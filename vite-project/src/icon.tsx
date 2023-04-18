import c from 'classnames'

interface IconProps {
      name: string
      className?: string
}

export const Icon: React.FC<IconProps> = ({ className, name }) => {
      return (
            <span>
                  <svg className={c(className, 'icon')} >
                        <use xlinkHref={`#${name}`}></use>
                  </svg>
            </span >
      )

}



// import s from './Icon.module.scss'

// interface Props {
//       name: string
//       className?: string
//       onClick?: () => void
// }
// export const Icon: React.FC<Props> = ({ name, className, onClick }) => {
//       return (
//             <svg className={c(className, 'icon')} onClick={onClick} >
//                   <use xlinkHref={`#${name}`}></use>
//             </svg>
//       )
// }