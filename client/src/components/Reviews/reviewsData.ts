export interface Review {
    name: string;
    review: string;
    photo: string;
    initialRotation: number;
}

import ladyOne from '../../assets/img/reviews-section/lady-photo-one.png';
import ladyTwo from '../../assets/img/reviews-section/lady-photo-two.png';
import ladyThree from '../../assets/img/reviews-section/lady-photo-three.png';
import manOne from '../../assets/img/reviews-section/man-photo-one.png';
import manTwo from '../../assets/img/reviews-section/man-photo-two.png';

export const reviewsData: Review[] = [
    {
        name: "Adele A. McNeill",
        review:
            "Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite. Add a joy of best Taste. Foodie Moments.",
        photo: ladyOne,
        initialRotation: 0
    },
    {
        name: "Veronica J. Blake",
        review:
            "Delicious food and super friendly service! I'm definitely coming back with friends.",
        photo: ladyTwo,
        initialRotation: 0
    },
    {
        name: "Sophia L. Riley",
        review:
            "Every bite was full of flavor! Amazing quality and perfect portions.",
        photo: ladyThree,
        initialRotation: 0
    },
    {
        name: "James T. O’Connor",
        review:
            "Very impressed with the speed and taste. Would highly recommend this place.",
        photo: manOne,
        initialRotation: 0
    },
    {
        name: "Michael R. Daniels",
        review:
            "The burgers are insane. Best in town, no doubt. Great atmosphere too!",
        photo: manTwo,
        initialRotation: 0
    },
];

