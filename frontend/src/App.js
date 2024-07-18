//1.import area
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { useReducer } from 'react';

//2.defination area

  let initialState = {
      movies : [
        {
           name: "Alone",
           Image : "https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg"
        },
        {
            name: "marse",
           Image : "https://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
        },
        {
            name: "venus",
           Image : "https://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
        }
      ]
    }



    let reducerfunction =(oldState = initialState,action)=>{
        let newState = oldState;
       // console.log("newState--->",newState.movies);
        switch(action.type){
          case"REMOVE_MOVIE":
          //console.log('hii')
          return {
             ...oldState,
             movies: [
              ...oldState.movies.filter((cv,idx,arr)=>{
                   return  cv.name !== action.mname
              })
             ]
          }
             break;
          case"ADD_MOVIE":
          return newState
          //console.log('hello')
            break;
           default:
            return newState;    

        }

      }
      
     // reducerfunction()

function App() {

  //2.1 hook area

  const [newState,dispatch] = useReducer(reducerfunction,initialState);



  //2.2 function defination area



  //2.3 return statement
  return (
      
      <div className='App mt-5 '>
        <h1>Movies name and image</h1>
        <Row className='mt-5'>
          {
            newState.movies &&
                newState.movies.map((cv,idx,arr)=>{
                  return(   <Col key={idx} >
                              <img src={cv.Image} alt='movie'/>
                           
                              <br/>
                              <button className='btn btn-danger' onClick={(e)=>{dispatch({type:"REMOVE_MOVIE", mname:cv.name})}}>D</button>
                              <span>{cv.name}</span>
                             
                            </Col>
                             
                  )
                })
          }
        </Row>
      </div>
    );
}


//3.export area
export default App;
