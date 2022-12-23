import PersonIcon from '@mui/icons-material/Person'
import AppsIcon from '@mui/icons-material/Apps'
import {ISideBarItem} from 'models/types/components'
import {TEXT_COLOR} from 'const/styles'
import {PAGE} from 'routing'

const iconStyle = {
  color: TEXT_COLOR,
}

export const SIDE_BAR_ITEMS: ISideBarItem[] = [
  {
    title: 'SPECIALISTS',
    icon: <PersonIcon sx={iconStyle}/>,
    link: PAGE.SPECIALISTS
  },
  {
    title: 'PROJECTS',
    icon: <AppsIcon sx={iconStyle}/>,
    link: PAGE.PROJECTS
  }
]