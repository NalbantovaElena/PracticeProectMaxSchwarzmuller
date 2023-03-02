
const AddUser = props =>{

    const AddUserHandler = (event) =>{
        //за да не се презарежда страницата
          event.preventDefault();
    }

    return(
    
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="username">Age (Years)</label>
            <input id="username" type="number" />
            <button type="submit">Add user</button>
        </form>
    )

}

export default AddUser;
