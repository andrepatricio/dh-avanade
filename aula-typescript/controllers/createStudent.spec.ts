import { CreateStudentController } from './createStudent'

test('Deve retornar 400 quando o aluno não possuir nome', () => {
    let controller = new CreateStudentController();
    let httpRequest = {
        body: {
            "last_name": "Patricio",
            "birthday": "1991-05-09",
            "email": "apatricio@digitalhouse.com"
        }
    }
    let httpResponse = controller.handle(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new Error("Aluno sem um campo obrigatorio: first_name"))
})

test('Deve retornar 400 quando o aluno não possuir email', () => {
    let controller = new CreateStudentController();
    let httpRequest = {
        body: {
            "first_name": "Andre",
            "last_name": "Patricio",
            "birthday": "1991-05-09"
        }
    }
    let httpResponse = controller.handle(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new Error("Aluno sem um campo obrigatorio: email"))
})

test('Deve retornar 200 quando o aluno estiver OK', () => {
    let controller = new CreateStudentController();
    let httpRequest = {
        body: {
            "first_name": "Andre",
            "last_name": "Patricio",
            "birthday": "1991-05-09",
            "email": "apatricio@digitalhouse.com"
        }
    }
    let httpResponse = controller.handle(httpRequest)
    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body).toEqual(httpRequest.body)
})