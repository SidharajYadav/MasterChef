import React, { useState } from 'react';
import { askJarvisChef } from '../utils/askJarvisChef';

const MasterChef = () => {
  const [recipeMessage, setRecipeMessage] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setRecipeMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res_recipe = await askJarvisChef(recipeMessage);
      setRecipe(res_recipe);
    } catch (error) {
      setError("Failed to fetch the recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Ensures the container takes at least the full viewport height
        minWidth: '100vw', // Ensures the container takes at least the full viewport width
        fontFamily: '"Lucida Console", Courier, monospace',
        backgroundColor: '#fff',
        backgroundImage: 'url("https://img.freepik.com/premium-vector/photo-vector-coloured-chef-logo-design-template_763111-106647.jpg?w=500")',
        backgroundSize: 'cover', // Ensure the background image covers the full container
        backgroundPosition: 'center', // Centers the background image
        color: '#333',
      },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '90%',
      maxWidth: '400px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    recipe: {
      marginTop: '20px',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '5px',
    },
    h1:{
        color: '#FF0000' ,
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1} >Ask Your Recipes</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type='text'
          value={recipeMessage}
          onChange={handleInputChange}
          placeholder='Ask your recipes'
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          Ask
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {recipe && <pre style={styles.recipe}>{recipe}</pre>}
    </div>
  );
};

export default MasterChef;



// import React, { useState } from 'react'
// import  {askJarvisChef} from '../utils/askJarvisChef'


// const MasterChef = () => {
//    const[recipeMessage, setRecipeMessage] = useState('');
//    const[recipe, setRecipe] = useState('');
//    const handleInputChange = (e) => {
//     setRecipeMessage(e.target.value)
//    }
//    const handleSubmit = async (e) => {
//     e.preventDefault()
//     const res_recipe = await askJarvisChef(recipeMessage)
//     setRecipe(res_recipe)
//    }
//   return (
//     <div>
//         <h1>Ask Your Recipes</h1>
//         <form onSubmit={handleSubmit}>
//             <input type='text' value={recipeMessage} onChange={handleInputChange} placeholder='Ask your recipes' />
//             <button>Ask</button>
//         </form>
//         <pre>{recipe}</pre>
      
//     </div>
//   )
// }

// export default MasterChef

// import React, { useState } from 'react';
// // import {askJarvisChef} from '../utils/'; // Remove file extension

// const MasterChef = () => {
//   const [recipeMessage, setRecipeMessage] = useState('');

//   const handleInputChange = (e) => {
//     setRecipeMessage(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await callMasterChef(recipeMessage);
//       console.log(response); // Or set it in state to display it in the component
//     } catch (error) {
//       console.error("Failed to fetch the recipe:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Ask Your Recipes</h1>
//       <form onSubmit={handleSubmit}>
//         <input type='text' value={recipeMessage} onChange={handleInputChange} placeholder='Ask your recipes' />
//         <button type="submit">Ask</button>
//       </form>
//     </div>
//   );
// };

// export default MasterChef;
