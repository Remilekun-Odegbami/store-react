import Slashed from '../Categories/Slashed';
import Latest from '../Categories/Latest';


export default function Product () {

        return (
          <>
          <div>
            <h1 className='text-center text-info'>Latest Products</h1>
            <Latest />

          </div>                 
          <div>
            <h1 className='text-center text-info mt-5'>Slashed Products</h1>
            <Slashed />            
          </div>                 
          </>

  )
}
