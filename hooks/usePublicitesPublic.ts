"use client";

import { useEffect, useState } from "react";
import { Publicite } from "@/types/publicite.types";

export function usePublicitesPublic(position?: string) {
    const [publicites, setPublicites] = useState<Publicite[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
            console.error("NEXT_PUBLIC_API_URL n'est pas configurée.");
            setPublicites([]);
            setIsLoading(false);
            return;
        }

        const url = new URL(`${apiUrl}/public/publicites`);

        if (position) {
            url.searchParams.append("position", position);
        }

        setIsLoading(true);

        fetch(url.toString())
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        `Erreur HTTP ${res.status}`
                    );
                }

                return res.json();
            })
            .then((data) => {
                setPublicites(data.data ?? []);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors du chargement des publicités :",
                    error
                );

                setPublicites([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [position]);

    return {
        publicites,
        isLoading,
    };
}

