
export default function ResumePage(){
    return(
        <div className="w-full flex flex-col items-center ">
    <div class=" mt-4 mx-4 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col w-11/12 "> 
    <strong class="text-rviolet text-2xl block p-2"> Skills </strong>
    <div class="w-full h-2 bg-rviolet rounded-md"></div>
    <div class="w-full flex flex-row align-left">
        <ul class="w-3/12 -mr-20">
            <li class="text-rviolet text-lg p-4">JavaScript </li>
            <li class="text-rviolet text-lg p-4">Databases</li>
            <li class="text-rviolet text-lg p-4">Mathematics </li>
        </ul>

        <ul class="w-5/12">
            <li class="text-rviolet text-lg p-4">Node.js, Express.js, React.js, MERN Stack</li>
            <li class="text-rviolet text-lg p-4">SQL, Sequelize, NoSQL, MongoDB, IndexedDB</li>
            <li class="text-rviolet text-lg p-4">Abstraction, Algebraic and Topological Methods, Formal Logic</li>
        </ul>
    </div>
</div>

<div class="min-w-10/12 w-11/12 mt-4 mx-2 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col"> 
    <strong class="text-rviolet text-2xl block p-2"> Education </strong>
    <div class="w-full h-2 bg-rviolet rounded-md"></div>
    <div class="w-full flex flex-row justify-around align-left">
    

        <ul class="w-full">
            <li class="text-rviolet text-lg p-4 flex flex-row"><span class="w-32 inline-block">2023</span> <i class="mr-2">UNC Coding Bootcamp, </i> University of North Carolina at Chapel Hill</li>
            <li class="text-rviolet text-lg p-4 flex flex-row"><span class="w-32 inline-block">2021-Present</span> <i class="mr-2">Masters in Mathematics, </i> University of North Carolina at Chapel Hill</li>
            <li class="text-rviolet text-lg p-4 flex flex-row"><span class="w-32 block">2018-2020</span> <i class="mr-2">Bachelor's of Science with Honors,</i> University of Washington Seattle</li>
        </ul>

       
    </div>
</div>
    
<div class="min-w-10/12 text-rviolet w-11/12 mt-4 mx-2 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col"> 
    <strong class="text-2xl block p-2"> Thesis </strong>
    <div class="w-full h-2 bg-rviolet rounded-md"></div>
    <div class="w-full p-4">
        <p class=""><b class="mr-2">Title:</b><i>Homological Algebra and the Grothendieck Spectral Sequence</i>, 2020.</p>
        <p class="py-2"><b class="mr-2">Supervisor:</b>Professor Sándor Kovács of the University of Washington</p>
        <p class="w-3/4"><b class="mr-2">Description:</b>A survey of the basics of homological algebra: short exact sequences, abelian categories, derived functors. Concludes with proofs of the Grothendieck and Leray spectral sequences.</p>
    </div>
</div>

<div class="min-w-10/12 w-11/12 mt-4 mx-2 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col"> 
    <strong class="text-rviolet text-2xl block p-2"> Previous Work </strong>
    <div class="w-full h-2 bg-rviolet rounded-md"></div>
    <div class="w-full flex flex-row justify-around align-left">
    

        <ul class="w-full text-rviolet">
            <li class=" text-lg pt-4 pb-2 flex flex-row"><span class="w-32 inline-block">2021-2023</span> <i class="mr-2">Graduate Teaching Assistant, </i> University of North Carolina at Chapel Hill</li>
                <li class="ml-36 w-3/4">Positions included grader, recitation leader, instructor of record. Taught hundreds of students in classes ranging from Precalculus to Discrete Mathematics.</li>
            <li class="text-lg pt-4 pb-2 flex flex-row"><span class="w-32 inline-block">2017-Present</span> <i class="mr-2">Mathematics Tutor, </i> Self-Employed</li>
                <li class="ml-36 w-3/4">
                    One-on-one tutoring on math topics ranging from early highschool to senior-level undergraduate courses. 
                    Deep skills with technology and visualization techniques to help students understand complex concepts
                </li>
        </ul>

    </div>
</div>
        </div>
    );
}