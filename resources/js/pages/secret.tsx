import "../../css/app.css";
import { decrypt } from '@/lib/encryption';
import { getSecret } from '@/lib/api';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = { uuid: string; secretKey: string };
export default function Secret({uuid, secretKey}: Props) {
    const [secret, setSecret] = useState<string>("");
    async function keyFlow() {
        const response = await getSecret(uuid);
        const encryptedBody = response.encrypted_body;
        const decryptedBody = await decrypt(encryptedBody, secretKey);
        setSecret(decryptedBody);
    }

    useEffect(() => {
        keyFlow()
    }, []);

        return (
        <div>
            <h1 className="p-6 text-2xl">Password sharing tool</h1>
            <h1 className="p-6">Fetch the safed password here!</h1>
            <div className="flex flex-col gap-4 p-6">
                {secret ? (
                    <Input placeholder="Secret" type="text" value={secret} />
                ) : (
                    <p>This url is not valid anymore.</p>
                )}
            </div>
            <Button asChild className="m-6">
                <a href="/">Create your own secret</a>
            </Button>
        </div>
        );
}
