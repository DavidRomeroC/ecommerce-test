import Image from "next/image";
import { ChangeEvent, FC, FormEvent, useState } from "react";

interface PropsInputSearch {
    nameInput: string;
    placeholder: string;
    type: string;
}


export const InputSearch: FC<PropsInputSearch> = ({nameInput, placeholder, type}) => {

    const [inputValue, setInputValue] = useState({
        search: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>
                    <Image  
                    src={require("../../src/images/buscar.png" )}
                    alt='search logo' 
                    width="15" 
                    height="15" 
                    />
                </button>
                <input name={nameInput} placeholder={placeholder} type={type} value={inputValue.search} onChange={handleChange} />
            </form>
        </>
    )
}
