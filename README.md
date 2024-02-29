# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

\_ Consignas y requisitos de entrega:

1.- La temática del formulario puede ser cualquiera de nuestra preferencia. Podemos solicitar información sobre música, animales, libros, autos, personajes o lo que deseemos.
2.- El formulario deberá contener, al menos, dos inputs de texto y un botón de tipo submit. Si lo deseamos, podemos agregar más inputs para hacer más completo nuestro formulario, pero esto es opcional.
3.- Al hacer clic en el botón de Enviar, debemos realizar las siguientes validaciones:
a)Para el caso del primer input, la longitud mínima del texto ingresado deberá ser de 3 caracteres y no deberá contener espacios en blanco al comienzo.
b)Para el segundo input, debemos validar que contenga al menos al menos 6 caracteres.
4.- En caso de que alguna de las validaciones sea incorrecta, debemos mostrar el siguiente mensaje de error: “Por favor chequea que la información sea correcta”.
5.- En caso de que los valores ingresados superen las validaciones en forma exitosa, debemos renderizar el componente llamado Card que contenga dicha información. Podemos darle el estilo y/o forma que deseemos, en tanto y en cuanto contenga al menos los mismos valores que se hayan ingresado en el formulario.
