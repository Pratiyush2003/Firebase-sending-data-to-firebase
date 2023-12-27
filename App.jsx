import React, { useState } from 'react'
import { db } from './components/Firebase'
import { collection, addDoc } from 'firebase/firestore'


const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const collectionRef = collection(db, 'crud')



  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collectionRef, {name, email})
    console.log('form submited')
  }
  return (
    <>
    <h1 className='text-center'>Firebase CRUD</h1>
        <div className='App d-flex align-items-center justify-content-center pt-5'>
          <form>
            name :- <input type="text" value= {name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <br/>
            email :- <input type='email' value= {email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit data</button>
          </form>
        </div>
    </>
  )
}

export default App
