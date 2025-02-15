import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
        <Head>
            <title>Página não encontrada | Gustavo</title>
        </Head>
        <div>
            <h1>404</h1>
            <div>
                <p>Oops, não conseguimos encontrar essa página!</p>
                <span>Clique no botão aaixo para ser redirecionado para a Página Inicial</span>
            </div>
            <Link href="/">Voltar ao ínicio</Link>
        </div>
        </>
    )
}

export default NotFound;