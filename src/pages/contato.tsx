import Head from "next/head";
import Link from "next/link";

const contatos = () => {
    return (
        <>
        <Head>
            <title>Contatos | Gustavo</title>
        </Head>
        <div>
            <h1>Contatos</h1>
            <Link href="/"> Voltar</Link>
        </div>
        </>
    )
}

export default contatos;