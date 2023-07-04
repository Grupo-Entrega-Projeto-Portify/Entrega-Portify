import { StyledModal } from "./modal";

interface IModalProps {
    children: React.ReactNode;
}

export function Modal ({ children }: IModalProps) {
    return (
        <StyledModal >
            <div className="modalController">
                {children}
            </div>
        </StyledModal>
    )
}