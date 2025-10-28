import { Button } from '@/components/ui/button';
import "../../css/app.css";
import { Input } from '@/components/ui/input';
import { generateKey, encrypt } from '@/lib/encryption';
import { postSecret } from "@/lib/api";
import { useState } from 'react';

export default function Home() {
    const [secret, setSecret] = useState<string>("");
    const [url, setUrl] = useState<string>("");

    async function keyFlow() {
        const key = generateKey();
        const encryptedBody = await encrypt(secret, key);
        const response = await postSecret(encryptedBody)
        const uuid = response.uuid;
        const url = window.location.origin + "/secret/" + uuid + "/" + key;

        setUrl(url);
    }

        return (
        <div>
            <h1 className="p-6 text-2xl">Password sharing tool</h1>
            <h1 className="p-6">Welcome, share your password safely here!</h1>
            <div className="flex flex-col gap-4 p-6">
                <Input placeholder="Secret" type="text" onChange={(e) => setSecret(e.target.value)}/>
                {url && <Input placeholder="Url" type="text" value={url} readOnly/>}
                <Button onClick={keyFlow} variant="default">Create a url</Button>
            </div>
        </div>
    );
}
