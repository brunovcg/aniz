import Button from "../Button"
import { useImperativeHandle } from "react"

const DivInput = ({value, edit}) => {

    


  return (
<div>

    {edit ? <input value={value}/> : <div>{value}</div>}
    {!edit && <Button>Edit</Button>}
    {edit && <Button>Cancel</Button>}
    {edit && <Button>Save</Button>}
   
</div>
    

  )
}

export default DivInput