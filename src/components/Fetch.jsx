import { useEffect, useState } from "react"


function Hook(https){
    const [fetchData, setFetchData] = useState([])
    const [error, setError] = useState("")
    const [change, setChange] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch(https)
        .then((response) => {
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            return response.json()})
        .then((data) => {
            setFetchData(data)
        })
        .catch((errors) => setError(errors.message))
        .finally(() => {
            setLoading(false)
        });
    }, [change]);

    return {fetchData, error, loading, setChange, change}
}

export default function Fetch(){

    const {fetchData: news, error: errorMessage, loading, setChange, change} = Hook("https://www.boredapi.com/api/activity/");



    return (
        <div className="container">
            {!!errorMessage && !news.activity ? <div>{errorMessage}</div> : ""}
                {loading && !news.activity ? <div className="group-name">Loading...</div> : ""}
                <div className="name">{news.activity}</div>
            <div role="button" tabIndex={0} className="button" onClick={() => change ? setChange(false) : setChange(true) }>just something</div>
        </div>
    );
};