import { useState, useCallback, useEffect, useRef } from 'react'
 

function App() {
  const [password, setpassword] = useState("")
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [length, setlength] = useState(8)

  let passref = useRef(null)

  let copytocoard = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passganrator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numallowed) str += "1234567890";
    if (charallowed) str += "!@#$%^&"

    for (let i = 1; i <= length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(Char)
    }
    setpassword(pass)

  }, [numallowed, charallowed, length, setpassword])


  useEffect(() => {
    passganrator();
  }, [passganrator, numallowed, charallowed, length])


  return (
    <>
      <div className='bg-gray-700 wm-auto px-5 py-5 my-auto'>

        <h1 className='text-3xl text-white text-center'> Get your Password </h1>

        <div className='flex item-center justify-center overflow-hidden mb-4'>
          <input
            type='text'
            className='outline-none py-2 bg-white my-3 text-center'
            placeholder='password'
            value={password}
            readOnly
            ref={passref}
          />
          <button className='bg-blue-500 py-2 my-3 text-white' onClick={copytocoard}>Copy</button>
        </div>

        <div className='flex item-center justify-center overflow-hidden mb-4 text-white'>
          <input
            type='range'
            value={length}
            max={20}
            min={8}
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex item-center justify-center overflow-hidden mb-4 text-white'>
          <input type="checkbox"
            defaultChecked={numallowed}
            id='numberinput'
            onChange={() => {
              setnumallowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberinput">Number</label>
          <div className='mx-4'>
            <input type="checkbox"

              defaultChecked={charallowed}
              id='charinput'
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="charinput">Spical Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
