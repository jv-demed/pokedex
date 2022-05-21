import { useRouter } from "next/router";

export default function Pokemon(){

    const router = useRouter();
    const param = router.query.pokemon;

    return(
        <h1>Pokédex: {param}</h1>
    )
}