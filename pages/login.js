import styled from 'styled-components'
import Head from 'next/head'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }
  return (
    <Container>
      <Head>
        <title>Hello</title>
      </Head>
      <LoginContainer>
        <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png' />
        <Button onClick={signIn} variant='outlined'>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #3cbc28;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Logo = styled.img`
  width: 200px;
  height: 200px;
`
