import { Button } from '@/components/ui/button';
import "../../css/app.css";
import { Input } from '@/components/ui/input';
import { decrypt, encrypt, generateKey } from "@/lib/encryption";
import { useState } from 'react';

export default function Home() {
    const [secret, setSecret] = useState<string>("");

    async function keyFlow() {
        const key = await generateKey();
        const { ciphertext, iv } = await encrypt(secret, key);
        const decrypted = await decrypt(ciphertext, key, iv);

        console.log("encrypted: ", ciphertext);
        console.log("iv: ", iv);
        console.log("decrypted: ", decrypted);
    }

        return (
        <div>
            <h1 className="p-6">Welcome, share your password safely!</h1>
            <div className="flex flex-col gap-4 p-6">
                <Input placeholder="Secret" type="text" onChange={(e) => setSecret(e.target.value)}/>
                <Button onClick={keyFlow} variant="default">Create a url</Button>
            </div>
        </div>
    );
}
