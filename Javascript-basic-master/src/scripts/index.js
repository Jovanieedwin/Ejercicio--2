
import { users, directory } from './constantes.js';
import calcularEdad, { obtenerEdad } from './funcion';
let arrayUser = [];
{

    const obtenerId = correo => {
        return new Promise((resolve, reject) => {
            const arrayCorreo = directory.find(v => correo == v.email);
            if (arrayCorreo) {
                console.log('El Correo Si existe ');
                resolve(obtenerDatos(arrayCorreo.id));
            } else {
                reject('El Correo no existe');
            }
        });
    };
    const obtenerDatos = correo => {
        return new Promise((resolve, reject) => {
            arrayUser = users.find(v => correo == v.id);
            if (arrayUser) {
                resolve('exito Al obtener los datos Datos');
            } else {
                reject('Los datos no Existen');
            }
        });
    };
// Aqui ingresa el correo a buscar
    obtenerId('jesus.avila@axity.com').then(res => {
        return res;
    })
        .then(mensaje => {
            console.log(mensaje);
        }).catch(error => console.error(error));
    if (arrayUser) {
        const fecha = new Date(arrayUser.yearBirth, arrayUser.monthBirth, arrayUser.dayBirth);
        const yearsO = calcularEdad(fecha);

        var user = new Object;
        user.id = arrayUser.id;
        user.name = arrayUser.name +" "+ arrayUser.lastName;
        user.dateBirth = arrayUser.dayBirth + "/" +arrayUser.monthBirth,arrayUser.yearBirth;
        user.yearsOld = yearsO;

        console.log("El objeto user contiene lo siguiente",user);

    }


    // console.log(str1.concat(' ', str2));


}


