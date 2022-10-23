import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { changeMode } from '../../features/modo/modoSlice'
export const ToggleSwitch: FC = () => {

    const dispatch = useAppDispatch()
    const modoState = useAppSelector((state) => state.modo.modo)

    const [isToggle, setIsToggle] = useState(modoState)

    const handleChange = () => {
        setIsToggle(!isToggle)
    }
    
    useEffect(() => {
        dispatch(changeMode(isToggle))
    }, [isToggle])
    

    return (
        <>
            <input type="checkbox" checked={isToggle} onChange={handleChange} />
        </>
    )
}
