import { ImageContainer, SucessContainer } from "@/styles/pages/sucess";
import Link from "next/link";

export default function Sucess() {
    return (
        <SucessContainer>
            <h1>Compra Efetuada</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Gustavo</strong>, sua <strong>Camiseta</strong> já está a caminho.
            </p>

            <Link href="/">
                Voltar ao Catálogo
            </Link>
        </SucessContainer>
    )
}