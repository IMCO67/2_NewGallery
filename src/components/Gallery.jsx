import { useState, useRef } from "react";
import psj1 from '../assets/Psj_1.jpg';
import psj2 from '../assets/Psj_2.jpg';
import psj3 from '../assets/Psj_3.jpg';
import psj4 from '../assets/Psj_4.jpg';
import { Rate } from "./Rate";
import { Envia } from "./Button";
import { Modal } from "./Modal";

export const Gallery = () => {
    const [images, setImages] = useState([
        { src: psj1, rate: 0, id: 1, ref: useRef() },
        { src: psj2, rate: 0, id: 2, ref: useRef() },
        { src: psj3, rate: 0, id: 3, ref: useRef() },
        { src: psj4, rate: 0, id: 4, ref: useRef() }
    ]);

    const [modal, setModal] = useState(false);
    const [promedio, setPromedio] = useState(0);

    const actualizaRate = (index, valor) => {
        const newImages = [...images];
        newImages[index].rate = valor;
        setImages(newImages.sort((a, b) => b.rate - a.rate));
    };

    const sacaPromedio = () => {
        const prom = images.reduce((acum, img) => acum + img.rate, 0) / images.length;
        setPromedio(prom);
        setModal(true);
    };

    const reinicia = () => {
        const newImages = [...images];
        newImages.forEach(img => img.rate = 0);
        setImages(newImages);
        images.forEach(img => img.ref.current.resetear());
    };

    return (
        <main className="mainSection">
            {images.map((img, index) => (
                <div key={img.id} className="scoreCard">
                    <img src={img.src} alt={`Paisaje ${img.id}`} />
                    <Rate ref={img.ref} conoceRate={actualizaRate} index={images.indexOf(img)} />
                </div>
            ))}
            
            <Envia onClick={sacaPromedio}>Calcula promedio</Envia>
            
            <Modal isOpen={modal} onClose={() => setModal(false)} reinicia={reinicia}>
                <h2>Calificación de la galería</h2>
                <p>El promedio de la calificación es: {promedio}</p>
            </Modal>
        </main>
    );
};