import * as Icons from "../icon/IconProvider"
import {Button} from "../components/Button"

export const Socials = ({divStyle}) => {
    return (
        <div className={divStyle}>
            <Button type="social-icon-large" background="bg-blue-500">
                <Icons.Facebook/>
            </Button>

            <Button type="social-icon-large" background="bg-blue-400">
                <Icons.Twitter/>
            </Button>

            <Button type="social-icon-large" background="bg-red-500">
                <Icons.Reddit/>
            </Button>

            <Button type="social-icon-large" background="bg-pink-600">
                <Icons.Pinterest/>
            </Button>

            <Button type="social-icon-large" background="bg-blue-600">
                <Icons.LinkedIn/>
            </Button>

            <Button type="social-icon-large" background="bg-red-600">
                <Icons.Youtube/>
            </Button>

            <Button type="social-icon-large" background="bg-gray-700">
                <Icons.Github/>
            </Button>

            <Button type="social-icon-large" background="bg-red-500">
                <Icons.Google/>
            </Button>

            <Button type="social-icon-large" background="bg-[#738ADB]">
                <Icons.Discord/>
            </Button>
        </div>
    )
}