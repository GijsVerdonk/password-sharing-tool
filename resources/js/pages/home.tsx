import { Button } from '@/components/ui/button';
import "../../css/app.css";
import { Input } from '@/components/ui/input';


export default function Home() {
    return (
        <div>
            <h1 className="p-6">Welcome, share your password safely!</h1>
            <div className="flex flex-col gap-4 p-6">
                <Input placeholder="Password" type="text" />
                <Button variant="default">Create a url</Button>
            </div>
        </div>
    );
}
