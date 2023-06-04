

const credentialsAuth(request, response) => {
    console.log('hola mundo');
    if(request.method != 'POST'){
        response.status(405).end();
        return;
    }

    if(request.body.password === process.env.AUTH_PLATZI_SECRET){
        const platziuser ={
            name = 'platzi student',
            email = 'platzi@mail.com',
            image = '',
        }

        return response.status(200).json(platziuser);
    }

    response.status(401).end();

}

export default credentialsAuth;