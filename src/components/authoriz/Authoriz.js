import { useState } from 'react';
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';
const Authoriz = () => {
    const [message, setMessage] = useState(null);
    const [isLogin,setIsLogin] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSwitch = () => {
        setIsLogin(!isLogin);
      };
    // const handleAuth = async (url, values) => {
    //     setIsSubmitting(true);
    //     try {
    //         if (!isLogin) {
    //             await addUserData(values.login, values.password);
    //         }
    //         const response = await axios.post(url, values);
    //         if (response.status === 201) {
    //             setMessage("Успешная регистрация!");
    //         } else if (response.status === 200) {
    //             setMessage("Успешный вход в систему!");
    //         } else {
    //             setMessage("Ошибка сервера!");
    //         }
    //     } catch (err) {
    //         if (err.response.status === 409) {
    //             setMessage("Пользователь уже существует!");
    //         } else if (err.response.status === 401) {
    //             setMessage("Неправильный логин или пароль!");
    //         } else if (err.response.status === 404) {
    //             setMessage("Пользователь не найден!");
    //         } else {
    //             setMessage("Ошибка сервера!");
    //         }
    //         console.log(err);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };
    
return(
    <div className='form'>
          {message && (
      <div className="message">
        {message}
      </div>
    )}
        {isLogin ? (<Formik 
    initialValues={{
        login:"",
        password:""
    }}
    validationSchema={Yup.object({
        password:Yup.string()
        .min(8,"Минимум 8 символов!")
        .required("Обязательное поле!")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$/, 
            'Пароль должен содержать хотя бы одну букву в нижнем регистре, одну букву в верхнем регистре, одну цифру и один специальный символ'),
        login: Yup.string()
        .email('Неправильная структура email')
        .required('Обязательное поле!'),
    })}
    onSubmit={()=>console.log('req')}>
        <Form className = "form-container">
        <h2>Вход в систему</h2>
        <label htmlFor="text">Введите логин</label>
          <Field type = "text" name = "login"/>
          <ErrorMessage className = "form-error" name="login" component="div" />
          <label htmlFor="text">Введите пароль</label>
          <Field type = "password" name = "password"/>
          <ErrorMessage className = "form-error" name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </Form>
    </Formik>) : (
        <Formik 
        initialValues={{
            login:"",
            password:"",
            confirmPassword:""
        }}
        validationSchema={Yup.object({
            password:Yup.string()
            .min(8,"Минимум 8 символов!")
            .required("Обязательное поле!")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$/, 
                'Пароль должен содержать хотя бы одну букву в нижнем регистре, одну букву в верхнем регистре, одну цифру и один специальный символ'),
            login: Yup.string()
            .email('Неправильная структура email')
            .required('Обязательное поле!'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли не совпадают').required('Обязательное поле')
        })}
        onSubmit={()=>console.log('req')}>
            <Form className = "form-container">
                <h2>Регистрация</h2>
            <label htmlFor="text">Введите логин</label>
              <Field type = "text" name = "login"/>
              <ErrorMessage className = "form-error" name="login" component="div" />
              <label htmlFor="text">Введите пароль</label>
              <Field type = "password" name = "password"/>
              <ErrorMessage className = "form-error" name="password" component="div" />
              <label htmlFor="text">Подтвердите пароль</label>
              <Field type = "password" name = "confirmPassword"/>
              <ErrorMessage className = "form-error" name="confirmPassword" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Зарегистрироваться
              </button>
            </Form>
            </Formik>
    )} 
    {isLogin ?  <div 
    className = "registerField">
    Нет аккаунта ?  <a className="switch-button"
    onClick={handleSwitch} > 
    Зарегистрироваться</a>
    </div>: 
    <div 
    className = "registerField">
    Есть аккаунт ?  <a className="switch-button"
    onClick={handleSwitch} > 
    Войти</a>
    </div>}
    </div>
)
}
export default Authoriz;