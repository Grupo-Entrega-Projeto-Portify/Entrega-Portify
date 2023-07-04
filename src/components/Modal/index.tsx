import { useContext, useEffect, useRef } from "react";
import { StyledModal } from "./modal";
import { PortifolioContext } from "../../providers/PortifolioContext/PortifolioContext";

interface IModalProps {
    children: React.ReactNode;
}

export function Modal ({ children }: IModalProps) {
    const { modalCreate, setModalCreate } = useContext(PortifolioContext)

    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleOutclick = (event: MouseEvent) => {
            if(!modalRef.current?.contains(event.target as Node)) {
                setModalCreate(false)
            }
        }
        
        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
        }
    }, [])

    // const buttonRef = useRef(null)
    useEffect(() => {
        const handleKeydown = (event: KeyboardEventInit) => {
            if(event.key === "Escape") {
                setModalCreate(false)
            }
        }

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        }
    })

    return (
        <StyledModal >
            <div ref={modalRef} className="modalController">
                {children}
            </div>
        </StyledModal>
    )
}