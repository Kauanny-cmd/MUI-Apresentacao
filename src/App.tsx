import Grid from '@mui/joy/Grid';
import './App.css'
import ButtonAppBar from './components/myAppBar'
import MyButton from './components/myButton';
import BasicCard from './components/myCard';
import BasicModal from './components/myDialog';
import BasicDrawer from './components/myDrawer';
import InputFormProps from './components/myInput';
import Menu from './components/myMenu';
import Snackbar from './components/mySnackbar';
import Table from './components/myTable';

function App() {

  return (
    <>
      <Grid container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}>
          <h1>Componentes mais utilizados do Material UI - MUI</h1>
        <Grid xs={6}>
          <h1>AppBar</h1>
          <ButtonAppBar />
          <h1>Botão</h1>
          <MyButton />
          <h1>Card básico</h1>
          <BasicCard />
          <h1>Modal básico</h1>
          <BasicModal />
        </Grid>
        <Grid xs={6} >
          <h1>Drawer básico</h1>
          <BasicDrawer />
          <h1>Input com form</h1>
          <InputFormProps/>
          <h1>Menu</h1>
          <Menu/>
          <h1>Snackbar</h1>
          <Snackbar/>
          <h1>Table</h1>
          <Table/>
        </Grid>
      </Grid>
    </>
  )
}
export default App
