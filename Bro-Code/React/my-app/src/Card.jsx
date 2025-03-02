import NotionFace from './assets/notionface.png'

function Card(){
      return(
      <div className="card">
        <img src={NotionFace} alt="notion face" className="image" />
       <h2 className='card-title'> Dhruv Singh</h2>
       <p>Lorem ipsum dolor sit  reiciendis.</p>
     </div>
     );
}

export default Card