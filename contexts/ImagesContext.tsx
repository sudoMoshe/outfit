import { createContext,useContext } from 'react';
type imagesType  =any[];
const ImagesContext = createContext<imagesType>([]);
export const useImages=()=>{

    const context = useContext(ImagesContext);
    if (!context) {
        throw new Error("images provider not found");
      }
      return context;
} 

export default ImagesContext.Provider;