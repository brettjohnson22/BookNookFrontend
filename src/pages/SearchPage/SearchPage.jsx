import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import noimg from "../../resources/no-image.png"
import "./SearchPage.css"

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState([])
    const [results, setResults] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault();
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${searchTerm}/`)
        console.log(response)
        setResults(response.data.items)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Search For Books:   </h2>
                <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                <br /> 
                <input type="submit" value="Search" />
            </form>
            <br />
            {results && results.map((item) => (
                <>
                {item.volumeInfo.imageLinks?
                <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title}/>: <><img src={noimg} alt="Missing"/></>}
                
                <Link to={`/book/${item.id}`}><p>{item.volumeInfo.title}</p></Link>
                <br />
                </>
            ))}
            
        </div>
    )

}

export default SearchPage