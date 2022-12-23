import React, {FC} from 'react'
import {Box} from '@mui/material'
import SideBar from 'components/common/SideBar/SideBar'
import {SIDE_BAR_ITEMS} from 'const/components'

const Home: FC = () => {
    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default Home

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
}