import React from 'react'
import add from '../../assets/icons/add.svg'

export default function Add() {
    return (
        <div className="floating__box">
            <button className="floating__button"><img className="floating__add" src={add} /></button>
        </div>
    )
}