"use client"
import QuoteDetails from "@/components/cards/QuoteDetails"
import { quotes } from "@/data/quotes"

export default async function ShowQuote({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params
    console.log(slug)
    const quote = quotes.find((elem) => elem.id === slug)
    console.log(quote)
    // Gestion du cas où la citation n'est pas trouvée
    if (!quote) {
        return (
            <section className="min-h-screen pb-50 pt-30">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            Citation non trouvée
                        </h1>
                        <p className="text-gray-600">
                            La citation que vous recherchez n'existe pas.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
    
    return (
        <>
            <section className="min-h-screen pb-50 pt-30">
                <QuoteDetails quote={quote} />    
            </section>        
        </>
    )
}