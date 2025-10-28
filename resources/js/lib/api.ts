export async function postSecret(encryptedBody: string) {
    const response = await fetch("http://127.0.0.1:8000/api/secrets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ encrypted_body: encryptedBody }),
    });

    if (!response.ok) {
        throw new Error("Failed to save secret");
    }

    return response.json();
}

export async function getSecret(uuid: string) {
    const response = await fetch("http://127.0.0.1:8000/api/secrets/" + uuid, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to save secret");
    }

    return response.json();
}
