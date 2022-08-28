import {urlImages} from "./constants/urlImages";

export const randomImage = () => {
    const randomImage = urlImages[Math.floor(Math.random()* urlImages.length)]
    return randomImage;
}