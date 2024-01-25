

export default function HomePage(){
    return(
        <div className="w-full flex flex-col items-center ">
            <div class=" mt-4 mx-4 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col w-11/12 "> 
                <strong class="text-rviolet text-2xl block p-2"> About Me </strong>
                <div class="w-full h-2 bg-rviolet rounded-md"></div>
                <div class="max-w-full flex flex-row justify-between text-rviolet p-2 text-xl">
                    <div>
                        I am a mathematician, educator, and coder. I'm currently on a gap year from graduate school at UNC Chapel Hill,
                        where I have been studying algebraic geometry and topology for the past two years in the mathematics department.
                        I completed my Bachelor's degree at UW Seattle in 2020, graduating with honors after writing my thesis on
                        homological algebra, and I plan to finish my Master's this coming Fall. In my year off, I've been tutoring students 
                        in math and learning to code. I have a passion for helping people "see" mathematics the way I do, and I hope to use 
                        my new programming skills to become a better educator. 
                    </div>
                    <img src='./me.jpg' className='w-1/5 rounded-lg'></img>
                </div>
            </div>
        </div>
        
    );
}