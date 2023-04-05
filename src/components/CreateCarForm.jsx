import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
  const [name, setName] = useState(' ')
  const createCar = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <form className={styles.forms}>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={(e) => createCar(e)}>Create car</button>
    </form>
  )
}

export default CreateCarForm
