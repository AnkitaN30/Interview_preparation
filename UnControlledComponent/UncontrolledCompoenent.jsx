
const UncontrolledComponent =()=>{
    const [nameVal,setNameVal] = useState('')
    const handleSumit = (event)=>{
        event.preventDefault();
        const valueData = document.querySelector("#inputName").value
        console.log('val',valueData)
    }
return (
    <>
        <form onSubmit={handleSumit}>
            <label>
                Name:
                <input type="text" name="name" id="inputName"/>
            </label>
            <button type ="submit">
                Submit
            </button>
    </form>
    </>
    )  
}

export default UncontrolledComponent;