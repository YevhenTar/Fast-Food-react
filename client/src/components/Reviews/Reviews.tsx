import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Reviews.scss';
import bigCircle from '../../assets/img/reviews-section/big-circle.svg';
import smallCircle from '../../assets/img/reviews-section/small-circle.svg';
import quotes from '../../assets/img/reviews-section/quotes.svg';
import { reviewsData } from './reviewsData';

const Reviews = () => {
    const orbitRef = useRef<HTMLDivElement>(null);
    const [centerPerson, setCenterPerson] = useState(reviewsData[0]);
    const [circlePeople, setCirclePeople] = useState(reviewsData.slice(1));
    const [isTextFading, setIsTextFading] = useState(false);

    // значение текущего угла вращения
    const rotationAngle = useRef({ angle: 0 });

    // запускаем бесконечную анимацию вращения
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(rotationAngle.current, {
                angle: 360,
                duration: 20,
                repeat: -1,
                ease: 'none',
                onUpdate: () => {
                    const orbitEl = orbitRef.current;
                    if (!orbitEl) return;

                    const currentAngle = rotationAngle.current.angle;

                    // вращаем контейнер
                    orbitEl.style.transform = `rotate(${currentAngle}deg)`;

                    // компенсируем вращение для каждого портрета
                    const wrappers = orbitEl.querySelectorAll('.orbit-item-wrapper');
                    wrappers.forEach((el) => {
                        (el as HTMLElement).style.transform = `rotate(${-currentAngle}deg)`;
                    });
                },
            });
        });

        return () => ctx.revert(); // очистка при размонтировании
    }, []);

    const handlePhotoClick = (index: number) => {
        const clickedPerson = circlePeople[index];
        setIsTextFading(true);

        setTimeout(() => {
            const newCircle = [...circlePeople];
            newCircle[index] = centerPerson;
            setCenterPerson(clickedPerson);
            setCirclePeople(newCircle);
            setIsTextFading(false);
        }, 300);
    };


    return (
        <section className="reviews-section" id="reviews-point">
            <div className="container reviews-section__container">
                <div className="picture-block scroll-animate">
                    <div className="picture-wrap">
                        <img src={bigCircle} alt="circle"
                             className="picture-wrap__image picture-wrap__image_big-circle"/>
                        <img src={smallCircle} alt="circle"
                             className="picture-wrap__image picture-wrap__image_small-circle"/>

                        {/* Центральное фото */}
                        <img
                            src={centerPerson.photo}
                            alt={centerPerson.name}
                            className="picture-wrap__image picture-wrap__image_center"
                            style={{ zIndex: 2 }}
                        />

                        {/* Вращающийся контейнер с компенсирующей обёрткой */}
                        <div className="orbit-container" ref={orbitRef}>
                            {circlePeople.map((person, i) => (
                                <div
                                    className={`orbit-item-wrapper orbit-item-${i}`}
                                    key={person.name}
                                >
                                    <img
                                        src={person.photo}
                                        alt={person.name}
                                        className="orbit-item-image"
                                        onClick={() => handlePhotoClick(i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* блок текста */}
                <div className="text-wrap scroll-animate">
                    <div
                        className={`text-wrap__service-block ${
                            isTextFading ? 'fade-out' : 'fade-in'
                        }`}
                    >
                        <img src={quotes} alt="quotes" className="text-wrap__quotes" />
                        <p className="text-wrap__text">{centerPerson.review}</p>
                        <p className="text-wrap__name">{centerPerson.name}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;