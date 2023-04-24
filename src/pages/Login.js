import Header from "../components/Header"
export default function LoginPage(){
    return(
        <>
            <Header
                heading="Login to your account"
                paragraph={"Don't have an account yet"}
                linkName={"SignUp"}
                linkUrl="/signup"
            />
        </>
    )
}