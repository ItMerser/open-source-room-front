import React, {FC} from 'react'
import {Button, Dialog, DialogActions, DialogTitle} from '@mui/material'

interface Props {
    isOpen: boolean
    agreeResponse: () => any
    disagreeResponse: () => any
    title?: string
    agreeButtonText?: string
    disagreeButtonText?: string
}

const DEFAULT_TITLE = 'Do you really agree'
const DEFAULT_AGREE_BUTTON_TEXT = 'AGREE'
const DEFAULT_DISAGREE_BUTTON_TEXT = 'DISAGREE'

const ConfirmDialog: FC<Props> = (props) => {
    return (
        <Dialog open={props.isOpen}>
            <DialogTitle>
                {props.title ? props.title : DEFAULT_TITLE}
            </DialogTitle>
            <DialogActions>
                <Button onClick={props.disagreeResponse} autoFocus size="small">
                    {props.disagreeButtonText ? props.disagreeButtonText : DEFAULT_DISAGREE_BUTTON_TEXT}
                </Button>
                <Button onClick={props.agreeResponse} size="small">
                    {props.agreeButtonText ? props.agreeButtonText : DEFAULT_AGREE_BUTTON_TEXT}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog