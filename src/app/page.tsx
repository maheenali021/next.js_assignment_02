import Home from "./Home/navbar";  
import Hero from "./Container/hero";
 
export default function navbar(){
    return(
        <div className="bg-[#252B42] w-full h-full">
            <Home/>
            <Hero/>
           
        </div>
    )
}