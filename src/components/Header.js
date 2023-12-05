
import Button from './Button.js'
const Header = ({title,onAdd,showAdd}) => {
  const click=()=>{
    console.log('click')
  }
  return (
  <header className='header' >
    <h1>{title} <br /></h1>
    <Button color={showAdd ? 'Red':'Green'} text={showAdd? 'Close':'Add'} onClick={onAdd} />
  </header>
  )
}
Header.defaultProps = {
  title: 'Task Tracker',
} 


export default Header
