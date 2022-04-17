import { AddTeacher } from "./AddTeacher"
import { Table } from "./table"


export const Home = (check) => {

    const value = check
    return (
        <div>
            {value ? <><AddTeacher/>
            <br />
            <Table/></> : ""}
        </div>
    )
} 