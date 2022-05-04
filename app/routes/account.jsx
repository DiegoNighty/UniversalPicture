import {json} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";
import {Button} from "../components/Button";
import {Container} from "../components/Section"
import {Avatar} from "../components/Avatar"
import {Socials} from "../components/Social";

export async function loader() {
    return json(
        {
            name: "Diego",
            imageUrl: "https://pbs.twimg.com/profile_images/1521300754295771136/NZ3A6FkR_400x400.jpg"
        }
    );
}

export default function AccountPage() {
    const user = useLoaderData();

    return (
        <Container type="white-shadow">
            <div className="flex flex-row p-4">
                <div className="relative">
                    <h1 className="px-5 text-xl">Actual Profile Picture</h1>
                    <Avatar type="medium" user={user}/>
                    <div className="absolute bottom-2 right-4">
                        <Button type="small">✏️ Edit</Button>
                    </div>
                </div>
                <div className="ml-10">
                    <h1 className="px-2 text-xl">Link more social medias</h1>
                    <Socials divStyle="grid grid-cols-3 gap-1 p-5"/>
                </div>
            </div>


        </Container>
    );
}