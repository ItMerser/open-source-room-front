import React, {FC, ReactNode, SyntheticEvent, useState} from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {Box, Tab, Tabs} from '@mui/material'
import {SIDE_BAR_ITEMS} from 'const/components'
import {PAGE} from 'routing'
import SideBar from 'components/common/SideBar/SideBar'
import SignUpForm from 'components/forms/SignUpForm/SignUpForm'
import SignInForm from 'components/forms/SignInForm/SignInForm'
import {TEXT_COLOR, BACKGROUND_COLOR} from 'const/styles'

interface TabItemProps {
    children?: ReactNode
    index: number
    value: number
}

enum FORM {
    SIGNIN = 0,
    SIGNUP = 1
}

const TabItem = (props: TabItemProps) => {
    const {children, value, index, ...other} = props

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </Box>
    )
}

const allProps = (index: FORM) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const Authentication: FC = () => {
    const [form, setForm] = useState<FORM>(FORM.SIGNIN)
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false)

    const location = useLocation()

    if (isSuccessful) {
        return <Navigate to={PAGE.HOME} state={{location}}/>
    }

    const changeForm = (event: SyntheticEvent, newForm: FORM) => {
        setForm(newForm)
    }

    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>
            <Box sx={styles.content}>
                <Box sx={styles.tabsBlock}>
                    <Tabs value={form} onChange={changeForm}>
                        <Tab label="sign in" {...allProps(FORM.SIGNIN)} />
                        <Tab label="sign up" {...allProps(FORM.SIGNUP)} />
                    </Tabs>
                </Box>

                <TabItem index={FORM.SIGNIN} value={form}>
                    <SignInForm setAuthState={setIsSuccessful}/>
                </TabItem>
                <TabItem index={FORM.SIGNUP} value={form}>
                    <SignUpForm setAuthState={setIsSuccessful}/>
                </TabItem>
            </Box>
        </Box>
    )
}

export default Authentication

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
        backgroundColor: BACKGROUND_COLOR
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
    },
    tabsBlock: {
        marginTop: '1rem'
    }
}