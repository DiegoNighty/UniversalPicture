import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {Button} from "../components/Button";
import {Container} from "../components/Section"
import {Avatar} from "../components/Avatar"

export async function loader() {
    return json(
        {
            name: "Diego",
            imageUrl: "https://pbs.twimg.com/profile_images/1521300754295771136/NZ3A6FkR_400x400.jpg"
        }
    );
}

export default function Index() {
    const userData = useLoaderData();

    return (
        <Container type="white-shadow">
            <div className="p-5">
                <Avatar
                    type="login"
                    user={userData}
                />
            </div>
            <div className="px-10">
                <h1>Hey {userData.name}, Welcome!</h1>
            </div>
            <div className="py-5">
                <Button type="primary">Manage Account</Button>
            </div>
        </Container>
    );
}