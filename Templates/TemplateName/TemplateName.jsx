import React, { useEffect, useState } from 'react'
import classes from './TemplateName.module.css'

export default function TemplateName() {
    useEffect(() => {
    document.title='TemplateName'
    })

    return <>
        <h2>
            TemplateName
        </h2>
    </>
}