import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useDefaultSeo(customSeo) {
    const router = useRouter();

    const defaultSeo = {
        canonical: `${process.env.BASE_URL}${router.asPath}`,
        openGraph: {},
    };

    const [seo, setSeo] = useState({
        ...defaultSeo,
        ...customSeo,
    });

    useEffect(() => {
        const mergedSeo = {
            ...defaultSeo,
            ...customSeo,
        };

        setSeo(mergedSeo);
    }, [router]);

    return seo;
}
