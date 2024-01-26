import { Carousel } from "@material-tailwind/react";

export default function HomePage(){
    return(
        <div className="w-4/5 flex flex-col items-center ">
            <div class=" mt-4 mx-4 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col w-11/12 "> 
                <strong class="text-rviolet text-2xl block p-2"> About Me </strong>
                <div class="w-full h-2 bg-rviolet rounded-md"></div>
                <div class="max-w-full flex flex-row justify-between text-rviolet p-2 text-xl">
                    <div>
                        I am a mathematician, educator, and coder from Seattle, Washington. I'm currently on a gap year from graduate school at UNC Chapel Hill,
                        where I have been studying algebraic geometry and topology for the past two years.
                        I completed my Bachelor's degree at UW Seattle in 2020, graduating with honors after writing my thesis on
                        homological algebra, and I plan to finish my Master's this coming Fall. In my year off, I've been tutoring students 
                        in math and learning to code. I have a passion for helping people "see" mathematics the way I do, and I hope to use 
                        my new programming skills to become a better educator. <br/>
                        In my free time, I enjoy making pottery, hiking, and spending time with family! See below for some of my recent activities!
                    </div>
                    <img src='./me.jpg' className='w-1/5 rounded-lg'></img>
                </div>
            </div>

            <div class=" mt-4 mx-4 bg-aviolet mt-26 p-2 rounded-xl flex flex-col w-11/12 "> 
                <strong class="text-rviolet text-2xl block p-2"> Gallery </strong>
                <div class="w-full h-2 bg-rviolet rounded-md"></div>
                <div class="max-w-full flex flex-row justify-center text-rviolet p-2 text-xl">
                    <Carousel className='rounded-xl w-1/4 my-4'>
                            <img src='./Buford.jpg' alt='My plant, Buford, in a planter I made by hand.' className="h-full w-full object-cover"/>
                            <img src='./Bubblyvase.jpg' alt='A vase with an interesting glaze pattern.' className="h-full w-full object-cover"/>
                            <img src='./hparaboloid.png' alt="The best hyperbolic paraboloid I've ever drawn." className="h-full w-full object-cover"/>
                            <img src='./cherryblossoms.jpg' alt='Me under the cherry blossoms at UW, a few months after I graduated.' className="h-full w-full object-cover"/>
                            <img src='./backpacking.png' alt='Me posing in front of a mountain in Olympic National Park.' className="h-full w-full object-cover"/>
                            <img src='./cousins.jpg' alt='My closest cousins and I at Christmas time.' className="h-full w-full object-cover"/>                            
                    </Carousel>
                </div>
            </div>
        </div>

        
        
    );
}