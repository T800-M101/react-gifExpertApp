import React, { useState }from 'react';
import PropTypes from 'prop-types';


const AddCategory = ( {setCategories, categories}) => {


   const [inputValue, setInputValue] = useState('');
   
   
   const handleInputChange = (e) => {
    setInputValue(e.target.value);
   }


   const handleSubmit = (e) => {
       e.preventDefault();
       

     

       if(inputValue.trim().length > 0 ){
           
           //Se pasa como parametros el estado del array y se retorna el nuevo estado del array mediante una arrow function
            setCategories((categories) => [inputValue, ...categories ]);
            setCategories((categories) => [...new Set(categories)]);

           
            console.log(categories);
            setInputValue('');
       }

   }



    return (
        
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                 type="text"
                 value={inputValue} 
                 onChange={(e)=> handleInputChange(e)}
            />
        </form>
    
    )
}

  // Para hacer obligatorio en las props la fuuncion de serCategories;
  AddCategory.propTypes = {
      setCategories: PropTypes.func.isRequired,
      categories:PropTypes.array.isRequired
      
  }
export default AddCategory;
