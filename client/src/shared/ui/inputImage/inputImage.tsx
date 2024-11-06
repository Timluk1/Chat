import styles from "./inputImage.module.scss";
import { RefObject, useState, ChangeEvent } from "react";

interface IInputImageProps {
    inputImageRef: RefObject<HTMLInputElement>;
}

export function InputImage({ inputImageRef }: IInputImageProps) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.inputImageWrapper}>
            <label className={styles.inputImage}>
                <input
                    ref={inputImageRef}
                    type="file"
                    name="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                />
                {preview ? (
                    <img src={preview} alt="Выбранное изображение" className={styles.imagePreview} />
                ) : (
                    <span className={styles.inputImageBtn}>Выберите изображение</span>
                )}
            </label>
        </div>
    );
}
