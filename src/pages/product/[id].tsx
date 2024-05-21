import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,90</span>
                <p>Esta camiseta é a definição de estilo despojado e moderno. Cada peça é única graças ao processo artesanal de tingimento. Feita de algodão 100% orgânico, esta camiseta não só é confortável e respirável, mas também sustentável.

                    O design oversized proporciona um ajuste solto e casual, perfeito para qualquer ocasião, seja um passeio no parque ou um encontro com amigos. Combine-a com jeans rasgados para um visual streetwear ou com shorts para um look mais descontraído.

                    Com acabamento de alta qualidade e costuras reforçadas, esta camiseta é feita para durar e ser uma peça-chave no seu guarda-roupa. Seja a estrela do seu próprio desfile de moda com esta camiseta que une conforto, estilo e sustentabilidade em uma só peça.</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}