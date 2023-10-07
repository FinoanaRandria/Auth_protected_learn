import AuthProvider from "./provider/authProvider"
import Routes from "./security"




function App() {


  return (
  
     <AuthProvider>
        <Routes/>
     </AuthProvider>
  
  )
}

export default App
