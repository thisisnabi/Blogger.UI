import IcoMoon from 'react-icomoon'
import { IconProps } from 'react-icomoon/src'

import iconSet from './selection.json'

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />

export default Icon
