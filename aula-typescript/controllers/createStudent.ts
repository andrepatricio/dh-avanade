export class CreateStudentController {
    handle(httpRequest: any): any {

        let schema = {
            first_name: {
                required: true
            },
            email: {
                required: true
            }
        }

        for(const elem in schema) {
            if(!httpRequest.body[elem] && schema[elem].required){
                return {
                            status: 400,
                            body: new Error(`Aluno sem um campo obrigatorio: ${elem}`)
                        }
            }
        }
        
    }
}