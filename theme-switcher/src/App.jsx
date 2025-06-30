import { ThemeProvider } from './context/Theme'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'


function App() {
  // this is for btn 
  const [themeMode,setThemeMode] = useState("light")

  const LightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add("themeMode")
  },[themeMode])


  return (
    <ThemeProvider value ={{themeMode,LightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/*themebtn */}
                  <ThemeBtn></ThemeBtn>
              </div>

              <div className="w-full max-w-sm mx-auto">
                 {/*card */}
                 <Card></Card>
              </div>
           </div>
      </div> 
      

     </ThemeProvider>
  )
}

export default App
