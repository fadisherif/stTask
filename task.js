import express from 'express';

const app=express();

const students = [
    {
        id: 1 ,
        name: "fady",
        city: "cairo"
    },
    {
        id: 2 ,
        name: "sameh",
        city: "Alex"
    },
    {
        id: 3 ,
        name: "Mohamed",
        city: "Aswan"
    }
];


const studentFunction = (request ,response)=>{
    let output = "<ul>";

    for(let i = 0 ; i < students.length ; i++){
        const student=students[i];
        output += "<li>" + "ID: " + student.id + "</li>";
        output += "<li>" + "Name: " + student.name + "</li>";
        output += "<li>" + "City: " + student.city + "</li>";
        output += "<br>"
    }
    output += "</ul>"
    response.send(output);
}


app.get("/students",studentFunction)


app.listen(5000);