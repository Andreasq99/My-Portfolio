import {
    Card, CardHeader, CardBody, CardFooter, Typography
} from '@material-tailwind/react'

export default function PortfolioPage(){
    return(
        <div className="w-full flex flex-col items-center p-4 mx-4 bg-aviolet rounded-lg">
            <div className='w-11/12 flex flex-row justify-between'>
                <Card className='w-1/4 mt-4 py-2 bg-uviolet h-96'>
                    <CardHeader className='relative my-14'>
                        <img src='./wave-exchange.png'/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant='h5' className='text-plavender'>
                            Wave Exchange
                        </Typography>
                        <Typography className='text-plavender'>
                            An online music sharing and exploration platform I worked on in my coding class.
                        </Typography>
                    </CardBody>
                    <CardFooter className='pt-0 flex flex-row justify-center'>
                        <a href='https://wave-exchange.onrender.com/'><button className='mr-4 px-8 lg-block bg-rviolet text-plavender border-rviolet hover:bg-rviolet-300 border-rviolet items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md'> Explore </button></a>
                    </CardFooter>
                </Card>
                <Card className='w-1/4 mt-4 py-2 bg-uviolet h-96'>
                    <CardHeader className='relative my-14'>
                        <img src='./tinlizzie.png'/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant='h5' className='text-plavender'>
                            Tin Lizzie
                        </Typography>
                        <Typography className='text-plavender'>
                            An online network for buying and selling used cars, which I worked on during my coding class.
                        </Typography>
                    </CardBody>
                    <CardFooter className='pt-0 flex flex-row justify-center'>
                        <a href='https://github.com/Andreasq99/Tin-Lizzie'><button className='mr-4 px-8 lg-block bg-rviolet text-plavender border-rviolet hover:bg-rviolet-300 border-rviolet items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md'> Explore </button></a>
                    </CardFooter>
                </Card>
                <Card className='w-1/4 mt-4 py-2 bg-uviolet h-96'>
                    <CardHeader className='relative my-14'>
                        <img src='./weatherwiz.png'/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant='h5' className='text-plavender'>
                            WeatherWiz
                        </Typography>
                        <Typography className='text-plavender'>
                            A simple weather forecast app using the OpenWeatherMap API. 
                        </Typography>
                    </CardBody>
                    <CardFooter className='pt-0 flex flex-row justify-center'>
                        <a href='https://github.com/Andreasq99/Weather-App'><button className='mr-4 px-8 lg-block bg-rviolet text-plavender border-rviolet hover:bg-rviolet-300 border-rviolet items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md'> Explore </button></a>
                    </CardFooter>
                </Card>
                
            </div>
            <div className='w-11/12 flex flex-row justify-between'>
                <Card className='w-1/4 mt-4 py-2 bg-uviolet h-96'>
                    <CardHeader className='relative my-14'>
                        <img src='./readme-gen.png'/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant='h5' className='text-plavender'>
                            README Generator
                        </Typography>
                        <Typography className='text-plavender'>
                            A CLI app for generating README.md files for your repositories! 
                        </Typography>
                    </CardBody>
                    <CardFooter className='pt-0 flex flex-row justify-center'>
                        <a href='https://github.com/Andreasq99/README-generator'><button className='mr-4 px-8 lg-block bg-rviolet text-plavender border-rviolet hover:bg-rviolet-300 border-rviolet items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md'> Explore </button></a>
                    </CardFooter>
                </Card>
                <Card className='w-1/4 mt-4 py-2 bg-uviolet h-96'>
                    <CardHeader className='relative my-14'>
                        <img src='./snapi.png'/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant='h5' className='text-plavender'>
                            Social Network API
                        </Typography>
                        <Typography className='text-plavender'>
                            A backend for a social network platform, which can be queried on Insomnia. Includes CRUD features for users, posts, and friend relations.
                        </Typography>
                    </CardBody>
                    <CardFooter className='pt-0 flex flex-row justify-center'>
                        <a href='https://github.com/Andreasq99/Social-Network-API'><button className='mr-4 px-8 lg-block bg-rviolet text-plavender border-rviolet hover:bg-rviolet-300 border-rviolet items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md'> Explore </button></a>
                    </CardFooter>
                </Card>
                <Card className='w-1/4 mt-4 py-2 bg-uviolet h-96'>
                    <CardHeader className='relative my-14'>
                        <img src='./lingochat.png'/>
                    </CardHeader>
                    <CardBody>
                        <Typography variant='h5' className='text-plavender'>
                            LingoChat
                        </Typography>
                        <Typography className='text-plavender'>
                            A website for connecting with fellow language learners and meeting up to learn together! Front-end only.
                        </Typography>
                    </CardBody>
                    <CardFooter className='pt-0 flex flex-row justify-center'>
                        <a href='https://github.com/colcob98/LingoChat'><button className='mr-4 px-8 lg-block bg-rviolet text-plavender border-rviolet hover:bg-rviolet-300 border-rviolet items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md'> Explore </button></a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}