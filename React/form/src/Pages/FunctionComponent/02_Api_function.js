
import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import ReusableTable from '../../Component/ReusableTable';
import axios from 'axios';
import { MyContext } from '../../Context'
export default function ApiFunction() {

    const someContext = useContext(MyContext);
    console.log("SOME CONTEXT:", someContext)
    const tableHeader = useMemo(() => ["name", "gender", "email", "picture"], [])
    const recordsPerPage = 50;
    const [totalUsers, setTotalUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [number, setNumber] = useState(0);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers.length / recordsPerPage); i++) {
        pageNumbers.push(i);
    }
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=500")
            .then((result) => {
                console.log("result:", result.data.results);
                setTotalUsers(result.data.results);
                setLoading(false)
                //  this.setState({ totalUsers: result.data.results, loading: false })
            })
            .catch((err) => {
                console.log("error:", err)
            })
    }, []);  //ComponentDidMount()


    // const handlePageChange = (event) => {
    //     setCurrentPage(event.target.id)
    // }

    const handlePageChange = useCallback(
        (event) => setCurrentPage(event.target.id),
        [currentPage],
    )
    let lastIndex = useMemo(() => {
        console.log("last index calculated")
        return currentPage * recordsPerPage
    }, [currentPage, recordsPerPage]);


    let firstIndex = useMemo(() => lastIndex - recordsPerPage, [lastIndex, recordsPerPage])

    const usersToDisplay = useMemo(() => totalUsers.slice(firstIndex, lastIndex), [firstIndex, lastIndex, totalUsers])
    if (loading) {
        return <h1>Loading.......</h1>
    }

    return (
        <div>


            {someContext.name} <br />
            <button onClick={() => setNumber(number + 1)}> number</button>
            <ReusableTable header={tableHeader} data={usersToDisplay} startPage={firstIndex} />
            <div>
                <ul>
                    {pageNumbers.map((page) => {
                        return <li id={page} onClick={handlePageChange}>{page}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
