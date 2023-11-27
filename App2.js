import React, {useState, useEffect}  from "react"
import './App.css';
import  axios  from "axios"
import Carousel from "react-bootstrap/Carousel";

function App() {

  const [data, setData] = useState([])
const  [loaded, setLoaded] = useState(false)

  const fetchbook = async () => {
    const  response = await axios.get("./books.json")
   
    setData(response.data)//data.data = object.book
   setLoaded (true);
  }


 useEffect ( () => {
    fetchbook()

  }, []);
  console.log('loaded:', loaded, "data:", data);


  return (
    <>
     
      <div className= "container col-6 " style ={{maxWidth: "auto", marginTop: "200px", }}> 
      <Carousel >
        {loaded && data.books.map((book, index)=> (
        <Carousel.Item interval={2000} key= {index}><h3>{book.title}</h3>
          <div className="card bg-info carouselItem" >
          <h5 className="card-header bg-info">{book.title}</h5>
            <div className="card-body bg-warning">
              <h5>{book.subtitle}</h5>

                <table className="table ">
                  <tbody >
                      <tr >
                          <td className="text-success font-weight-bold">Title:</td>
                          <td>{book.title}</td>
                      </tr>
                      <tr>
                          <td className="text-success font-weight-bold">Subtitle:</td>
                          <td>{book.subtitle}</td>
                      </tr>
                      <tr>
                          <td className="text-success font-weight-bold">Author:</td>
                          <td>{book.author}</td>
                      </tr>
                      <tr>
                          <td className="text-success font-weight-bold">Publisher:</td>
                          <td>{book.publisher}</td>
                      </tr>
                      <tr>
                          <td className="text-success font-weight-bold">Description:</td>
                          <td>{book.description}</td>
                      </tr>
                  </tbody>
                </table>

            </div>
          </div>


        </Carousel.Item>
          ))}
      </Carousel>

    </div>
    </>

  )
}

export default App;
