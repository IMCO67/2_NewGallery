import { useState, forwardRef, useImperativeHandle } from "react";
import { Star } from "./Star";

export const Rate = forwardRef(({ conoceRate, index }, ref) => {
    const [raiting, setRaiting] = useState(0);
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    useImperativeHandle(ref, () => ({
        resetear: () => {
            setRaiting(0);
            console.log("Reseteo el rate index " + index);
        }
    }));

    const avisaRate = (valor) => {
        setRaiting(valor);
        conoceRate(index, valor);
    };

    return (
        <div className="stars">
            {stars.map((star, i) => (
                <Star key={i} star={star} raiting={raiting} avisaRate={avisaRate} />
            ))}
        </div>
    );
});