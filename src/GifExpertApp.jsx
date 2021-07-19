import React, {useState}  from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const categoriesArr = ['One Punch'];

    const [categories, setCategories] = useState(categoriesArr);

    //Se pasa como parametros el estado del array y se retorna el nuevo estado del array mediante una arrow function
    // const handleAdd = () => {
    //     setCategories((categories) => [...categories, 'Avengers'] )
    // }
   

  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory 
                   setCategories = {setCategories}
                   categories={categories}/>
        <hr />
       
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                           key={category}
                           category={category}
                    />
                ))
            }
        </ol>
    </div>
  )
  }

  

export default GifExpertApp;


