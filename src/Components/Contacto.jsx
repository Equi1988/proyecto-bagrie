import { useForm } from "react-hook-form";
import { useState } from "react";
import './Contacto.css';

const Contacto = () => {
    const { register, handleSubmit, reset } = useForm();
    const [showAlert, setShowAlert] = useState(false);

    const enviar = () => {
        setShowAlert(true);
        reset();

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <button className="enviar" type="submit">Enviar</button>
            </form>

            {showAlert && (
                <div className="custom-alert">
                    Los datos fueron guardados
                </div>
            )}
        </div>
    );
};

export default Contacto;
