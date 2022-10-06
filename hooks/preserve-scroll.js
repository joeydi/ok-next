import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function usePreserveScroll() {
    const router = useRouter();

    const scrollPositions = useRef({});
    const isBack = useRef(false);

    useEffect(() => {
        router.beforePopState(() => {
            isBack.current = true;
            return true;
        });

        const onRouteChangeStart = function () {
            const url = router.pathname;
            scrollPositions.current[url] = window.scrollY;
        };

        const onRouteChangeComplete = function () {
            const url = router.pathname;
            if (isBack.current && scrollPositions.current[url]) {
                window.scroll({
                    top: scrollPositions.current[url],
                    behavior: "auto",
                });
            }

            isBack.current = false;
        };

        router.events.on("routeChangeStart", onRouteChangeStart);
        router.events.on("routeChangeComplete", onRouteChangeComplete);

        return () => {
            router.events.off("routeChangeStart", onRouteChangeStart);
            router.events.off("routeChangeComplete", onRouteChangeComplete);
        };
    }, [router]);
}
