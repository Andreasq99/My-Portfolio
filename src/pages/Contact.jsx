

export default function ContactPage(){
    return(
        <div className="w-4/5 h-full flex flex-col justify-between items-center">
            <div class=" mt-4 mx-4 bg-aviolet h-30 mt-26 p-2 rounded-xl flex flex-col w-11/12 "> 
                <strong class="text-rviolet text-2xl block p-2"> Contact </strong>
                <div class="w-full h-2 bg-rviolet rounded-md"></div>
                <div class="max-w-full flex flex-row justify-between text-rviolet p-2 text-xl">
                    <div>
                        You can reach me at aquist@unc.edu.<br/>
                        GitHub: <a href="https://github.com/Andreasq99" className="underline text-aviolet">Andreasq99.</a><br/>
                        LinkedIn: <a href="https://www.linkedin.com/in/andreas-quist-67b909274/" ><span className="underline text-aviolet">Andreas Quist</span></a><br/>
                        <br/>
                        Feel free to reach out with any inquiries! I am available for tutoring and coding work, and I'm always up for chatting about math, computing, and art.

                    </div>
                </div>
            </div>
        </div>
    );
}